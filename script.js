document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnSaludo");

    boton.addEventListener("click", () => {
        alert("Hola desde la lógica (Persona B)!");
    });
});