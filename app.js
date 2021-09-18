//Inicializar la cuenta en cero
let count = 0;

//Seleccionar el valor y los bontones
let value = document.querySelector("#value"); //Seleccionar el nodo qué contien el valor a trabes de su ID
let btns = document.querySelectorAll(".btn"); //Seleccionar los nodos qué contienen los botones con clase btn y agregarlos en un Array "btns"

// btns.forEach(function(item){
//   console.log(item);
// })

btns.forEach(function(btn){
  btn.addEventListener("click", function(event){

    console.log("Objetivo actual:", event.currentTarget); //Objetivo actual === Nodo del DOM === Etiqueta HTML
    console.log("Lista de clases del objetivo actual:", event.currentTarget.classList); // Array compueto por las clases que tiene el objetivo actual

    const classListBtn = event.currentTarget.classList; //Lista de clases qué contienen los botones

    //Condiciones para mutar el contador
    if(classListBtn.contains("decrease")){
      count--;
    } else if(classListBtn.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //Condiciones para pintar los números de color 
    if(count < 0){
      value.style.color = "red";
    } 
    if(count > 0){
      value.style.color = "green";
    }
    if(count === 0){
      value.style.color = "black";
    }
    value.textContent = count;
  });
});