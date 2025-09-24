//Creamos array para ingresar los nombres
let participantes = [];

//la función "agregarAmigo" guarda el nombre que escribo
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (nombre === "") {
    alert("Ingresa un nombre para añadir");
  } else {
    participantes.push(nombre);
    document.getElementById("amigo").value = "";
    agregarListaDeAmigos();
  }
}

//la función "agregarListaDeAmigos" muestra todos los nombres en la pantalla
function agregarListaDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < participantes.length; i++) {
    let li = document.createElement("li");
    li.innerText = participantes[i];
    lista.appendChild(li);
  }
}

//la función "sortearAmigo" agarra uno de esos nombres al azar para decir quién es el amigo secreto

function sortearAmigo() {
  if (participantes.length === 0) {
    alert("Por favor ingresar un nombre para iniciar el juego");
  } else {
    let numero = Math.floor(Math.random() * participantes.length);
    let resultado = document.getElementById("resultado");
    resultado.innerText = "Tu amigo secreto es: " + participantes[numero];
  }
}


