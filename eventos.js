function saludar() {
    alert('¡Hola! Bienvenido a mi página.');
}

function soyElDiv(){
    alert("Hola soy el div")
}

document.getElementById("divPrincipal").addEventListener("click", soyElDiv)

document.getElementById("saludarBtn").addEventListener("click", function(event) {
    event.stopPropagation();
  });