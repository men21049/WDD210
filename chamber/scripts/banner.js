const bannerClose = document.querySelector('.banner_close');
const banner = document.querySelector('.banner');
const dt = new Date();

bannerClose.addEventListener('click', () => {
    banner.style.display = "none";
});

window.onload = () =>{

    if(dt.getDay() === 0 || dt.getDay() === 4 || dt.getDay()==5 || dt.getDay() === 6){
        banner.style.display = "none";
        console.log(dt.getDay());
    }
}
