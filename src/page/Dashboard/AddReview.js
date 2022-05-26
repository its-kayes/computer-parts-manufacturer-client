import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    let [user] = useAuthState(auth);

    // let [reviews, setReviews] = useState();

    let addReview = event => {
        event.preventDefault();

        let name = user.displayName;
        let email = user.email;
        let img = event.target.img.value;
        let description = event.target.description.value;
        let star = event.target.star.value;

        let review = {
            name: name,
            email: email,
            img: img,
            description: description,
            star: star
        }

        fetch('https://enigmatic-lake-23819.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        // useEffect(() => {

        // }, [])
        // console.log(review);
    }


    return (
        <div>
            {/* <h1> {reviews?.length} </h1> */}

            <div>
                <label for="my-modal-6" class="btn modal-button w-full max-w-xs ">Give a Feedback</label>

                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <form onSubmit={addReview} className="modal-box">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg flex justify-center font-mono uppercase"> Review as {user?.displayName}</h3>

                        <div className='my-6'>
                            <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Image URL </label>
                            <input name='img' id='img' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className='my-6'>
                            <label for="star" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"> How much Star do you want give us </label>
                            <input id='star' name='number' type="number" placeholder="Star out of 5" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" name='description' rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        </div>

                        <div className="modal-action">
                            <input type="submit" className="btn" value="Send Feedback" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;