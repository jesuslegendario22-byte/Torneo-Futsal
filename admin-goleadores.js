let goleadores = JSON.parse(localStorage.getItem("goleadores")) || [
  { nombre:"Jugador 1", equipo:"Equipo A", goles:0 },
  { nombre:"Jugador 2", equipo:"Equipo B", goles:0 }
];

function guardarDatos(){
  localStorage.setItem("goleadores", JSON.stringify(goleadores));
}

function renderTabla(){

  const tabla = document.getElementById("admin-goleadores");
  tabla.innerHTML = "";

  goleadores.forEach((g, i) => {

    tabla.innerHTML += `
      <tr>
        <td>
          <input type="text" value="${g.nombre}" onchange="editarNombre(${i}, this.value)">
        </td>

        <td>
          <input type="text" value="${g.equipo}" onchange="editarEquipo(${i}, this.value)">
        </td>

        <td>
          <input type="number" value="${g.goles}" onchange="editarGoles(${i}, this.value)">
        </td>

        <td>
          <button onclick="guardarDatos()">💾</button>
        </td>

        <td>
          <button onclick="eliminarGoleador(${i})" style="background:#ff5252;">🗑️</button>
        </td>
      </tr>
    `;
  });
}

function editarNombre(i, valor){
  goleadores[i].nombre = valor;
}

function editarEquipo(i, valor){
  goleadores[i].equipo = valor;
}

function editarGoles(i, valor){
  goleadores[i].goles = parseInt(valor) || 0;
}

function agregarGoleador(){

  goleadores.push({
    nombre:"Nuevo Jugador",
    equipo:"Equipo",
    goles:0
  });

  guardarDatos();
  renderTabla();
}

function eliminarGoleador(i){

  if(confirm("¿Eliminar goleador?")){
    goleadores.splice(i,1);
    guardarDatos();
    renderTabla();
  }
}

renderTabla();