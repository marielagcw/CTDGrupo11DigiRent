const urlBase = process.env.REACT_APP_URLBASE;

const getToken = ()=>{
    const url = urlBase + "/usuarios/authenticate";
    const body: {
        body: JSON.stringify({
            username: form.email,
            password: form.password
        }}
    }

    let login = async () => {
        try {
            let data = await fetch(url, fetchInfo);
            if (data.ok) {
                setLoading(false);
            } else {
                throw {
                    err: true
                }
            }
            let token = await data.json();
            storage.setItem('jwt', JSON.stringify(token));
            userInfo();

        } catch (err) {
            setResponse("Error en las credenciales ingresadas")
        }
    }
    let userInfo = async () => {
        let token = await storage.getItem('jwt');
        token = jwt_decode(token);
        let userFromBack = {
            name: token.Nombre,
            lastName: token.Apellido,
            id: token.Id
        }
        storage.setItem('user', JSON.stringify(userFromBack))
    }
    login();


    return storage.getItem('user') != null;
} else {
    // storage.setItem('user', JSON.stringify(form));
    return { logged: true };
}
}