import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

    let { id } = useParams();

    let { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts', {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading> </Loading>
    }

    let deleteParts = event => {
        console.log(event);
        if (event) {
            <div></div>
        }
        fetch(`http://localhost:5000/part/${event}`, {
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
                                            {/* 
                                            <td> <button onClick={()=> deleteParts(part._id)} className=' btn bg-red-600'> X </button> </td> */}

                                            <td> <label for="my-modal-6" class="btn modal-button"> X </label> </td>
                                            <div>
                                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                                <div class="modal modal-bottom sm:modal-middle">
                                                    <div class="modal-box">
                                                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                                        <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                                                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                                        <div class="modal-action">
                                                            <label for="my-modal-6" onClick={() => deleteParts(part._id)} class="btn"> Delete </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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