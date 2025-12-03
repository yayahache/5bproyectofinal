document.getElementById("enterBtn").addEventListener("click",()=>{
  alert("Ir a: Información del carro — Reemplaza con navegación real");
});

document.getElementById("aboutBtn").addEventListener("click",()=>{
  alert("Acerca del proyecto — Reemplazar por modal o sección");
});

const car=document.getElementById("carGraphic");
car.addEventListener("mouseenter",()=>car.style.boxShadow="0 0 20px var(--accent-pink)");
car.addEventListener("mouseleave",()=>car.style.boxShadow="none");
