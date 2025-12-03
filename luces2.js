// script.js – Animaciones y navegación para la segunda pantalla
// Tema: Monster High – Carro de luces CBTis 42, grupo 5B

// Navegación básica (puedes conectar con tus otras pantallas)
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnAnterior.addEventListener("click", () => {
    // Cambia por la ruta real de tu primera pantalla
    window.location.href = "pantalla1.html";
});

btnSiguiente.addEventListener("click", () => {
    // Cambia por la ruta real de tu tercera pantalla
    window.location.href = "pantalla3.html";
});

// --- EFECTOS DE LUCES ---
// Genera destellos tipo Monster High alrededor del contenedor
const screen = document.querySelector(".main-screen");

function crearDestello() {
    const spark = document.createElement("div");
    spark.classList.add("neon-spark");

    // Posición aleatoria dentro del contenedor
    const x = Math.random() * screen.clientWidth;
    const y = Math.random() * screen.clientHeight;

    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Tiempo de vida del destello
    setTimeout(() => {
        spark.remove();
    }, 2500);

    screen.appendChild(spark);
}

// Crear destellos de forma repetida
setInterval(crearDestello, 800);

// Efecto de parpadeo suave en el título
const title = document.querySelector(".screen-title");
setInterval(() => {
    title.style.filter = "brightness(1.4)";
    setTimeout(() => (title.style.filter = "brightness(1)"), 300);
}, 2000);

// Animación de entrada para todo el contenido
window.addEventListener("load", () => {
    document.querySelector(".main-screen").style.opacity = 0;
    document.querySelector(".main-screen").style.transform = "translateY(20px)";

    setTimeout(() => {
        document.querySelector(".main-screen").style.transition = "0.6s ease";
        document.querySelector(".main-screen").style.opacity = 1;
        document.querySelector(".main-screen").style.transform = "translateY(0)";
    }, 200);
});