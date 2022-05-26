import { useEffect, useState } from "react"

let useToken = user => {
    let [token, setToken] = useState('');
    useEffect(() => {
        console.log(' Inside user Token', user);
        let email = user?.user?.email;
        let currentUser = { email: email };
        console.log(email);
        if (email) {
            fetch(`https://enigmatic-lake-23819.herokuapp.com/allusers/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }

    }, [user]);
    return [token];
}

export default useToken;