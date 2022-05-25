import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hook/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    let navigate = useNavigate();
    let [user] = useAuthState(auth);
    let [admin, adminLoading] = useAdmin(user);

    if (adminLoading) {
        return <Loading> </Loading>
    }

    console.log(admin);

    let allUser = event => {
        event.preventDefult();
        // window.location.reload(false);
        // navigate('/dashboard/users');
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
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        {admin && <>
                            <li> <Link onClick={allUser} to='users'> All Users </Link> </li>
                            <li><Link to='addproduct'> Add Product </Link></li>
                            <li><Link to='allorders'> Manage Orders </Link></li>
                            <li><Link to='products'> Manage Products </Link></li>

                        </>}
                        {
                            !admin && <>
                                <li><Link to='orders'>My Orders</Link></li>
                                <li><Link to='reviews'>Add A Review</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;