import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    let { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://enigmatic-lake-23819.herokuapp.com/parts', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }



    const submit = (id) => {

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        console.log(id);
                        fetch(`https://enigmatic-lake-23819.herokuapp.com/part/${id}`, {
                            method: 'DELETE',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                toast.warning(' Parts Delete Successfully ')
                                refetch();
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        toast.warn(' Delete Cancel ');
                    }
                }
            ]
        });
    }


    // let deleteParts = event => {
    //     console.log(event);
    //     // if (event) {
    //     //     <div></div>
    //     // }
    //     fetch(`https://enigmatic-lake-23819.herokuapp.com/part/${event}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             toast.warning(' Parts Delete Successfully ')
    //             refetch();
    //         })
    // }

    return (
        <div>
            <p className='font-bold text-2xl text-center'> Manage Products {parts?.length} </p>
            <div>
                <div>
                    <div>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th> Avatar </th>
                                        <th> Name </th>
                                        <th> Price(per) </th>
                                        <th> Stock </th>
                                        <th>Minimum Order</th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                {
                                    parts?.map((part, index) => <tbody>
                                        <tr>
                                            <th> {index + 1} </th>

                                            <td>

                                                <div class="avatar">
                                                    <div class="w-24 mask mask-squircle">
                                                        <img src={part.img} />
                                                    </div>
                                                </div>

                                            </td>

                                            <td> {part.name} </td>

                                            <td> {part.price} </td>

                                            <td> {part.stock} </td>

                                            <td> {part.minOrder} </td>

                                            {/* <td> <button onClick={() => deleteParts(part._id)} className=' btn bg-red-600'> X </button> </td> */}

                                            <td>

                                                <div className='container'>
                                                    <button className='btn bg-red-700' onClick={() => submit(part._id)}>Delete </button>
                                                </div>

                                            </td>
                                        </tr>
                                    </tbody>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;