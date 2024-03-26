const url = "https://men21049.github.io/wdd230/data/members.json";
const img_url = "https://men21049.github.io/wdd230/chamber/";
const busTitle1 = document.querySelector('.busTitle1');
const busTitle2 = document.querySelector('.busTitle2');
const busTitle3 = document.querySelector('.busTitle3');
const busdef1 = document.querySelector('.busdef1');
const busdef2 = document.querySelector('.busdef2');
const busdef3 = document.querySelector('.busdef3');
const busimg1 = document.querySelector('.busimg1');
const busimg2 = document.querySelector('.busimg2');
const busimg3 = document.querySelector('.busimg3');

window.onload = () =>{
    let usedIdx = [];
    let counter = 0;

    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlight(data.members);
      }
    
    function displaySpotlight(members){
       const fmembers = members.filter(item => item.membership_level === "Silver Membership" || item.membership_level === "Gold Membership");

       busdef1.textContent = fmembers[0].description;
       busdef2.textContent = fmembers[1].description;
       busdef2.textContent = fmembers[2].description;
       console.log(fmembers);
    }

    getLinks();
}