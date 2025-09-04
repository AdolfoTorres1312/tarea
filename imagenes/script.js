// Cambiar el texto del primer H1 a "Adiós"
document.querySelector("h1").textContent = "Adiós";

// Cambiar el color del segundo H1 a naranja
const segundoH1 = document.querySelectorAll("h1")[1];
segundoH1.style.color = "orange";

// Al hacer clic, cambiar a marrón
const cambiable = document.getElementById("cambiable");
cambiable.addEventListener("click", () => {
  cambiable.style.color = "brown";
});
