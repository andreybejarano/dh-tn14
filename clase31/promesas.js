function getHello(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({ message: `Hola ${name}` });
        }, 3000);
        if (!name) {
            return reject({ message: 'Hubo un error, no se recibio el nombre' });
        }
    });
}

// let isReady = false;

async function holaAndrey() {
    try {
        const dataAndrey = await getHello('Andrey');
        const dataTobias = await getHello();
        const dataPablo = await getHello('Pablo');
        isReady = !!data;
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// holaAndrey();
const promesa1 = getHello('Andrey');
const promesa2 = getHello();
const promesa3 = getHello('Pablo');

Promise.all([promesa1, promesa2, promesa3])
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

// console.log(promesa);

