const url = "https://men21049.github.io/wdd230/FinalProject/data/images.json";
const img_url = "https://men21049.github.io/wdd230/FinalProject";
const image = document.getElementById('cozumelImg');
const title = document.querySelector('.cozumelTitle')
const description = document.querySelector('.cozumelDesc');

window.onload = () =>{

    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlight(data.cozumel);
      }
    
      function displaySpotlight(cozumel){
        const min = 0;
        const max = cozumel.length;
        const idx = getRndInteger(min, max);

        title.textContent = cozumel[idx].title;
        description.textContent = cozumel[idx].description;
        image.setAttribute('src',img_url+ cozumel[idx].img);
        image.setAttribute('srcset',img_url+ cozumel[idx].img);
      }

      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    getLinks();
}