let numeros = [2, 5, 8, 9, 10, 12, 13, 14, 17, 18, 22,23,24,25,26,27,28,29,30,31,35,37,38,39,40,43,44,45,47,48,49,50,52,56,60,61,64,68,69,71,73,75,81,82,86,88,90,94,99];

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