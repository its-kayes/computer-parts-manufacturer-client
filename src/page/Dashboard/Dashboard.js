import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hook/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    let [user] = useAuthState(auth);
    let [admin, isAdminLoading] = useAdmin(user?.email);
    
    // if(isAdminLoading) {
    //     return <Loading> </Loading>
    // }

    console.log(admin);

    let goProfile = event => {
        toast.warn(" The About fields are empty until you update it. And if you do not see the correct information after the update, please take a hard reload ")
    }

    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    {/* <!-- Page content here --> */}
                    {/* <h1 className='text-5xl text-cyan-500 font-extrabold'> Dashboard </h1> */}
                    <Outlet>  </Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='reviews'>Add A Review</Link></li>
                        <li><Link onClick={goProfile} to='profile'>My Profile</Link></li>
                        {/* {
                            admin ?
                                ''
                                :
                                <li> <Link to='users'> All Users </Link> </li>
                        } */}
                        {admin && <li> <Link to='users'> All Users </Link> </li>}
                        {/* {
                            admin && <>
                                <li> <Link to='users'> All Users </Link> </li>
                                
                            </>
                        } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;