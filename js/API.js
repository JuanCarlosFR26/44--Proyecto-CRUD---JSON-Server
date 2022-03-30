const url = 'http://localhost:4000/clientes';

// Cuando se crea nuevo cliente. Enviar peticiones post al servidor con el nuevo cliente
export const nuevoCliente = async cliente => {

    try {
        await fetch(url, {
            method: 'POST',  // Para nuevos registros
            body: JSON.stringify( cliente ),   // Lo convertimos en string y lo mandamos a la url con metodo post
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch(error) {
        console.log(error)
    }
}


// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch( error ) {
        console.log(error)
    }
}


// Elimina un cliente

export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    }catch(error) {
        console.log(error);
    }
}


// Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch(error) {
        console.log(error);
    }
}

// Actualiza un registro
export const editarCliente = async cliente => {
    console.log(cliente)
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch(error) {
        console.log(error)
    }
}