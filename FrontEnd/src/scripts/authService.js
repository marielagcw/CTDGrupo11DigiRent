import jwt_decode from "jwt-decode";

const getRol = () => {
  const storage = window.localStorage;
  let token = storage.getItem("jwt");
  if (token === null) {
    return;
  }
  token = jwt_decode(token);
  return token.rol;
};

const tokenIsValid = () => {
  const storage = window.localStorage;
  let token;
  try {
    token = JSON.parse(storage.getItem("jwt")).jwt;
  } catch {
    token = null
  }
  if (token === null) {
    return false
  }
  token = jwt_decode(token);
  let exp = new Date(token.exp * 1000);
  // True si el token es válido, false si no es válido
  return (new Date() - 60000) < (exp);
};

export { getRol, tokenIsValid };
