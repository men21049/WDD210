const welcome = document.querySelector("#welcomeMsg");
let dateVisit = Date.now();
const msToDays = 84600000;

let visitArray = getVisit() || [];


let lastVisit = visitArray.pop();
visitArray.push(dateVisit);
setVisit();
let daysSinceLastVisit = (dateVisit - lastVisit)/msToDays;
console.log(daysSinceLastVisit);
if(daysSinceLastVisit == 0){
    welcome.textContent = "Welcome! Let us know if you have any questions."; 
}
else if(daysSinceLastVisit => 0.001 & daysSinceLastVisit <= 1){
    welcome.textContent = "Back so soon! Awesome!"; 
}
else{
    welcome.textContent = "You last visited n days ago.";
}


function setVisit(){
    localStorage.setItem('visit', JSON.stringify(visitArray));
}

function getVisit(){
    return JSON.parse(localStorage.getItem('visit'));
}

