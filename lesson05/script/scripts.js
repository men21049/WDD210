const InputVar = document.querySelector("#favchap");
const ButtonVar = document.querySelector("button");
const ListVar = document.querySelector("#list");


ButtonVar.addEventListener('click',function(){
        const Li = document.createElement('li');
        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = '❌';
        DeleteButton.id = "Delete";
        Li.textContent = InputVar.value;
        Li.append(DeleteButton);
        ListVar.appendChild(Li);
        InputVar.value = '';
        InputVar.focus();
        DeleteButton.onclick = function(e){
            ListVar.removeChild(document.querySelector("li"));
        }
    })

