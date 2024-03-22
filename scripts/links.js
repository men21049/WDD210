const baseURL = "https://men21049.github.io/wdd230/";
const linksURL = "https://men21049.github.io/wdd230/data/links.json";
const linkList = document.querySelector('.link_list');

window.onload = () =>{
    async function getLinks() {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
      }

      function displayLinks(links){
        links.forEach(week => {
            let url = "";
            const wknumber = week.lesson;
            const linksList = week.links;
            const li = document.createElement('li');
            console.log(linksList.length);
    
            li.innerHTML = " ";

            linksList.forEach(ll=>{
                const preurl = ll.url;
                const title = ll.title;
                if(!preurl.includes("codepen")){
                    url = baseURL + preurl;
                }
                else{
                    url = preurl
                }
 
                li.innerHTML = li.innerHTML + "<a href=\"" + url +"\">" + title + " | "; 
                /*li.appendChild(anchor);*/
                console.log(li.innerHTML);
            });
    
            linkList.appendChild(li);
        });
      }
    
      getLinks();   
}