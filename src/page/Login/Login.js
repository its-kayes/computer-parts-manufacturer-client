import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Social from './Social';
import useToken from '../../hook/useToken';


let errorElement;
const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let [email, setEmail] = useState();
    
    
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    let [token] = useToken(user);
    
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    let handelEmail = e => {
        let data = e.target.value;
        setEmail(data);
    }

    if (loading || sending) {
        return <Loading> </Loading>
    }

    let loginSubmit = async event => {
        event.preventDefault();
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        let { data } = await axios.post('https://lit-gorge-09323.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


    if (error || resetError) {
        errorElement = <p className='text-center bg-red-700 rounded-full mt-5 text-white p-3'>  Error Login </p>
    }

    return (
        <div >


            <div className='flex justify-center'>

                <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 ">
                    <form onSubmit={loginSubmit} className="space-y-6">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in Parts Manufacturer</h5>
                        <div>
                            <label htmlFor="email" name="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input onChange={handelEmail} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" name="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me! </label>
                            </div>
                            <a onClick={async () => {
                                await sendPasswordResetEmail(email);
                                alert('Sent email');
                            }} className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500 ml-3"> Lost Password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to Parts Manufacturer </button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered?
                            <Link to="/register"> <span className='text-blue-700 hover:underline dark:text-blue-500'>Create account</span> </Link>
                        </div>
                    </form>
                    <div className=''>
                        {errorElement}
                    </div>
                    <div class="divider">OR</div>

                    <Social> </Social>
                </div>
            </div>


        </div>
    );
};

export default Login;


{/* <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">efhqidjbxjkajkvcjbckhvjhvjhvhjvjhbbbbbbbbbbbbbbbbbbb</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body h-full">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" class="input input-bordered" />
                    <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    </div>
</div> */}