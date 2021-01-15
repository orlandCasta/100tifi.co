const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const apiURL = id ? `${API}${id}` : API; //if ternario
    try {
        const response = await fetch(apiURL); // realizamos el llamado con fech a la url
        const data = await response.json();// convertimos la respuesta del servidor a un objeto json que pueda iterarse
        return data;
    } catch(error){
        console.log('Fetch Error', error);
    }
}

export default getData;