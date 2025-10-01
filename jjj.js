$(function () {
    const $modal = $("#myModals");

    // Buka modal
    $("#openModals").on("click", () => $modal.fadeIn());

    // Tutup modal (klik tombol X)
    $(".closes").on("click", () => $modal.fadeOut());

    // Tutup modal (klik luar area)
    $(window).on("click", (e) => {
        if ($(e.target).is($modal)) $modal.fadeOut();
    });

    // Tutup modal pakai tombol ESC
    $(document).on("keydown", (e) => {
        if (e.key === "Escape") $modal.fadeOut();
    });
});
