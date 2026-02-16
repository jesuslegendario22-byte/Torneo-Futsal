// Cargar equipos desde localStorage
let equipos = JSON.parse(localStorage.getItem("tablaEquipos"));

if (!equipos) {
  alert("Primero abre la tabla pública (index.html)");
}

// Crear tabla editable
function cargarAdmin() {

  const body = document.getElementById("admin-body");
  body.innerHTML = "";

  equipos.forEach((e, i) => {

    body.innerHTML += `
      <tr>
        <td>${e.nombre}</td>

        <td><input type="number" id="pj-${i}" value="${e.pj}"></td>
        <td><input type="number" id="pg-${i}" value="${e.pg}"></td>
        <td><input type="number" id="pe-${i}" value="${e.pe}"></td>
        <td><input type="number" id="pp-${i}" value="${e.pp}"></td>
        <td><input type="number" id="gf-${i}" value="${e.gf}"></td>
        <td><input type="number" id="gc-${i}" value="${e.gc}"></td>

        <td>
          <button onclick="guardar(${i})">💾</button>
        </td>
      </tr>
    `;
  });
}

function guardar(i) {

  equipos[i].pj = Number(document.getElementById(`pj-${i}`).value);
  equipos[i].pg = Number(document.getElementById(`pg-${i}`).value);
  equipos[i].pe = Number(document.getElementById(`pe-${i}`).value);
  equipos[i].pp = Number(document.getElementById(`pp-${i}`).value);
  equipos[i].gf = Number(document.getElementById(`gf-${i}`).value);
  equipos[i].gc = Number(document.getElementById(`gc-${i}`).value);

  localStorage.setItem("tablaEquipos", JSON.stringify(equipos));

  alert("Guardado ✔");
}

// Reiniciar tabla
function resetTabla() {
  if (!confirm("¿Seguro quieres reiniciar la tabla?")) return;

  equipos.forEach(e => {
    e.pj = e.pg = e.pe = e.pp = e.gf = e.gc = 0;
  });

  localStorage.setItem("tablaEquipos", JSON.stringify(equipos));
  cargarAdmin();
}

cargarAdmin();
