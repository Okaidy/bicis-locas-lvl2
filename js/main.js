function validateForm(){

	console.log("Validar");
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contraseña = document.getElementById("input-password");
	var opciones = document.getElementsByTagName('select')[0];
	

	var eliminados = document.getElementsByClassName('error');
	console.log(eliminados);

	while(eliminados.length > 0) {
		var el = eliminados[0];
		el.parentNode.removeChild(el);
	}

	var alertaNombre = document.createElement("span");
	alertaNombre.setAttribute("class","error");
	if(nombre.value.length<=0) {
		alertaNombre.innerHTML="Debe de ingresar su nombre";
		nombre.parentNode.appendChild(alertaNombre);
	} else if (!(/^[A-Z\s]*$/.test(nombre.value[0]))) {
		alertaNombre.innerHTML="Primera letra de Nombre debe ser mayuscula";
		nombre.parentNode.appendChild(alertaNombre);
	}else if (!(/^[a-zA-Z\s]*$/.test(nombre.value))){
		alertaNombre.innerHTML="El nombre no es valido";
		nombre.parentNode.appendChild(alertaNombre);
	}

	var alertaApellido = document.createElement("span");
	alertaApellido.setAttribute("class","error");
	if(apellido.value.length<=0) {
		alertaApellido.innerHTML="Debe de ingresar su apellido";
		apellido.parentNode.appendChild(alertaApellido);
	}else if (!(/^[A-Z\s]*$/.test(apellido.value[0]))) {
		alertaApellido.innerHTML="Primera letra de Nombre debe ser mayuscula";
		apellido.parentNode.appendChild(alertaApellido);
	}else if (!(/^[a-zA-Z\s]*$/.test(apellido.value))){
		alertaApellido.innerHTML="El apellido no es valido";
		apellido.parentNode.appendChild(alertaApellido);
	}
	
	var alertaCorreo = document.createElement("span");
	alertaCorreo.setAttribute("class","error");
	if(correo.value.length<=0) {
		alertaCorreo.innerHTML="Debe de ingresar su correo";
		correo.parentNode.appendChild(alertaCorreo);
	} else if (!(/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/).test(correo.value)) {
		alertaCorreo.innerHTML="Correo no valido";
		correo.parentNode.appendChild(alertaCorreo);
	}
	
	var alertaPass = document.createElement("span");
	alertaPass.setAttribute("class","error");
	if(contraseña.value.length<=0) {
		alertaPass.innerHTML="Debe de ingresar su contraseña";
		contraseña.parentNode.appendChild(alertaPass);
	}else if (contraseña.value.length < 5) {
		alertaPass.innerHTML="La contraseña debe tener al menos 6 caracteres";
		contraseña.parentNode.appendChild(alertaPass);
	} else if (contraseña.value =='password' || contraseña.value =="123456" || contraseña.value =="098754") {
		alertaPass.innerHTML="La contraseña no es valida";
		contraseña.parentNode.appendChild(alertaPass);
	}

	var alertaOpc = document.createElement("span");
	alertaOpc.setAttribute("class","error");
	if( opciones.selectedIndex == 0 ) {
  		alertaOpc.innerHTML="Debes seleccionar al menos un tipo de bici";
		opciones.parentNode.appendChild(alertaOpc);
	}	

}
