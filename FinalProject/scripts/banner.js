const bannerClose = document.querySelector('.banner_close');
const banner = document.querySelector('.banner');
const dt = new Date();

bannerClose.addEventListener('click', () => {
    banner.style.display = "none";
});

