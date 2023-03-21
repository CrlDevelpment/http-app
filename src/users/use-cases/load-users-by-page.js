export const loadUsersByPage =async (page = 1)=>{

    const url = `${import.meta.VITE_BASE_URL}/users?_page=${page}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    // console.log(data);
}