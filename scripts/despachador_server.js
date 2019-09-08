var xhr;
function traerPersonas() {

  xhr = new XMLHttpRequest();
  var url = "http://localhost:3000/traer?collection=personas";
  xhr.open('GET', url, true);
  setSpinner('show');
  xhr.onreadystatechange = manejadorRespuesta;
  
  xhr.send();
}

function guardarPersona(persona) {

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = manejadorRespuesta2;
  var url = "http://localhost:3000/agregar";

  xhr.open('POST', url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  var body = { 'collection': 'personas', 'objeto': persona };

  xhr.send(JSON.stringify(body));

}

function eliminarPersona(id) {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = manejadorRespuesta2;

  var body ={'collection':'personas', 'id':id};
  var url = "http://localhost:3000/eliminar";
  xhr.open('POST',url,true);
  xhr.setRequestHeader("Content-Type", "application/json");


  xhr.send(JSON.stringify(body));
 }




function modificarPersona(persona) {

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = manejadorRespuesta2;
  var body = { 'collection': 'personas', 'objeto': persona };
  var url = "http://localhost:3000/modificar";
  xhr.open('POST', url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(body));
}
