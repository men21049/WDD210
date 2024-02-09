const InputVar = document.querySelector("#favchap");
const ButtonVar = document.querySelector("button");
const ListVar = document.querySelector("#list");
const DeleteButton = document.createElement('button');


ButtonVar.addEventListener('click',function(){
    if(InputVar.value != ''){
        const Li = document.createElement('li');
        DeleteButton.textContent = '❌';
        Li.textContent = InputVar.value;
        Li.append(DeleteButton);
        ListVar.append(Li);
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