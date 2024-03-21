const url = "https://men21049.github.io/wdd230/data/members.json";
const card = document.querySelector('.card');

window.onload = () =>{

    async function getLinks() {
        const response = await fetch(url);
        const data = await response.json();
        displayLinks(data.members);
      }
    
    function displayLinks(members){
        members.array.forEach(member => {
            console.log(member.names);    
        });
        
    }
}
