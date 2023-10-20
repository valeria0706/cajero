const $btnSignIn = document.querySelector('.sign-in-btn');
const $btnSignUp = document.querySelector('.sign-up-btn');
const $signUp = document.querySelector('.sign-up');  
const $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active'); 
        $signUp.classList.toggle('active'); 
    }
});


const formulario = document.getElementById('formulario')
const formulario2 = document.getElementById('formulario2')



const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s']{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseña: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    contraseña2: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    usuario: /^[a-zA-Z0-9]+$/
    
}
const campos ={
    usuario: false,
    nombre:false,
    correo:false,
    contraseña:false,
    contraseña2:false
    
}
                                                                       

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre,e.target,'nombre');
            break;
        

        case "correo":
            validarCampo(expresiones.correo,e.target,'correo');
           
            break;
        case "contraseña":
          
        validarCampo(expresiones.contraseña,e.target,'contraseña');
        validarContraseña();
            
            break;
        case "repcontraseña":
           
            validarContraseña();
            
            break;
        
    }
}

const validarCampo = (expresion,input,campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bx-x-circle')
        document.querySelector(`#grupo__${campo} i`).classList.add('bx-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
       
    } else {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('bx-x-circle')
        document.querySelector(`#grupo__${campo} i`).classList.remove('bx-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo] = false;
    }
}

const validarContraseña = () => {
    const inputcontraseña1 = document.getElementById('contraseña');
    const inputcontraseña2 = document.getElementById('repcontraseña');

    if(inputcontraseña1.value !== inputcontraseña2.value){
        document.getElementById(`grupo__repcontraseña`).classList.remove('formulario__grupo-correcto');
        document.getElementById(`grupo__repcontraseña`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__repcontraseña i`).classList.add('bx-x-circle')
        document.querySelector(`#grupo__repcontraseña i`).classList.remove('bx-check-circle')
        document.querySelector(`#grupo__repcontraseña .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[contraseña] = false;
    }else{
        document.getElementById(`grupo__repcontraseña`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__repcontraseña`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__repcontraseña i`).classList.remove('bx-x-circle')
        document.querySelector(`#grupo__repcontraseña i`).classList.add('bx-check-circle')
        document.querySelector(`#grupo__repcontraseña .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[contraseña] = true;
    }
}   

const inputs = document.querySelectorAll('#formulario input');
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if(campos.nombre && campos.contraseña && campos.correo ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
            icono.classList.remove('formulario__grupo-correcto');
        });
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        }, 5000);
    }
});




const validarFormulario2 = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo2(expresiones.usuario, e.target, 'usuario');
            break;

        case "contraseña2":
            validarCampo2(expresiones.contraseña2, e.target, 'contraseña2');
            break;
    }
}

const validarCampo2 = (expresion, input, campo2) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo2__${campo2}`).classList.remove('formulario2__grupo2-incorrecto');
        document.getElementById(`grupo2__${campo2}`).classList.add('formulario2__grupo2-correcto');
        document.querySelector(`#grupo2__${campo2} i`).classList.remove('bx-x-circle');
        document.querySelector(`#grupo2__${campo2} i`).classList.add('bx-check-circle');
        document.querySelector(`#grupo2__${campo2} .formulario2__input-error`).classList.remove('formulario2__input-error-activo');
        campos[campo2] = true;
    } else {
        document.getElementById(`grupo2__${campo2}`).classList.remove('formulario2__grupo2-correcto');
        document.getElementById(`grupo2__${campo2}`).classList.add('formulario2__grupo2-incorrecto');
        document.querySelector(`#grupo2__${campo2} i`).classList.add('bx-x-circle');
        document.querySelector(`#grupo2__${campo2} i`).classList.remove('bx-check-circle');
        document.querySelector(`#grupo2__${campo2} .formulario2__input-error`).classList.add('formulario2__input-error-activo');
        campos[campo2] = false;
    }
}

const inputs2 = document.querySelectorAll('#formulario2 input');
inputs2.forEach((input) => {
    input.addEventListener('keyup', validarFormulario2);
    input.addEventListener('blur', validarFormulario2);
});


formulario2.addEventListener('submit', (e) => {
    e.preventDefault();

   
    if (campos.usuario && campos.contraseña2) {
        formulario2.reset();
        document.getElementById('formulario2__mensaje-exito').classList.add('formulario2__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario2__mensaje-exito').classList.remove('formulario2__mensaje-exito-activo');
        }, 5000);
    
        document.querySelectorAll('.formulario2__grupo2-correcto').forEach((icono2) => {
            icono2.classList.remove('formulario2__grupo2-correcto');
        });
    
        const container__form = document.querySelectorAll('.container__form');
        container__form.forEach(containerForm => {
            containerForm.style.display = 'none';
        });
    
       
        const formulario2Btn = document.querySelector('.formulario2__btn');
const btns = document.querySelector('.btns');

formulario2Btn.addEventListener('click', () => {
    btns.classList.toggle('btns-activo');
});


    } else {
        document.getElementById('formulario2__mensaje').classList.add('formulario2__mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario2__mensaje').classList.remove('formulario2__mensaje-activo');
        }, 5000);
    }
});    


 