window.onload = function () {
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');

    subtitulo.innerHTML += 'INVITADO';


    subtitulo.style.textTransform = 'uppercase';

    fondo.classList.add('fondo');
    enlace.style.color = '#E51B3E';

    for (let i = 0; i < destacado.length; i++) {
        if (i % 2 == 0) {
            destacado[i].classList.add('destacadoPar');
        } else {
            destacado[i].classList.add('destacadoImpar');
        }
    }


    container.style.display = 'block';

    const inputName = document.getElementById('name');
    const title = document.getElementById('title');
    const form = document.getElementById('form');
    const day = document.getElementById('day');
    const ulErrors = document.getElementById('errors'); 

    form.addEventListener('submit', (e) => {
        // Se resetea el contenedor donde voy a mostrar los errores
        ulErrors.innerHTML = "";
        // Se crea array con las lista de errores, 
        //se inicializa como un array vacio al cual se le va a agregar los errores segun las validaciones
        const errors = [];
        // Se valida el campo name, si es vacio se hace push al array de errores con el mensage a mostrar para ese campo
        if(inputName.value == '') {
            errors.push('El campo nombre es requerido!');
        }
        // Se valida en campo day en caso de que el valor sea vacio se agrega el mensaje al array de errores para ese campo
        if(day.value == '') {
            errors.push('El campo Dia es requerido!');
        }
        // Se recorren los errores si no hay errores no va a crear nada, 
        // no va a ingresar al foreach pues no se puede recorrecorrer un array vacio
        errors.forEach(err => {
            // Por cada error se crea un elemento "li"
            const li = document.createElement('li');
            // Se el asigna el mensage al "li" creado
            li.innerHTML = err;
            // Se agrega ese "li" como hijo al "ul" de errores
            ulErrors.appendChild(li);
        });
        if (errors.length > 0) {
            e.preventDefault();
        }
    });


    inputName.addEventListener('focus', () => {
        inputName.style.border = 'red solid 4px';
    });

    inputName.addEventListener('blur', () => {
        inputName.style.border = 'yellow solid 4px';
    });

    inputName.addEventListener('keydown', (e) => {
        title.innerHTML = e.target.value;
    });

    day.addEventListener('change', (e) => {
        title.innerHTML += ` - ${e.target.value}`
    });
}

