import { useEffect, useState } from "react"

let useAdmin = user => {
    let [admin, setAdmin] = useState(false);
    useEffect(()=> {
        let email = user?.email;
        if(email) {
            fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.isAdmin);
            });
        }

    },[user])
    return [admin];
}

export default useAdmin;