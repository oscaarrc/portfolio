class ValidadorFormulario {
    constructor(nombre, correo, mensaje) {
      this.nombre = nombre;
      this.correo = correo;
      this.mensaje = mensaje;
    }
  
    validar() {

        var msg = document.getElementById('msg');
        // Expresión regular para validar el formato de un correo electrónico
        const expresionRegularCorreo = /^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{5,7}\.(com|es|org)$/;
        // Verificar si el correo coincide con la expresión regular

        if(this.nombre == ""){
          msg.innerHTML = "Por favor, introduzca un nombre"
          return false;
        }

        if(!expresionRegularCorreo.test(this.correo)){
            msg.innerHTML = "Por favor, introduzca un correo electrónico válido"
            return false;
        }

        if (this.mensaje.length < 20) {
            msg.innerHTML = 'El mensaje debe tener al menos 20 caracteres.';
            return false;
        }

        return true;
    }
  }
  
  function enviarFormulario() {
    var nombre = document.getElementById('name').value;
    var correo = document.getElementById('email').value;
    var mensaje = document.getElementById('message').value;
  
    const validador = new ValidadorFormulario(nombre, correo, mensaje);
  
    if (validador.validar()) {
      alert('Se ha enviado correctamente');
      enviarCorreo(nombre, correo, mensaje);
      document.getElementById("formEmail").reset();
    }
    
  }
  
  function enviarCorreo(nombre, correo, mensaje) {
    emailjs.send("service_94b49j3","template_bekpvbj",{
        email: correo,
        message: mensaje,
        from_name: nombre,
        });
  }

