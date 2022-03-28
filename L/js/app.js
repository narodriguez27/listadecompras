// variables:
let controlInput = document.getElementById ("inputControl");
let contentText = document.getElementById ("textValue");
let btnSendFood = document.getElementById ("btnSend");
let ControlDivUl = document.getElementById ("ulDivControl");
let foodList = document.getElementById ("ulListFood");
let btnClearFood = document.getElementById ("btnClearList");
const newArr = [];
//funciones:

const createElementsList = () =>{
  let contador = 1;
  //SE CREAN ELEMENTOS DINAMICOS DE LA LISTA DE ALIMENTOS
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
  let divControl = document.createElement('div');
  divControl.className = "btnmov"
  

  //SE CREA ELEMENTO DE BOTON SUMA
  let suma = document.createElement('button');
  listaFood.appendChild(divControl);
  divControl.appendChild(suma);
  suma.className = `suma_${contectValue}`;
  suma.className = "btnStyle_sumar"
  suma.appendChild(spam);
  spam.setAttribute("class", "fa-solid fa-plus");
  suma.addEventListener('click', () =>{
    contadorSuma();
   
  })
 //SE CREA ELEMENTO DE BOTON RESTA
 let resta = document.createElement('button');
 listaFood.appendChild(divControl);
 divControl.appendChild(resta);
 resta.className = `resta_${contectValue}`;
 resta.className = "btnStyle_resta"
 resta.appendChild(spam2);
 spam2.setAttribute("class", "fa-solid fa-minus");
 resta.addEventListener('click', () =>{
  contadorRest();
 });
 
// SE CREA BOTON ELIMINAR
let btnElimiar = document.createElement('button');
listaFood.appendChild(divControl);
divControl.appendChild(btnElimiar);;
btnElimiar.appendChild(spam3);
spam3.setAttribute("class","fa-solid fa-trash-can");
btnElimiar.className = `eliminar_${contectValue}`;
btnElimiar.className = "btnStyle_eliminar"
btnElimiar.addEventListener('click', (e) => {
   
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





