let goleadores = JSON.parse(localStorage.getItem("goleadores")) || [
  { jugador: "Jugador 1", equipo: "Equipo A", goles: 0 },
  { jugador: "Jugador 2", equipo: "Equipo B", goles: 0 },
  { jugador: "Jugador 3", equipo: "Equipo C", goles: 0 },
  { jugador: "Jugador 4", equipo: "Equipo D", goles: 0 }
];

function guardarDatos() {
  localStorage.setItem("goleadores", JSON.stringify(goleadores));
}

function renderTabla() {
  const tbody = document.getElementById("tabla-goleadores");
  tbody.innerHTML = "";

  goleadores.sort((a, b) => b.goles - a.goles);

  goleadores.forEach((g, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${g.jugador}</td>
        <td>${g.equipo}</td>
        <td class="goles">${g.goles}</td>
      </tr>
    `;
  });
}

renderTabla();