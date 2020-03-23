var msj = [];

function Encode(offset, string) {
	
	if (offset === null) {offset = 0}
	for(var i = 0; i < string.length; i++){
		if(string.charCodeAt(i) !== 32){
		var s = string.toLocaleUpperCase();
		var formula = (s.charCodeAt(i) + Number(offset) - 65) % 26 + 65;
		var msj_cifrado = msj.push(String.fromCharCode(formula));
		}else {
			var msj_cifrado = msj.push(" ");
		}	
		
	}
	console.log(s);
	console.log(msj.join(""));
}

function Decode(offset, string){
	if (offset === null) {offset = 0}
	for(var i = 0; i < string.length; i++){
		if(string.charCodeAt(i) !== 32){
		var s = string.toLocaleUpperCase();
		var formula = (s.charCodeAt(i) - Number(offset) + 65) % 26 + 65;
		var msj_cifrado = msj.push(String.fromCharCode(formula));
		}else {
			var msj_cifrado = msj.push(" ");
		}	
		
	}
	console.log(s);
	console.log(msj.join(""));
}