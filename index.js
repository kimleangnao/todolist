let listList = document.querySelector(".list--list");
let submitButton = document.querySelector("#submit");
let input = document.querySelector("#input--list");
let clearButton = document.querySelector(".js--clear--button");

let arrayList = [];

function renderThisListToHTML(thisList){
    listList.textContent = "";
    for(let i = 0; i < thisList.length; i++){
    
        //li --top level to append to listList
        let listTodoWrapper = document.createElement("li");
        listTodoWrapper.setAttribute("class", "list--todo--wrapper");
      
        //div --list--todo--check
        let listTodoCheck = document.createElement("div");
        listTodoCheck.setAttribute("class", "list--todo--check js--check--mark--" + i);

        //i --fas fa-check
        let iCheckMark = document.createElement("i");
        iCheckMark.setAttribute("class", "fas fa-check");

        listTodoCheck.appendChild(iCheckMark);

        //div list--todo--item
        let listTodoItem = document.createElement("div");
        listTodoItem.setAttribute("class", "list--todo--item");
        listTodoItem.textContent = thisList[i].input;

        let listTodoDelete = document.createElement("div");
        listTodoDelete.setAttribute("class", "list--todo--delete");

        let iTrashCan = document.createElement("i");
        iTrashCan.setAttribute("class", "fas fa-trash-alt js--delete--icon" + i);
        iTrashCan.setAttribute("id", "delete--index--" + i);
        listTodoDelete.appendChild(iTrashCan);

        //apendChild to listTodoWrapper
        listTodoWrapper.appendChild(listTodoCheck);
        listTodoWrapper.appendChild(listTodoItem);
        listTodoWrapper.appendChild(listTodoDelete);

        //check for the one that list as done, when re-render in the list
        if(thisList[i].done){
            listTodoItem.style.textDecoration  = "line-through";
            
            listTodoWrapper.style.backgroundColor =  "rgb(236, 236, 236)";
            listTodoCheck.style.backgroundColor = "red";
        };

        //appendChild (listTodoWrapper) to HTML element listList
        listList.appendChild(listTodoWrapper);


        let jsMarkIcon = document.querySelector(".js--check--mark--" + i);
        jsMarkIcon.addEventListener("click", function(){
            thisList[i].done = !thisList[i].done;
            if(thisList[i].done){
                listTodoItem.style.textDecoration  = "line-through";
                listTodoWrapper.style.backgroundColor =  "rgb(236, 236, 236)";
                listTodoWrapper.style.color =  "black";
                listTodoCheck.style.color = "rgb(46, 124, 50)";
                listTodoItem.style.color = "black"

            }else{
                listTodoItem.style.textDecoration  = "none";
                listTodoWrapper.style.backgroundColor =  "unset";
                listTodoCheck.style.color = "white";
                listTodoItem.style.color = "white"
             
            }
          
        });
        let jsDeleteIcon = document.querySelector(".js--delete--icon" + i);
        jsDeleteIcon.addEventListener("click", function(){
            arrayList.splice(i, 1)
            renderThisListToHTML(arrayList);
        });
    }
};
submitButton.addEventListener("click", function(e){
    e.preventDefault();
    if(input.value != ""){
        let aboutToPush = {input: input.value, done: false};
        arrayList.push(aboutToPush);
        renderThisListToHTML(arrayList);
        input.value = "";
    }
   
});
clearButton.addEventListener("click", function(){
    arrayList = [];
    renderThisListToHTML(arrayList);
});