import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {

    let [user] = useAuthState(auth);
    console.log(user);
    let email = user?.email;

    let urlEmail = `https://enigmatic-lake-23819.herokuapp.com/users/${email}`;
    let urle = "https://enigmatic-lake-23819.herokuapp.com/users";

    let { data: users, isLoading, refetch } = useQuery('users', () => fetch(urlEmail, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    let updateProfile = async event => {
        event.preventDefault();

        let name = user.displayName;
        let profession = event.target.profession.value;
        let about = event.target.about.value;
        let gender = event.target.gender.value;
        let education = event.target.education.value;
        let number = event.target.num.value;
        let address = event.target.address.value;
        let img = event.target.img.value;

        let data = {
            name: name,
            email: email,
            profession: profession,
            about: about,
            gender: gender,
            education: education,
            number: number,
            address: address,
            img: img,
        }
        let url = `https://enigmatic-lake-23819.herokuapp.com/users/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount > 0 || result.upsertedCount > 0) {
                    refetch();
                    toast.success(`Updated User Information`);
                }
            })
        event.target.reset();
    }

    return (
        <div className='flex justify-evenly items-center'>
            <div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={users?.img} alt="User Image" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold font-mono">
                            {user?.displayName}
                        </h2>
                        <p className='font-semibold'> {users?.profession} </p>
                        <p> {users?.about} </p>
                        <div class=" border-2 p-2 rounded-2xl ">

                            <div className=' card-actions justify-between'>
                                <div className="text-lg font-mono font-bold"> Status </div>
                                <div class="badge badge-outline text-white border-green-500 bg-[#48BB78] p-3">  Active</div>
                            </div>
                            <div>
                                <div className='flex justify-between font-semibold mt-3'>
                                    <p> Join </p>
                                    <p> {user?.metadata.creationTime} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>

                <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">More Details About Myself</h5>
                    <div className='flex justify-around font-mono'>
                        <div>
                            <p className=' mt-3 pt-4'> Name: {user?.displayName} </p>
                            <p className=' mt-3 pt-4'> Gender: {users?.gender} </p>
                            <p className=' mt-3 pt-4'> Address: {users?.address} </p>
                        </div>
                        <div>
                            <p className=' mt-3 pt-4'> Education: {users?.education} </p>
                            <p className=' mt-3 pt-4'> Number: {users?.number}  </p>
                            <p className=' mt-3 pt-4'> Email: {user?.email} </p>
                        </div>
                    </div>


                    <div>
                        <label for="profile" class="btn modal-button w-2/4 max-w-xs my-10 ">Update Profile</label>

                        <input type="checkbox" id="profile" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <form onSubmit={updateProfile} className="modal-box">
                                <label htmlFor="profile" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <div class="relative z-0 w-full mb-6 group">
                                    <div>
                                        <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">About</label>
                                        <textarea id="about" name='about' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About My self"></textarea>
                                    </div>
                                </div>

                                <div class="relative z-0 w-full mb-6 group border-2">
                                    <label htmlFor="education" className='underline'> Education Details </label>
                                    <input type="text" name="education" id="education" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                                </div>

                                <div class="relative z-0 w-full mb-6 group border-2">
                                    <label htmlFor="address" className='underline'> Current Address </label>
                                    <input type="text" name="address" id="address" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                                </div>

                                <div class="relative z-0 w-full mb-6 group border-2">
                                    <label htmlFor="num" className='underline'> Phone Number </label>
                                    <input type="number" name="num" id="num" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                                </div>

                                <div class="relative z-0 w-full mb-6 group border-2">
                                    <label htmlFor="img" className='underline'> Image URL </label>
                                    <input type="img" name="img" id="number" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
                                </div>

                                <div class="grid xl:grid-cols-2 xl:gap-6">
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="profession" id="profession" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="profession" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Profession </label>
                                    </div>
                                    <div class="relative z-0 w-full mb-6 group">
                                        <input type="text" name="gender" id="gender" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                                        <label for="gender" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                                    </div>
                                </div>

                                <input type="submit" value="Update Profile" className='btn ' />
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyProfile;