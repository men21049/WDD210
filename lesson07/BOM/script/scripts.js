const InputVar = document.querySelector("#favchap");
const ButtonVar = document.querySelector("button");
const ListVar = document.querySelector("#list");

let chaptersArray = getChaptersArray()||[];


ButtonVar.addEventListener('click',function(){

        if(InputVar.value != ''){
            displayList(InputVar.value);
            chaptersArray.push(InputVar.value);
            setChapterList();
            console.log(InputVar.value);
            InputVar.value = '';
            InputVar.focus();
        }
    });

function displayList(item){
    const Li = document.createElement('li');
    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = '❌';
    DeleteButton.id = "Delete";
    Li.textContent = item;
    Li.append(DeleteButton);
    ListVar.appendChild(Li);
    InputVar.focus();
    DeleteButton.addEventListener('click', function(){
        ListVar.removeChild(Li);
        deleteChapter(Li.textContent);
        InputVar.focus();
        ListVar.removeChild(document.querySelector("li"));
    })
}

function setChapterList(){
    localStorage.setItem('myFavBomList', JSON.stringify(chaptersArray));
}

function getChaptersArray(){
    return JSON.parse(localStorage.getItem('myFavBomList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}