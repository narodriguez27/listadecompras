let btnEnviar = document.getElementById ("btnEnviar");
let bodyEntero = document.querySelector("body");
let textValue = document.getElementById("textValue");
let newArr = [];
btnEnviar.onclick =  (click) => {
    let textContainer = textValue.value;
    newArr.push(textContainer);
    console.log(newArr);
    createDivs();
}

let createDivs = () => {
   let createDiv = document.createElement("div");
   let createUl = document.createElement("ul");
   let createLi = document.createElement("li");
   let input = document.createElement("input");
   input.type = "checkbox";
   let textInformate = document.createElement("p");
   bodyEntero.appendChild(createDiv); 
   createDiv.appendChild(createUl);
   createUl.appendChild(createLi);
   createLi.appendChild(input);
   input.appendChild(textInformate);
}





