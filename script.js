// ==============================
// Guía Práctica N°2 - Arreglos y Pila
// ==============================

// ----- BLOQUE 1: ARREGLOS -----
let libros = [
  { titulo: "Cien años de soledad", autor: "García Márquez", anio: 1967 },
  { titulo: "Don Quijote", autor: "Cervantes", anio: 1605 },
  { titulo: "El Principito", autor: "Saint-Exupéry", anio: 1943 },
  { titulo: "Sapiens", autor: "Harari", anio: 2011 },
  { titulo: "La Sombra del Viento", autor: "Ruiz Zafón", anio: 2001 }
];

let salida = document.getElementById("output");

document.getElementById("mostrarLibros").onclick = () => {
  let texto = "";
  for (let libro of libros) {
    texto += `${libro.titulo} - ${libro.autor} (${libro.anio})\n`;
  }
  salida.textContent = texto;
};

document.getElementById("buscarLibro").onclick = () => {
  let tituloBuscado = prompt("Título del libro:");
  let encontrado = null;

  for (let libro of libros) {
    if (libro.titulo.toLowerCase() === tituloBuscado.toLowerCase()) {
      encontrado = libro;
      break;
    }
  }

  salida.textContent = encontrado
    ? `Encontrado: ${encontrado.titulo} (${encontrado.anio})`
    : "No se encontró el libro.";
};

document.getElementById("contar2000").onclick = () => {
  let total = 0;
  for (let libro of libros) {
    if (libro.anio > 2000) total++;
  }
  salida.textContent = "Libros después del 2000: " + total;
};

document.getElementById("concatenarTitulos").onclick = () => {
  let titulos = "";
  for (let libro of libros) titulos += libro.titulo + " ";
  salida.textContent = titulos;
};

document.getElementById("actualizarAnio").onclick = () => {
  let nombre = prompt("Título del libro a actualizar:");
  let nuevo = prompt("Nuevo año:");
  for (let libro of libros) {
    if (libro.titulo.toLowerCase() === nombre.toLowerCase()) {
      libro.anio = Number(nuevo);
      salida.textContent = "Año actualizado: " + libro.titulo + " - " + libro.anio;
      return;
    }
  }
  salida.textContent = "Libro no encontrado.";
};

// ----- BLOQUE 2: PILA -----
let pila = [];
let salidaPila = document.getElementById("stackOutput");
let lista = document.getElementById("stackList");

function mostrarPila() {
  lista.innerHTML = "";
  for (let libro of pila.slice().reverse()) {
    let item = document.createElement("li");
    item.textContent = `${libro.titulo} - ${libro.autor} (${libro.anio})`;
    lista.appendChild(item);
  }
  salidaPila.textContent = "Elementos en pila: " + pila.length;
}

document.getElementById("pushBtn").onclick = () => {
  let titulo = document.getElementById("pushTitulo").value;
  let autor = document.getElementById("pushAutor").value;
  let anio = Number(document.getElementById("pushAnio").value);
  pila.push({ titulo, autor, anio });
  mostrarPila();
};

document.getElementById("popBtn").onclick = () => {
  if (pila.length === 0) alert("La pila está vacía");
  else {
    let eliminado = pila.pop();
    alert("Eliminado: " + eliminado.titulo);
    mostrarPila();
  }
};

document.getElementById("peekBtn").onclick = () => {
  if (pila.length === 0) alert("La pila está vacía");
  else alert("Cima: " + pila[pila.length - 1].titulo);
};

document.getElementById("isEmptyBtn").onclick = () => {
  alert(pila.length === 0 ? "La pila está vacía" : "La pila tiene elementos");
};

document.getElementById("vaciarBtn").onclick = () => {
  pila = [];
  mostrarPila();
  alert("La pila se vació");
};
