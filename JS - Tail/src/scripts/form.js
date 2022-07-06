const tipo_persona = document.getElementById("tipo_persona");
const tipo_persona2 = document.getElementById("tipo_persona2");
const prof_cont = document.getElementById("profesor_type_container");
const est_cont = document.getElementById("estudiante_type_container");
var isStudent = false;
var registros = [];

const inputs = () => {
  const codigo = document.getElementById("codigo");
  const nombre = document.getElementById("nombre");
  const tipo = document.getElementById("tipo");
  const fecha_ini = document.getElementById("fecha_ini");
  const fecha_fin = document.getElementById("fecha_fin");
  const responsable = document.getElementById("responsable");
  const presupuesto = document.getElementById("presupuesto");
  const tipo_profesor = document.getElementById("tipo_profesor");
  const semestre = document.getElementById("semestre");
  return [
    codigo,
    nombre,
    tipo,
    fecha_ini,
    fecha_fin,
    responsable,
    presupuesto,
    tipo_persona,
    tipo_persona2,
    tipo_profesor,
    semestre,
  ];
};

var objeto = () => {
  obj = {};
  inputs().map((e) => {
    obj = {
      ...obj,
      [e.id]: e.value,
    };
  });
  return obj;
};

tipo_persona.addEventListener("click", (e) => {
  isStudent = true;
  if (isStudent) {
    prof_cont.className = "hidden";
    est_cont.className = "";
  }
});

tipo_persona2.addEventListener("click", (e) => {
  isStudent = false;
  if (!isStudent) {
    prof_cont.className = "";
    est_cont.className = "hidden";
  }
});

Registrar = () =>{
  registros.push(objeto());
  ListarRegistros();
}

Eliminar = (id) => {
  let item = document.getElementById(id);
  item.parentNode.removeChild(item);
  registros.splice(id, 1);
}

ListarRegistros = () => {
  const div = document.getElementById("table_container");
  const element = document.createElement("div");
  let html = ``;
  registros.forEach((obj, i) => {
    html += `
    <tr id=${i} class="odd:bg-white even:bg-slate-50">
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">${obj.nombre}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">${obj.responsable}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">${obj.fecha_ini}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">${obj.fecha_fin}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">0</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
        <input type="button" value="Editar" class="bg-green-600 text-green-200 text-sm p-1 border border-green-800">
        <input type="button" onclick="Eliminar(${i})" value="Eliminar" class="bg-red-600 text-red-200 text-sm p-1 border border-red-800">
        <input type="button" value="Vista Rápida" class="bg-yellow-600 text-yellow-200 text-sm p-1 border border-yellow-800">
      </td>
    </tr>
    `;
  });
  div.innerHTML = html;
};
