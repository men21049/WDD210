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
const usedIdx = [];

window.onload = () =>{
    let usedIdx = [];


    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displaySpotlight(data.members);
      }
    
    function displaySpotlight(members){
       const fmembers = members.filter(item => item.membership_level === "Silver Membership" || item.membership_level === "Gold Membership");
       
       const firstRandom = getRandomIDX(fmembers.length);
       const secondRandom = getRandomIDX(fmembers.length);
       const thirdRandom = getRandomIDX(fmembers.length);
       
       console.log(usedIdx);
       busdef1.textContent = fmembers[firstRandom].description;
       busdef2.textContent = fmembers[secondRandom].description;
       busdef3.textContent = fmembers[thirdRandom].description;
       busTitle1.textContent = fmembers[firstRandom].names;
       busTitle2.textContent = fmembers[secondRandom].names;
       busTitle3.textContent = fmembers[thirdRandom].names;

       if(fmembers[firstRandom].logo == "None"){
            busimg1.setAttribute('src','https://placehold.co/280x200/png');
            busimg1.setAttribute('srcset','https://placehold.co/280x200/png');
        }
        else{
            busimg1.setAttribute('src',img_url+fmembers[firstRandom].logo);
            busimg1.setAttribute('srcset',img_url+fmembers[firstRandom].logo);
            busimg1.setAttribute('width','280');
            busimg1.setAttribute('height','200');                
        }

        if(fmembers[secondRandom].logo == "None"){
            busimg2.setAttribute('src','https://placehold.co/280x200/png');
            busimg2.setAttribute('srcset','https://placehold.co/280x200/png');
        }
        else{
            busimg2.setAttribute('src',img_url+fmembers[secondRandom].logo);
            busimg2.setAttribute('srcset',img_url+fmembers[secondRandom].logo);
            busimg2.setAttribute('width','280');
            busimg2.setAttribute('height','200');                
        }

        if(fmembers[thirdRandom].logo == "None"){
            busimg3.setAttribute('src','https://placehold.co/280x200/png');
            busimg3.setAttribute('srcset','https://placehold.co/280x200/png');
        }
        else{
            busimg3.setAttribute('src',img_url+fmembers[thirdRandom].logo);
            busimg3.setAttribute('srcset',img_url+fmembers[thirdRandom].logo);
            busimg3.setAttribute('width','280');
            busimg3.setAttribute('height','200');                
        }
        
        busimg1.setAttribute('alt',fmembers[firstRandom].names);
        busimg2.setAttribute('alt',fmembers[secondRandom].names);
        busimg3.setAttribute('alt',fmembers[thirdRandom].names);

    }

    function getRandomIDX(len){
        const randomIdx = parseInt(Math.random() * len);

        if(!usedIdx.includes(randomIdx)){
            usedIdx.push(randomIdx);
            return randomIdx;
        }
        else{
            getRandomIDX(len);
        }

    }

    getLinks();
}