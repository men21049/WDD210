const url = "https://men21049.github.io/wdd230/data/members.json";
const img_url = "https://men21049.github.io/wdd230/chamber/";
const display = document.querySelector("#card-wrapper");


window.onload = () =>{

    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displayLinks(data.members);
      }
    
    function displayLinks(members){
        members.forEach(member => {

            const div = document.createElement('div');
            const name = document.createElement('h3');
            const img = document.createElement('img');
            const address = document.createElement('p');
            const phone = document.createElement('h5');
            const url = document.createElement('h6');
            
            div.setAttribute("class","cardM");

            name.textContent = member.names;

            if(member.logo == "None"){
                img.setAttribute('src','https://placehold.co/40x40/png');

            }
            else{
                img.setAttribute('src',img_url+member.logo);
                img.setAttribute('width','40');
                img.setAttribute('height','40');                
            }

            img.setAttribute('alt',name);
            address.textContent = "Address: " + member.address;
            console.log(member.address);
            phone.textContent = "Phone Number: " + member.phone_number;
            url.textContent = "Website: " + member.URL;

            div.appendChild(name);
            div.appendChild(img);
            div.appendChild(address);
            div.appendChild(phone);
            div.appendChild(url);
            display.appendChild(div);
        });
        
    }

    getLinks();
}

const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', clickButton);
listBtn.addEventListener('click', clickButton);

function clickButton(event) {
	event.preventDefault();
	let newStyle = event.target.id;
	newStyle = newStyle.replace('Btn', '');
	const element = document.getElementById("card-wrapper");
  element.classList.remove("grid");
	element.classList.remove("list");
	element.classList.add(newStyle);
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
