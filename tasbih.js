document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display-counter');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    // Fungsi untuk memperbarui tampilan
    function updateDisplay() {
        display.textContent = count;
    }

    // Event saat tombol 'Hitung' diklik
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    // Event saat tombol 'Reset' diklik
    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});