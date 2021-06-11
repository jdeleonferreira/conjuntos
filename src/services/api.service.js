import api from "./api.config";

//Role CRUD
const postRole = (role) => {
    return api.post('rols', role)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const getRoles = () => {
    return api.get('rols/');
}

const getRole = (roleId) => {
    return api.get('rols/'.roleId);
}

const putRole = (userId, user) => {
    //code here
}

const deleteRol = (roleId) => {
    //code here
}

//User CRUD
const postUser = (user) => {
    return api.post('users', user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

const getUsers = () => {
    return api.get('users');
}

const getUser = (userId) => {
    return api.get('users/'.userId);
}

const getLogin = (username, password) => {
    return api.get('users/login',);
}

const putUser = (userId, user) => {
    //code here
}

const deleteUser = (userId) => {
    //code here
}

//TORRE CRUD

const getTorres = () => {
    return api.get('buildings');
}


//Apartamento CRUD
const getApartamentos = () => {
    return api.get('apartments');
}

export { getUser, getUsers, getTorres, postUser, getRoles, postRole, getLogin, getApartamentos }