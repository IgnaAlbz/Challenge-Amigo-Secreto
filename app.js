// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los amigos
let amigos = [];

function agregarAmigo() {
    // Captura el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Valida que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agrega al array
    amigos.push(nombre);

    // Muestra la lista en el HTML
    mostrarLista();

    // Limpia el campo de entrada
    input.value = "";
}

  function mostrarLista() {
    // Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Recorrer el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        
      // Crear un <li> por cada amigo
        const li = document.createElement("li");
        li.textContent = amigos[i];

        // Agregarlo a la lista
        lista.appendChild(li);
    }
  } 

   function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    } else {

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}`;
  }
}