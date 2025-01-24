import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";



const Review = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const userPhoto = user.photoURL;

        const userReviews = { name, rating, details, userPhoto };
        // console.log(userReviews);

        axiosSecure.post('/review', userReviews)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "Review successfully added !",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div>
            <div className="my-10 lg:px-0 px-5">
                <div className="lg:w-3/4 mx-auto bg-gray-200 lg:p-10 md:p-10 p-5 rounded">
                    <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" defaultValue={user.displayName} className="form-input mt-1 w-full rounded-md focus:outline-none p-2" />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Rating</label>
                            <select id="rating" name="rating" className="form-select mt-1 w-full rounded p-2">
                                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                <option value="4">⭐⭐⭐⭐ (Good)</option>
                                <option value="3">⭐⭐⭐ (Average)</option>
                                <option value="2">⭐⭐ (Fair)</option>
                                <option value="1">⭐ (Poor)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-700 font-medium">Your Comment</label>
                            <textarea id="detail" name="details" rows="4" className="form-textarea mt-1 w-full rounded focus:outline-none p-2"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-success w-full uppercase">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;