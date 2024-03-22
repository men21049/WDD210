const url = "https://men21049.github.io/wdd230/data/members.json";
const img_url = "https://men21049.github.io/wdd230/";
const cardMember = document.querySelector('.card');

window.onload = () =>{

    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displayLinks(data.members);
      }
    
    function displayLinks(members){
        members.forEach(member => {
            const div = document.createElement('div');
            const name = document.createElement('h4');
            const img = document.createElement('img');
            const address = document.createElement('p');
            const phone = document.createElement('p');
            const url = document.createElement('p');
            const membership = document.createElement('p');
            const other = document.createElement('p');

            div.setAttribute('class','cardInfo');
            name.textContent = member.names;

            if(member.log = "None"){
                img.setAttribute('src','https://placehold.co/40x40/png');
            }
            else{
                img.setAttribute('src',img_url+member.logo);
            }
            div.appendChild(name);
            div.appendChild(img);

        });
        
    }

    getLinks();
}
/*
<div class="cardInfo">
                  <h4><b>Events</b></h4>
                  <p>List of Events|</p>
                </div>

names":"Ciber papeleria misterpc",
"addresses":"Artes Plásticas 273, Miravalle, 44990 Guadalajara, Jal.",
"phone_numbers":"3327946713",
"URL": "None",
"logo":"images/directory/misterpc.png",
"membership_level": "Silver Membership",
"Other_Info"
*/
