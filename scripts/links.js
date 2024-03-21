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

  /*
<li><a href="lesson01/holygrail.html">Holy Grail</a> | <a href="https://codepen.io/Juan-Carlos-Mena-Osorio/pen/xxBRPPE">CodePen</a></li>
<li><a href="lesson02/media-query.html">Media Query</a> | <a href="lesson02/design-principles.html">Web Design Principles</a></li>
<li><a href="images/combinators_ex_jcmena.png">Combinator Activity</a> | <a href="https://codepen.io/Juan-Carlos-Mena-Osorio/pen/vYPpxgw"> CodePen Activity 1</a> | <a href="https://codepen.io/Juan-Carlos-Mena-Osorio/pen/jOJYBxw"> CodePen Responsive Navigation</a> |
<a href="lesson03/chamber-site-plan.html"> Chamber Site Plan</a></li>
<li><a href="https://codepen.io/Juan-Carlos-Mena-Osorio/pen/VwRXwVr">CSS Pseudo Classes</a></li>
<li><a href="chamber/"> Miravalle Chamber of Commber</a></li>
<li><a href="lesson05/bom.html">Book Application</a></li>
<li><a href="lesson03/images/landscape.webp">WebP</a></li>
<li><a href="lesson07/lazyloading.html">Lazy Loading practice</a> | <a href="lesson07/BOM/bom.html">BOM revisited</a> | <a href="chamber/discover.html"> Chamber - Discover</a></li>
<li><a href="lesson08/tablebuild.html">Table Build</a> | <a href="lesson08/Form-start/index.html">Form 1</a> 
    | <a href="form.html"> Form 2 | <a href="chamber/join.html"> Chamber Form</a></a></li>
<li><a href="lesson09/new-ward-members.json">JSON file</a> | <a href="lesson09/prophets.html"> List of Latter-day Prophets</a></li>
  */