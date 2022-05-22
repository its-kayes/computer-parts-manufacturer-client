// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import CustomLink from '../Shared/CustomLink';

// const Navbar = () => {

//     const [user] = useAuthState(auth);
//     let signout = () => {
//         let yes = window.confirm(" Are You Sure You Want To Log Out ?");
//         if (yes) {
//             signOut(auth);
//         }
//     }


//     return (
//         <div className='mt-7 mb-7'>
//             <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
//                 <div className="container flex flex-wrap justify-between items-center mx-auto sm:flex">
//                     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Computers Part Manufacturer</span>
//                     <div className=" w-full  md:block md:w-auto" id="mobile-menu">
//                         <ul className="flex flex-col mt-4 sm:text-sm sm:flex-row sm:space-x-4 sm:mt-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//                             <li>
//                                 <CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/home'> Home </CustomLink>
//                             </li>
//                             <li>
//                                 <CustomLink className=' block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/inventory'> Inventory </CustomLink>
//                             </li>
//                             <li>
//                                 <CustomLink className=' block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/manageinventories'> Manage Inventories </CustomLink>
//                             </li>
//                             <li>
//                                 <CustomLink className=' block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/login'> Login </CustomLink>
//                             </li>
//                             {/* <li>
//                                 {
//                                     user
//                                     ?
//                                         <CustomLink to='/additemtodb' className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Item</CustomLink>
//                                         :
//                                         <p className='hidden'></p>
//                                 }
//                             </li> */}
//                             <li>
//                                 <CustomLink className=' block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/about'> About </CustomLink>
//                             </li>
//                             <li>
//                                 <CustomLink className=' block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/blogs'> Blogs </CustomLink>
//                             </li>
//                             <li>
//                                 {
//                                     user
//                                         ?
//                                         <CustomLink onClick={signout} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to='/login'> Sign Out </CustomLink>
//                                         :
//                                         <CustomLink className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to='/login'> Login </CustomLink>
//                                 }
//                             </li>
//                         </ul>
//                     </div>

//                     {/* <div class="navbar-end">
//                         <CustomLink to='/login' class="btn">Login</CustomLink>
//                     </div> */}

//                 </div>
//             </nav>

//         </div>
//     );
// };

// export default Navbar;




import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../Shared/CustomLink';



// import React from 'react';
// import CustomLink from '../Shared/CustomLink';

const Navbar = () => {

    const [user] = useAuthState(auth);
    let signout = () => {
        let yes = window.confirm(" Are You Sure You Want To Log Out ?");
        if (yes) {
            signOut(auth);
        }
    }

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/home'> Home </CustomLink></li>
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/about'> About </CustomLink></li>
                            <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/blogs'> Blogs </CustomLink></li>
                            {/* <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/login'> Login </CustomLink></li> */}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"> Computer Parts Manufacturer </a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/home'> Home </CustomLink></li>
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/about'> About </CustomLink></li>
                        <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/blogs'> Blogs </CustomLink></li>
                        {/* <li><CustomLink className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' to='/login'> Login </CustomLink></li> */}
                    </ul>
                </div>
                {
                    user ?
                        <div class="navbar-end">
                            <CustomLink to='/login' onClick={signout} class="btn">Sign Out</CustomLink>
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