import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const Booking = () => {
    const axiosSecure = useAxiosSecure();
    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/booking');
            return res.data;
        }
    })

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
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-3xl font-bold">No Booking Available</p>
                    </div>
                )
            }
        </div>
    );
};

export default Booking;