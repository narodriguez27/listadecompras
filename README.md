



















































# listadecompras
App para agregar y desmarcar una lista de compras


// variables:
let controlInput = document.getElementById ("inputControl");
let contentText = document.getElementById ("textValue");
let btnSendFood = document.getElementById ("btnSend");
let ControlDivUl = document.getElementById ("ulDivControl");
let foodList = document.getElementById ("ulListFood");
let btnClearFood = document.getElementById ("btnClearList");
let listFoods = document.getElementById ("listFood");
let arrProduct = [];


let restar = (num)=>{
  for (let i = 0; i < arrProduct.length; i++){
    if(arrProduct[i].id == num){
      if (arrProduct[i].cantidad > 0){
        console.log("se resto uno a :" +arrProduct[i].name);
        arrProduct[i].cantidad --; 
      }if(arrProduct[i].cantidad == 0){
       
      }
  }
}
    console.log(arrProduct);
}

let sumar = (num)=>{
  for (let i = 0; i < arrProduct.length; i++){
    if(arrProduct[i].id == num){
      if (arrProduct[i].cantidad > 0){
        console.log("se sumo uno a :" +arrProduct[i].name);
        arrProduct[i].cantidad ++; 
      }
  }
}
    console.log(arrProduct);
}

//funciones:
const createElementsList = (e) =>{
  const productName = contentText.value;
  arrProduct.push({name:productName, cantidad: 1, id: arrProduct.length +1 })
  console.log(arrProduct);  

  while (foodList.firstChild) {
    foodList.removeChild(foodList.lastChild);
  }
  for (let i = 0; i < arrProduct.length; i++){
    let listElement = document.createElement('li');
    listElement.innerHTML = arrProduct[i].name;
    let buttonSum = document.createElement('button');
    let  suma = arrProduct[i].id;
    buttonSum.addEventListener('click' ,() =>{
      sumar(suma);
    });
    buttonSum.className = "buttonStyle";
    buttonSum.id = arrProduct[i].id;
    buttonSum.textContent = "INCREMENT";
    foodList.appendChild(listElement);
    listElement.appendChild(buttonSum);
    let buttonRest = document.createElement('button');
    buttonRest.className = "estilo"
    let  resta = arrProduct[i].id;
    buttonRest.addEventListener('click' ,() =>{
      restar(resta);
    });
    buttonSum.className = "buttonStyle";
    buttonRest.textContent = "DECREMENT";
    listElement.appendChild(buttonRest);

  }


//crea lista
  
  //listElement.className = "listStyle";
/*
//crea boton sumar
  let buttonSum = document.createElement('button');
  
    buttonSum.onclick = function (e){
      //const buttonId = e.target.id;
      //this.remove();
      const ads = document.getElementById(`labelProduct_${productName}`);
      console.log(ads);
    } 
  /*
/*
//crea boton restar
let buttonRest = document.createElement('button');
buttonRest.id = "btnRest";
buttonSum.className = "buttonStyle";
buttonRest.textContent = "DECREMENT";
buttonRest.onclick = function (e){
  //const buttonId = e.target.id;
  //this.remove();
  const ads = document.getElementById(`labelProduct_${productName}`);
  console.log(ads);

  let contador = 0;

} 

//crea label 
let labelElement = document.createElement('label');
labelElement.className = "productStyle";
labelElement.id =`labelProduct_${productName}`;
labelElement.textContent = productName;

//agrega los elementos al li
foodList.appendChild(listElement);
listElement.appendChild(labelElement);
labelElement.appendChild(buttonSum);
labelElement.appendChild(buttonRest);
}


const removeElementsList = (e) =>{
  let lis = foodList.childNodes.length;
      for (let i = 1; i <= lis; i++ ){
      foodList.removeChild(foodList.firstChild);
      }
*/


}

//eventos:
btnSendFood.addEventListener('click',createElementsList);
//btnClearFood.addEventListener('click', removeElementsList);






