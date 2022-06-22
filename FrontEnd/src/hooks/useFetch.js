import { useState, useEffect } from 'react';

export const useFetch = (url, fetchInfo = {}) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url, fetchInfo) => {
            try {
                let res = await fetch(url, fetchInfo)
                if (!res.ok) {
                    throw {
                        err: true,
                        status: res.status,
                        statusText: res.statusText || "Ocurrio un error",
                    };
                }
                let data = await res.json();
                setIsPending(false);
                setData(data);
                setError({ err: false });
            } catch (err) {
                setIsPending(true);
                setError(err)
            }
        }
        getData(url, fetchInfo);
    }, [url])
return { data, isPending, error };
}

/* --------------------------- fetchInfo Examples --------------------------- */
// {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });