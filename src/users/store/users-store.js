import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
     users: []
}

const loadNextPage = async()=>{
    await loadUsersByPage(state.currentPage);
}

const loadPreviousPage = async()=>{
    throw new Error('No implemetado');
}

const onUserChange = ()=>{
    throw new Error('No implemetado');
}

const reloadPage = async()=>{
    throw new Error('No implemetado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,

    getUser: ()=> [...state.users],
    getCurrentPage: ()=> state.currentPage,
}