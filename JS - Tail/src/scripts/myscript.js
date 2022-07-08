const formulario = document.getElementById("formulario");

nombre.addEventListener("keydown", (e) => {
  if (esalpha(e.target.value)) {
    errorNombre.classList.remove("hidden");
  } else {
    errorNombre.classList.add("hidden");

  }
});

codigo.addEventListener("keydown", (e) => {
  if (esalphanum(e.target.value)) {
    errorId.classList.remove("hidden");
  } else {
    errorId.classList.add("hidden");

  }
});

fecha_ini.addEventListener("change",(e)=>{
  if(e.target.value && IntervaloFecha()==true){
    fecha_fin.disabled = false;
    errorFechaIni.classList.add("hidden");
  }else{
    fecha_fin.disabled =true;
    errorFechaIni.classList.remove("hidden"); 
  }
})

  fecha_fin.addEventListener("change",(e)=>{
    if(fechaIniciodelFin()==false && IntervaloFecha()==true){
      errorFechaFin.classList.remove("hidden");
    }else{
      errorFechaFin.classList.add("hidden"); 
    }
  });

presupuesto.addEventListener("change", (e) => {
  if(presupuestoLimit(e.target.value)==false){
    errorPresupuesto.classList.remove("hidden");
  }else{
    errorPresupuesto.classList.add("hidden");
  }
});

responsable.addEventListener("keydown", (e) => {
  if (esalpha(e.target.value)) {
    errorResponsable.classList.remove("hidden");
  } else {
    errorResponsable.classList.add("hidden");
  }
});




// addEventListener("submit", () => {});



function esalphanum(value) {
  if (value.match(/^[0-9a-zA-Z]+$/)) {
    return false;
  } else {
    return true;
  }
}
function esalpha(value) {
  if (value.match(/^[a-zA-Z]+$/)) {
    return false;
  } else {
    return true;
  }
}

function IntervaloFecha(){
  let inicio;
  inicio = document.getElementById("fecha_ini").value;
  if(new Date(inicio)>new Date(2022, 0, 0)&& new Date(inicio)< new Date(2022, 12, 31)){
    console.log(true);
    return true; 
  }else{
    return false;
  }
}

function fechaIniciodelFin(){
  let inicio;
  let final
  inicio = document.getElementById("fecha_ini").value;
  final = document.getElementById("fecha_fin").value;
  if(IntervaloFecha()==true && new Date(final)>new Date(inicio)){
    return true;
  }else{
    return false;
  }
}
function presupuestoLimit(){
  let presupuesto;
  presupuesto = document.getElementById("presupuesto").value;

  if(parseInt(presupuesto)>10000000 && parseInt(presupuesto)<50000000){
    return true;
  }else{
    return false;
  }
}

