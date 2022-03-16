let btnEnviar = document.getElementById ("btnEnviar");
let btnClear = document.getElementById("bntClear");
let bodyEntero = document.querySelector("body");
let ulList = document.getElementById("ulList");
let textValue = document.getElementById("textValue");
let propertyLi = document.getElementById ("propertyLi");
let propertyCheck = document.getElementById ("propertyCheck");
let propertyLabel = document.getElementById ("propertyLabel");


btnEnviar.onclick =  () => {
   
        if (!textValue.value == " "){
            newElements();
          
    }else{ 
        alert("Ingresar un producto");
    }   
}
btnClear.onclick = () => {
    if (propertyLi <= 0){
        alert("Lista de compras vacia");
    }
    remove();
}

let newElements = () => {
    let createLi = document.createElement("li");
    let createCheck = document.createElement("input");
    let createLabel = document.createElement("label");
    createLi.id = "propertyLi";
    createLi.classList ="LiStyle"
    createCheck.type = "checkbox";
    createCheck.id = "propertyCheck";
    createCheck.classList =" checkStyle";
    createLabel.id = "propertyLabel";
    createLabel.classList = "labelStyle";
    createLabel.textContent = textValue.value;
    createLi.appendChild(createCheck);
    createLi.appendChild(createLabel);
    ulList.appendChild(createLi);
}

let remove = () =>{
        let lis = ulList.childNodes.length;
        console.log(lis);
        for (let i = 0; i <= lis; i++ ){
            ulList.removeChild(ulList.firstChild);
        }
}
textValue.addEventListener('focus', () => {
    if (!textValue.value =='') {
        textValue.value=''
    };
});
btnEnviar.addEventListener('click', () => {
    if (!textValue.value =='') {
        textValue.value=''
    };
});


