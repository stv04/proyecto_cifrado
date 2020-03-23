var n;
var form = document.createElement("form");
form.setAttribute("name", "mensaje_listo");

var textarea = document.createElement("textarea");
textarea.setAttribute("name", "mensaje");

var button1 = document.createElement("input");
var button2 = document.createElement("input");
var div = document.createElement("div");


button1.setAttribute("type", "button");

button2.setAttribute("type", "button");
button2.setAttribute("onclick", "recargar()");
div.setAttribute("id", "mostar_mensaje");
var h3 = document.createElement("h3");
var br = document.createElement("br");


function aparecer(elemento){
	document.body.appendChild(elemento);
}

var dezpl = function(){dezpl = document.rellenar.numero.value};

function cifrar(){
aparecer(form);
dezpl();
n = document.getElementById('n1');
n.innerHTML = "perfecto, anota a continuación el mensaje que deseas cifrar";
n.style.fontSize = "2em";
n.style.color = "white";
document.mensaje_listo.appendChild(textarea);
document.mensaje_listo.appendChild(br);
textarea.style.width = '50%';
button1.setAttribute("value", "Cifrar");
button2.setAttribute("value", "volver");
button1.setAttribute("onclick", "a_cifrar()");
document.mensaje_listo.appendChild(button1);
document.mensaje_listo.appendChild(button2);

}

function decifrar(){
aparecer(form);
dezpl();
n = document.getElementById('n1');
n.innerHTML = "perfecto, anota a continuación el mensaje que deseas decifrar";
n.style.fontSize = "2em";
n.style.color = "white";
document.mensaje_listo.appendChild(textarea);
document.mensaje_listo.appendChild(br);
textarea.style.width = '50%';
button1.setAttribute("value", "Decifrar");
button1.setAttribute("onclick", "a_decifrar()");
button1.setAttribute("href", "#mostar_mensaje");
button2.setAttribute("value", "volver");
document.mensaje_listo.appendChild(button1);
document.mensaje_listo.appendChild(button2);
}



function a_cifrar(){
	h3.innerHTML = "Aquí está tu mensaje";
	aparecer(h3);
	var mensaje_a_cifrar = document.mensaje_listo.mensaje.value;
	div.style.border = "ridge";
	aparecer(div);
	Encode(dezpl, mensaje_a_cifrar);
	div.innerHTML = msj.join("");
}

function a_decifrar(){
	h3.innerHTML = "Aquí está tu mensaje";
	aparecer(h3);
	var mensaje_a_cifrar = document.mensaje_listo.mensaje.value;
	div.style.border = "ridge";
	aparecer(div);
	Decode(dezpl, mensaje_a_cifrar);
	div.innerHTML = msj.join("");
	}
 
 function recargar(){
 	location.reload();
 }

