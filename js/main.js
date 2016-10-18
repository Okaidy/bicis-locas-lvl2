function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name");
	var apellido = document.getElementById("lastname");
	var correo = document.getElementById("input-email");
	var contraseña = document.getElementById("input-password");

	var alertaNombre = document.createElement("span");
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
	if(apellido.value.length<=0) {
		alertaApellido.innerHTML="Debe de ingresar su apellido";
		apellido.parentNode.appendChild(alertaApellido);
	}else if (!(/^[A-Z\s]*$/.test(apellido.value[0]))) {
		alertaNombre.innerHTML="Primera letra de Nombre debe ser mayuscula";
		nombre.parentNode.appendChild(alertaNombre);
	}else if (!(/^[a-zA-Z\s]*$/.test(apellido.value))){
		alertaNombre.innerHTML="El apellido no es valido";
		nombre.parentNode.appendChild(alertaNombre);
	}

	if(correo.value.length<=0) {
		var alertaCorreo = document.createElement("span");
		alertaCorreo.innerHTML="Debe de ingresar su correo";
		correo.parentNode.appendChild(alertaCorreo);
	}
	
	var alertaPass = document.createElement("span");
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

}