const boton = document.getElementById("createAppliance");
const appliance = document.getElementById("appliance");

boton.addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "appliance_card";
  card.innerHTML = `
    <h3>Air Conditioner</h3>
            <img src="airConditionar.jpeg" alt="air">
            <p>Long night cool for the family</p>
             <button>Buy</button>
    `;

  const eliminar = document.createElement("button");
  eliminar.textContent = "Clean Card";
  eliminar.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(eliminar); //Se encarga de eliminarla
  appliance.appendChild(card); // Se encarga de crear la nueva tarjeta
});

