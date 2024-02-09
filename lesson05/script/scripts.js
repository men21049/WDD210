const InputVar = document.querySelector("#favchap");
const ButtonVar = document.querySelector("button");
const ListVar = document.querySelector("#list");


ButtonVar.addEventListener('click',function(){
    if(InputVar.value != ''){
        const Li = document.createElement('li');
        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = '❌';
        Li.textContent = InputVar.value;
        Li.append(DeleteButton);
        ListVar.appendChild(Li);
    }
    else{
        InputVar.focus();
    }
})

DeleteButton.addEventListener('click',function(){
    ListVar.removeChild(document.querySelector("li"));
    InputVar.value = '';
    InputVar.focus();
});