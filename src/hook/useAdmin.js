import { useEffect, useState } from "react"

let useAdmin = user => {
    console.log(user);
    let [admin, setAdmin] = useState(true);
    let [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(()=> {
        let email = user?.email;
        if(email) {
            fetch(`http://localhost:5000/user/${user}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAdmin(data.isAdmin);
                setIsAdminLoading(false);
            });
        }

    },[user])
    return [admin, isAdminLoading];
}

export default useAdmin;