// Fungsi untuk alert coming soon pada index.html
function showComingSoonAlert() {
    alert("🚧 Website Portofolio sedang dalam pengembangan. Nantikan segera!");
}

// Fungsi untuk Tasbih Digital pada tasbih.html
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');

    if (counterElement && addButton && resetButton) {
        let count = 0;

        addButton.addEventListener('click', () => {
            count++;
            counterElement.textContent = count;
        });

        resetButton.addEventListener('click', () => {
            count = 0;
            counterElement.textContent = count;
        });
    }
});