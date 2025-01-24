
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useBooking from "../../hooks/useBooking";
import { Link } from "react-router-dom";


const MyBooking = () => {
    const [booking, refetch] = useBooking();
    const totalPrice = booking.reduce((total, cattle) => total + cattle.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDeleteUser = cow => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booking/${cow._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            {
                booking.length > 0 ? (
                    <div className="lg:px-20 px-5 mt-10">
                        <div>
                            <div className="flex justify-center">
                                <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow w-full">

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Total Cattle</div>
                                        <div className="stat-value text-secondary">{booking.length}</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <div className="stat-title">Total Price</div>
                                        <div className="stat-value text-secondary">{totalPrice} Tk</div>
                                    </div>

                                    <div className="stat place-items-center">
                                        <Link to="/payment">
                                            <button className="btn btn-secondary font-bold">Pay Now <i className="fa-solid fa-arrow-right"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-10">
                            <table className="table w-full">
                                {/* head */}
                                <thead className="bg-success text-base-200">
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Date</th>
                                        <th>Price</th>
                                        <th>Weight</th>
                                        <th>Age</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        booking.map((cow, index) => <tr key={cow._id}>
                                            <th>{index + 1}</th>
                                            <td>{cow.name}</td>
                                            <td>{cow.email}</td>
                                            <td>{cow.phone}</td>
                                            <td>{cow.date}</td>
                                            <td>{cow.price} Tk</td>
                                            <td>{cow.weight} Kg</td>
                                            <td>{cow.age} Months</td>
                                            <td>{cow.category}</td>
                                            <td className="flex justify-center">
                                                <button onClick={() => handleDeleteUser(cow)}><i className="fa-solid fa-trash-can text-xl text-red-600"></i></button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="flex justify-center items-center h-screen">
                            <p className="text-3xl font-bold">No Booking Available</p>
                        </div>
                    )
            }
        </div>
    );
};

export default MyBooking;