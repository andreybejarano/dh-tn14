// Se crea lista de usuarios
const users = [
    {
        "id": 1,
        "first_name": "Halimeda",
        "last_name": "Spurge",
        "email": "hspurge0@multiply.com",
        "gender": "Female",
        "age": 48,
        "password": "Fpyq7u"
    }, {
        "id": 2,
        "first_name": "Ealasaid",
        "last_name": "Le land",
        "email": "eleland1@prlog.org",
        "gender": "Non-binary",
        "age": 70,
        "password": "zoFnXE7Kz"
    }, {
        "id": 3,
        "first_name": "Ilaire",
        "last_name": "Bes",
        "email": "ibes2@e-recht24.de",
        "gender": "Male",
        "age": 33,
        "password": "Q0rZXA8"
    }, {
        "id": 4,
        "first_name": "Pauli",
        "last_name": "Rubinowicz",
        "email": "prubinowicz3@smugmug.com",
        "gender": "Female",
        "age": 46,
        "password": "SzmRjOK"
    }, {
        "id": 5,
        "first_name": "Packston",
        "last_name": "Forten",
        "email": "pforten4@businessweek.com",
        "gender": "Male",
        "age": 2,
        "password": "heOypOvGLK"
    }, {
        "id": 6,
        "first_name": "Meggie",
        "last_name": "Amps",
        "email": "mamps5@instagram.com",
        "gender": "Non-binary",
        "age": 55,
        "password": "bAAub3f8C"
    }, {
        "id": 7,
        "first_name": "Kathryn",
        "last_name": "Eaton",
        "email": "keaton6@bandcamp.com",
        "gender": "Female",
        "age": 50,
        "password": "SEv4yr36V"
    }, {
        "id": 8,
        "first_name": "Bar",
        "last_name": "Conkay",
        "email": "bconkay7@cbc.ca",
        "gender": "Male",
        "age": 6,
        "password": "GVnz3Et"
    }, {
        "id": 9,
        "first_name": "Shanna",
        "last_name": "Eynaud",
        "email": "seynaud8@rediff.com",
        "gender": "Female",
        "age": 43,
        "password": "o6l6SQ"
    }, {
        "id": 122,
        "first_name": "Ariana",
        "last_name": "Leicester",
        "email": "aleicester9@marriott.com",
        "gender": "Non-binary",
        "age": 6,
        "password": "Xh6LKyawnd"
    }
];

// El metodo filter retorna un array de los elementos que cumplan con la condicion
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Se filtra usuarios mayores de 18 años
const mayoresDeEdad = users.filter((user) => user.age >= 18);
// Se Filtra usuarios cuyo genero es Female 
const mujeres = users.filter((user) => user.gender === 'Female');
// Se Filtra usuarios cuyo genero es Male
const hombres = users.filter((user) => user.gender === 'Male');
// Se Filtra usuarios cuyo genero es Non-binary
const noBinarios = users.filter((user) => user.gender === 'Non-binary');
// Se Filtra usuarios cuyo genero es Female o Male
const hombresMujeres = users.filter((user) => user.gender === 'Female' || user.gender === 'Male');
// Se Filtra usuarios cuyo genero es Female y la edad sea mayor o igual a 50
const mujeres50 = users.filter(user => user.gender === 'Female' && user.age >= 50);
// En el caso que no encuentre ningun elemento que cumpla con la condicion devuelve un array vacio
const noCumple = users.filter(user => user.gender === 'F');

// El metodo find busca dentro de un array y devulve el primer elemento que cumpla con la condicion, si no se cumple la condicion devulve un undefined
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Se busca dentro del array un usuario cuyo mail sea aleicester9@marriott.com y el password sea Xh6LKyawnd
const user = users.find(user => user.email === 'aleicester9@marriott.com' && user.password === 'Xh6LKyawnd');

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// En este caso estamos armando un array nuevo apartir del array usuarios con campos diferentes
const usersResumidos = users.map(user => {
    return {
        id: user.id,
        full_name: `${user.first_name} ${user.last_name}`,
        older: user.age >= 18,
        age: user.age
    }
});

// Este es un for que hace exactamente lo mismo que el filter, asi era que se hacia el proceso de filtrado anteriormente antes de que existiera el metodo filter
let mayoresDeEdadConFor = [];
for (let index = 0; index < users.length; index++) {
    if (users[index].age >= 18) {
        mayoresDeEdadConFor.push(users[index]);
    }
}

// El metodo forEach recorre un array y no devuelve nada, se usa cuando queremos recorrer un array y hacer alguna accion como en este caso hacer console.log de un mensaje
users.forEach((user, index) => {
    console.log(`${user.id}. Hola ${user.first_name} indice dentro del array: ${index}`);
});


const user2 = {
    "id": 7,
    "first_name": "Kathryn",
    "last_name": "Eaton",
    "email": "keaton6@bandcamp.com",
    "gender": "Female",
    "age": 50,
    "password": "SEv4yr36V",
    "roles": [
        "admin",
        "manager",
        "role2"
    ]
};


// user2.roles.forEach(role => {
//     console.log(`Este usuario es: ${role}`);
// });

// const rolesMessage = `Este usaurio es: ${user2.roles.join(' y ')}`;

// console.log(rolesMessage);

// Esta es la forma correcta de clonar un objeto, los tres puntos se llaman spread operator o spread sintax
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const user3 = {
    ...user2
};


// se asigna a la propiedad id del obeto user2 un null
user2.id = null;

// esta es una forma de acceder a una propiedad de un objeto, se usa mucho en caso que el nombre de la propiedad sea dinamica como se muestra en la funcion imprimirAtributoUsuario3 
console.log(user3['first_name']);

function imprimirAtributoUsuario3(propiedad) {
    console.log(user3[propiedad]);
}

imprimirAtributoUsuario3('last_name');
