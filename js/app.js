// variables:
let controlInput = document.getElementById ("inputControl");
let productInsert = document.getElementById ("insert-product");
let btnAdddFood = document.getElementById ("btn-add-food");
let ControlDivUl = document.getElementById ("ulDivControl");
let foodList = document.getElementById ("list-food");
let btnDeleteElements = document.getElementById ("btn-delete-list");
let errorText = document.getElementById ("error-text");
let listAliments = [];
//funciones:

const createElementsList = () =>{
let count = 1;
let productInserts = productInsert.value
if (productInserts == parseInt(productInserts)) {
  errorText.innerHTML = `<p class = errorAlIngresar> No se puede ingresar numeros <p/>`
}else if(productInserts == ""){
  errorText.innerHTML =`<p class = errorAlIngresar> Ingrese producto<p/>`
}else if(productInserts !== "" ){
  errorText.innerHTML = "";
  //SE CREAN ELEMENTOS DINAMICOS DE LA LISTA DE ALIMENTOS
  //CREACION DE NODOS ELEMENTOS
  let foodItems = document.createElement('li');
  foodItems.id = `${productInserts}`;
  foodList.appendChild(foodItems);
  let contentLabel = document.createElement('label');
  foodItems.appendChild(contentLabel);
  contentLabel.innerHTML =  `${count} Cant ${productInserts}`;
  let spam = document.createElement('i');
  let spam2 = document.createElement('i');
  let spam3 = document.createElement('i');
  let sumResDeleteButton = document.createElement('div');
  sumResDeleteButton.className = "container-button-stock"
  //SE CREA ELEMENTO DE BOTON SUMA
  let btnSum = document.createElement('button');
  foodItems.appendChild(sumResDeleteButton);
  sumResDeleteButton.appendChild(btnSum);
  btnSum.appendChild(spam);
  btnSum.className = "btnSum"
  spam.setAttribute("class", "fa-solid fa-plus");
  btnSum.addEventListener('click', () =>{
    countSum();
   
  })
 //SE CREA ELEMENTO DE BOTON RESTA
 let btnRest = document.createElement('button');
 foodItems.appendChild(sumResDeleteButton);
 sumResDeleteButton.appendChild(btnRest);
 btnRest.appendChild(spam2);
 btnRest.className = "btnRest"
 spam2.setAttribute("class", "fa-solid fa-minus");
 btnRest.addEventListener('click', () =>{
  countRest();
  
 });
// SE CREA BOTON ELIMINAR
let btnDeletElements = document.createElement('button');
foodItems.appendChild(sumResDeleteButton);
sumResDeleteButton.appendChild(btnDeletElements);;
btnDeletElements.appendChild(spam3);
btnDeletElements.className = "btn-delete";
spam3.setAttribute("class","fa-solid fa-trash-can");
btnDeletElements.addEventListener('click', () => { 
  sumResDeleteButton.parentElement.remove()
  
})
listAliments.push(foodItems);

//FUNCIONALIDADES 
let countSum = () =>{
  count++;
  contentLabel.innerHTML = `${count} Cant ${productInserts}`;
  if (count == 1){
    btnRest.disabled = false;
    btnRest.style.backgroundColor = "rgba(255, 0, 0, 0.698)"
  }

}
let countRest = () =>{
  count--;
  contentLabel.innerHTML = `${count} Cant ${productInserts}`;
  if (count == 0){
    btnRest.disabled = true;
    btnRest.style.backgroundColor = "Black"
     }
  }
}
}

let deleteElements = () =>{
    for (let listAliment of listAliments) {
      listAliment.remove();
  }
  listAliments = [];
}

//eventos:
btnAdddFood.addEventListener('click',createElementsList);
btnDeleteElements.addEventListener('click', deleteElements);





