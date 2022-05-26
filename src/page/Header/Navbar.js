
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';


const Navbar = () => {

    const [user] = useAuthState(auth);
    let signout = () => {
        let yes = window.confirm(" Are You Sure You Want To Log Out ?");
        if (yes) {
            localStorage.removeItem('accessToken');
            signOut(auth);
        }
    }

    let goProfile = event => {
        toast.warn(" The About fields are empty until you update it. And if you do not see the correct information after the update, please take a hard reload ")
    }

    return (
        <div className=''>
            <div class="navbar bg-black text-white">
                <div class="navbar-start h-24">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/home'> Home </CustomLink></li>
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/allparts'> Available Parts </CustomLink></li>
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/blogs'> Blogs </CustomLink></li>

                            <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/portfolio'> My Portfolio </CustomLink></li>
                            {/* <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/login'> Login </CustomLink></li> */}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"> Computer Parts Manufacturer </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class=" menu menu-horizontal p-0">
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/home'> Home </CustomLink></li>
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/allparts'> Available Parts </CustomLink></li>
                        <li><CustomLink onClick={goProfile} className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/dashboard'> Dashboard </CustomLink></li>
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/blogs'> Blogs </CustomLink></li>
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-rose-100 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/portfolio'> My Portfolio </CustomLink></li>
                        
                    </ul>
                </div>
                {
                    user ?
                        <div class="navbar-end">
                            <Link to='/login' onClick={signout} class="btn">Sign Out <i class="px-2 fa-solid fa-caret-right"></i> <span >  {user?.displayName} </span></Link>
                        </div>
                        :
                        <div class="navbar-end">
                            <CustomLink to='/login' class="btn">Login</CustomLink>
                        </div>

                }
            </div>
        </div>
    );
};

export default Navbar;