import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
// import Social from '../Social/Social';




let errorElement;

const Register = () => {
    let [displayName, setDisplayName] = useState('');

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    let registerSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        let name = event.target.name.value;
        const password = event.target.password.value;
        // setDisplayName();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        await sendEmailVerification();
        console.log(name);
    }

    if (loading || sending || updating) {
        return <Loading> </Loading>
    }

    if (error || verifyError || updateError) {
        errorElement = <p className='text-center bg-red-700 rounded-full mt-5 text-white p-3'>  {error?.message} {verifyError?.message} </p>
    }

    // console.log(name);
    console.log(user);

    return (
        <div>

            <div className='flex justify-center'>

                <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                    <form onSubmit={registerSubmit} className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Creat Account Part Manufacturer </h5>
                        <div>
                            <label htmlFor="name" name="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="user name" required="" />
                        </div>
                        <div>
                            <label htmlFor="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me! </label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Creat an account Parts Manufacturer</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <Link to="/login"> <span className='text-blue-700 hover:underline dark:text-blue-500'>Please Login</span> </Link>
                        </div>
                    </form>
                    <div className=''>
                        {errorElement}
                    </div>
                    <div class="divider">OR</div>
                    {/* <Social> </Social> */}
                </div>
            </div>
        </div>
    );
};

export default Register;