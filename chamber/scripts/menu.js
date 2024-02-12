const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const changeColor = document.querySelector('.addColor');
const mainColor = document.getElementById('main');
const card = document.querySelectorAll(".card");
const cardGreen = document.querySelectorAll(".cardGreen");



hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


changeColor.onclick = function(e){
	navigation.classList.toggle('navigationDark');

	for(let elem of card){
		elem.classList.toggle('cardDark');
	}
	
	if(mainColor.style['background-color']== "lightgray"){
		document.getElementById('main').style.backgroundColor = 'white';
	}
	else{
		document.getElementById('main').style.backgroundColor = 'lightgray';
	}

	
};