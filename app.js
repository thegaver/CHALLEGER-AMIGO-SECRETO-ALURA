let participantes = [];

function agregarAmigo() {
  let nombresAmigos = document.getElementById("amigo").value;

  if (nombresAmigos.trim() === "") {
    alert("ingresa un nombre para añadir");
  } else {
    participantes.push(nombresAmigos);
    document.querySelector("#amigo").value = "";
    agregarListaDeAmigos();
  }
}

function agregarListaDeAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < participantes.length; index++) {
    const element = participantes[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

function sortearAmigo() {
  let cantidadAmigos = participantes.length;
  if (cantidadAmigos === 0) {
    alert("Por favor ingresar un nombre para iniciar el juego");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `Tu amigo secreto es: ${participantes[indiceAmigo]}`;
  }
}

