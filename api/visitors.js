// ============================================
// VISITOR TRACKING API - Vercel Serverless Function
// ============================================

// In-memory store untuk tracking (akan reset saat function cold start)
// Untuk production, gunakan database seperti Redis, MongoDB, atau Vercel KV
// Catatan: Data akan hilang saat function cold start, untuk production gunakan Vercel KV atau database
let visitors = new Map();
const VISITOR_TIMEOUT = 60000; // 60 detik - visitor dianggap offline jika tidak update

// Cleanup function
function cleanupVisitors() {
    const now = Date.now();
    for (const [sessionId, data] of visitors.entries()) {
        if (now - data.lastSeen > VISITOR_TIMEOUT) {
            visitors.delete(sessionId);
        }
    }
}

export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    try {
        if (req.method === 'POST') {
            // Parse body - handle both parsed JSON and string
            let body = req.body;
            if (typeof body === 'string') {
                try {
                    body = JSON.parse(body);
                } catch (e) {
                    return res.status(400).json({ error: 'Invalid JSON body' });
                }
            }
            
            const { sessionId, action, timestamp, page, userAgent } = body;
            
            if (!sessionId) {
                return res.status(400).json({ error: 'Session ID required' });
            }
            
            if (action === 'register') {
                // Cleanup old visitors first
                cleanupVisitors();
                
                // Register atau update visitor
                const now = timestamp || Date.now();
                visitors.set(sessionId, {
                    sessionId,
                    lastSeen: now,
                    page: page || 'unknown',
                    userAgent: userAgent || 'unknown',
                    registeredAt: visitors.has(sessionId) 
                        ? visitors.get(sessionId).registeredAt 
                        : now
                });
                
                return res.status(200).json({
                    success: true,
                    onlineCount: visitors.size,
                    message: 'Visitor registered'
                });
            } else if (action === 'unregister') {
                // Cleanup old visitors first
                cleanupVisitors();
                
                // Unregister visitor
                if (visitors.has(sessionId)) {
                    visitors.delete(sessionId);
                }
                
                return res.status(200).json({
                    success: true,
                    onlineCount: visitors.size,
                    message: 'Visitor unregistered'
                });
            } else {
                return res.status(400).json({ error: 'Invalid action' });
            }
        } else if (req.method === 'GET') {
            // Get online count
            const action = req.query.action;
            
            if (action === 'getCount') {
                // Cleanup old visitors before counting
                cleanupVisitors();
                
                return res.status(200).json({
                    success: true,
                    onlineCount: visitors.size,
                    visitors: Array.from(visitors.values())
                });
            } else {
                return res.status(400).json({ error: 'Invalid action' });
            }
        } else {
            return res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Visitor API error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            message: error.message 
        });
    }
}

