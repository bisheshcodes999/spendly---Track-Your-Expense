// main.js — students will add JavaScript here as features are built

document.addEventListener("DOMContentLoaded", function () {
    var openBtn = document.getElementById("watch-demo-btn");
    var modal = document.getElementById("video-modal");
    var iframe = document.getElementById("video-modal-iframe");

    if (!openBtn || !modal || !iframe) return;

    // TODO: replace with the real demo video's YouTube ID
    var VIDEO_ID = "YOUR_VIDEO_ID";

    function openModal() {
        iframe.src = "https://www.youtube.com/embed/" + VIDEO_ID + "?autoplay=1&rel=0";
        modal.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.hidden = true;
        iframe.src = ""; // clearing the src stops playback
        document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", openModal);

    modal.querySelectorAll("[data-close-modal]").forEach(function (el) {
        el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && !modal.hidden) closeModal();
    });

    // Belt-and-suspenders: stop the video if the page is left or restored
    // from the back/forward cache while the modal is still open.
    window.addEventListener("pagehide", closeModal);
});
