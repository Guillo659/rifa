let numeros = [];

for (var i = 0; i < numeros.length; i++) {
  let num = document.getElementById(numeros[i]);
  if (num) {
    num.classList.add("ocuped");
  }
}

function ocupar() {
	for (var i = 0; i < numeros.length; i++) {
  let num = document.getElementById(numeros[i]);
  if (num) {
    num.classList.add("ocuped");
  }
}
}

function agregarValor() {
  // Obtener el valor ingresado por el usuario
  const valorInput = document.getElementById("valor-input").value;

  // Verificar si el valor no está vacío
  if (valorInput.trim() !== "") {
    // Agregar el valor al array
    numeros.push(valorInput);

    // Limpiar el campo de entrada
    document.getElementById("valor-input").value = "";

    // Mostrar el array actualizado
    console.log(numeros);
  }
  local();
  ocupar();
}

function local() {
	// Obtener los datos existentes del LocalStorage (si existen)
let datosExistente = localStorage.getItem('datos');

// Si existen datos previos, convertirlos en un array
if (datosExistente) {
  datosExistente = JSON.parse(datosExistente);
} else {
  datosExistente = [];
}

// Actualizar los datos existentes con el nuevo array
datosExistente = [...datosExistente, ...numeros];

// Guardar los datos actualizados en el LocalStorage
localStorage.setItem('datos', JSON.stringify(datosExistente));

}
