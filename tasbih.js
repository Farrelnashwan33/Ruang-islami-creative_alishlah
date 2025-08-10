document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display-counter');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    // Fungsi update tampilan dengan animasi
    function updateDisplay(animated = true) {
        display.textContent = count;

        if (animated) {
            display.classList.add('pulse');
            setTimeout(() => display.classList.remove('pulse'), 200);
        }
    }

    // Fungsi untuk vibrasi (jika di HP)
    function vibrate(ms) {
        if (navigator.vibrate) navigator.vibrate(ms);
    }

    // Fungsi untuk mainkan suara (opsional)
    function playClickSound() {
        const clickSound = new Audio('click.mp3'); // siapkan file click.mp3
        clickSound.volume = 0.3;
        clickSound.play();
    }

    // Event tombol 'Hitung'
    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
        vibrate(30); // sedikit getar
        // playClickSound(); // aktifkan kalau mau pakai suara
    });

    // Event tombol 'Reset'
    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
        vibrate(80); // getar lebih lama saat reset
    });

    // Set awal
    updateDisplay(false);
});
