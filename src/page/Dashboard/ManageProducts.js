import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProducts = () => {

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

                                            <td> <button onClick={(()=> deleteParts(part._id))} className=' btn bg-red-600'> X </button> </td>
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