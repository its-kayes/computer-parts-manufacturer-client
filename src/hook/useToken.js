import { useEffect, useState } from "react"

let useToken = user => {
    let [token, setToken] = useState('');
    useEffect(() => {
        console.log(' Inside user Token', user);    
        let email = user?.user?.email;
        let currentUser = { email: email };
        console.log(email);
        if (email) {
            fetch(`http://localhost:5000/allusers/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }

    }, [user]);
    return [token];
}

export default useToken;