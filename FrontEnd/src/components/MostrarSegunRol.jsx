import { getRol } from "../scripts/authService"

export const MostrarSegunRol = ({rol, children})=>{
    const autenticado = getRol() === rol
    return autenticado?children:null
}