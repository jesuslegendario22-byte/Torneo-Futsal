// ===============================
// CARGAR DATOS GUARDADOS
// ===============================
let equipos = JSON.parse(localStorage.getItem("tablaEquipos")) || [
  { logo:"equipos/a.png", nombre:"JP Futsal Vinotinto", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/b.png", nombre:"Equipo B", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/c.png", nombre:"Equipo C", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/d.png", nombre:"Equipo D", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/e.png", nombre:"Equipo E", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/f.png", nombre:"Equipo F", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/g.png", nombre:"Equipo G", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 },
  { logo:"equipos/h.png", nombre:"Equipo H", pj:0, pg:0, pe:0, pp:0, gf:0, gc:0 }
];

function guardarDatos() {
  localStorage.setItem("tablaEquipos", JSON.stringify(equipos));
}

function calcularTabla() {

  // Calcular DG y PTS
  equipos.forEach(e => {
    e.dg = e.gf - e.gc;
    e.pts = (e.pg * 3) + (e.pe);
  });

  // Ordenar por PTS → DG → GF
  equipos.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.dg !== a.dg) return b.dg - a.dg;
    return b.gf - a.gf;
  });

  const tabla = document.getElementById("tabla-body");
  tabla.innerHTML = "";

  equipos.forEach((e, index) => {

    let clase = "";
    if (index < 4) clase = "clasificado";
    else clase = "eliminado";

    tabla.innerHTML += `
      <tr class="${clase}">
        <td>${index + 1}</td>

        <td>
          <div class="equipo">
            <img src="${e.logo}" class="logo-equipo">
            ${e.nombre}
          </div>
        </td>

        <td>${e.pj}</td>
        <td>${e.pg}</td>
        <td>${e.pe}</td>
        <td>${e.pp}</td>
        <td>${e.gf}</td>
        <td>${e.gc}</td>
        <td>${e.dg}</td>
        <td><b>${e.pts}</b></td>
      </tr>
    `;
  });

  // Guardar automáticamente después de recalcular
  guardarDatos();
}

// Actualizar en vivo si otra página (admin) cambia datos
window.addEventListener("storage", () => {
  equipos = JSON.parse(localStorage.getItem("tablaEquipos")) || equipos;
  calcularTabla();
});

calcularTabla();
