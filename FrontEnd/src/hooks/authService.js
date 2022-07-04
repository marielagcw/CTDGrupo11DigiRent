import jwt_decode from "jwt-decode";

export const getRol = ()=>{
    const storage = window.localStorage;
    let token = storage.getItem('jwt');
    if(token === null){
        return;
    }
    token = jwt_decode(token);
    return token.rol;
}