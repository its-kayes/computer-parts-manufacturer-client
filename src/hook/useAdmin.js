// import { useEffect, useState } from "react"

// let useAdmin = user => {
//     console.log(user);
//     let [admin, setAdmin] = useState(false);
//     let [isAdminLoading, setIsAdminLoading] = useState(true);
//     useEffect(() => {
//         let email = user?.email;
//         if (email) {
//             fetch(`https://enigmatic-lake-23819.herokuapp.com/user/${user}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data);
//                     setAdmin(data.isAdmin);
//                     setIsAdminLoading(false);
//                 });
//         }

//     }, [user])
//     return [admin, isAdminLoading];
// }

// export default useAdmin;







import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://enigmatic-lake-23819.herokuapp.com/user/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setAdminLoading(false);
                })
        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;