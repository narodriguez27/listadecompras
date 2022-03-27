// variables:
let controlInput = document.getElementById ("inputControl");
let contentText = document.getElementById ("textValue");
let btnSendFood = document.getElementById ("btnSend");
let ControlDivUl = document.getElementById ("ulDivControl");
let foodList = document.getElementById ("ulListFood");
let btnClearFood = document.getElementById ("btnClearList");
let newArr = [];
//funciones:

const createElementsList = () =>{
  //SE CREAN ELElet contador = 1;MENTOS DINAMICOS DE LA LISTA DE ALIMENTOS
  let contador = 1;
  let contectValue = contentText.value;
  //CREACION DE NODOS ELEMENTOS
  let listaFood = document.createElement('li');
  newArr.push(listaFood);
  listaFood.id = `${contectValue}`;
  foodList.appendChild(listaFood);
  let contentLabel = document.createElement('label');
  listaFood.appendChild(contentLabel);
  contentLabel.textContent =  `${contador} X/U ${contectValue}`;
  let spam = document.createElement('i');
  let spam2 = document.createElement('i');
  let spam3 = document.createElement('i');
  

  //SE CREA ELEMENTO DE BOTON SUMA
  let suma = document.createElement('button');
  listaFood.appendChild(suma);
  suma.className = `suma_${contectValue}`;
  suma.appendChild(spam);
  spam.setAttribute("class", "fa-solid fa-plus");
  suma.addEventListener('click', () =>{
    contadorSuma();
   
  })
 //SE CREA ELEMENTO DE BOTON RESTA
 let resta = document.createElement('button');
 listaFood.appendChild(resta);
 resta.className = `resta_${contectValue}`;
 resta.appendChild(spam2);
 spam2.setAttribute("class", "fa-solid fa-minus");
 resta.addEventListener('click', () =>{
  contadorRest();
 });
//3 botones 1 agrega 1 decrementa 1 elimina
//cada boton debe hacer incrementar decrementar y eliminar el items
// SE CREA BOTON ELIMINAR

let btnElimiar = document.createElement('button');
listaFood.appendChild(btnElimiar);
btnElimiar.className = 'btnEliminar';
btnElimiar.appendChild(spam3);
spam3.setAttribute("class","fa-solid fa-trash");
btnElimiar.className = `eliminar_${contectValue}`;
btnElimiar.addEventListener('click', () => {
  let a = newArr.pop();
  a.remove();
})

//FUNCIONALIDADES 

let contadorSuma = () =>{
  contador++;
  contentLabel.textContent = `${contador} X/U ${contectValue}`;
  if (contador == 1){
    resta.disabled = false;
  }
}

let contadorRest = () =>{
  contador--;
  contentLabel.textContent = `${contador} X/U ${contectValue}`;
  if (contador == 0){
    resta.disabled = true;
  }
}
}

let eliminar = () =>{
    for (let list of newArr) {
      list.remove();
    }
}

//eventos:
btnSendFood.addEventListener('click',createElementsList);
btnClearFood.addEventListener('click', eliminar);







