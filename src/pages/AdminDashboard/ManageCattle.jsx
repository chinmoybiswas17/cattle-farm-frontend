import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ManageCattle = () => {
    const axiosSecure = useAxiosSecure();
    const { data: cattle = [], refetch } = useQuery({
        queryKey: ['cattle'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cattle');
            return res.data;
        }
    })

    const handleDeleteUser = data => {
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
                axiosSecure.delete(`/cattle/${data._id}`)
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
                cattle.length > 0 ? (
                    <div className="lg:px-20 px-5 mt-10">
                        <div className="stats shadow flex justify-center text-center">
                            <div className="stat">
                                <div className="stat-title">
                                    <Link to="/dashboard/addCattle">
                                        <button className="text-2xl font-bold uppercase"><i className="fa-solid fa-plus"></i> Add New Cattle</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto mt-10">
                            <table className="table w-full">
                                {/* head */}
                                <thead className="bg-success text-base-200">
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>Origin</th>
                                        <th>Price</th>
                                        <th>Weight</th>
                                        <th>Age</th>
                                        <th>Category</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cattle.map((data, index) => <tr key={data._id}>
                                            <th>{index + 1}</th>
                                            <td><img className="lg:w-12 md:w-12 lg:h-12 md:h-12 w-9 h-9 rounded-full" src={data.image} alt="" /></td>
                                            <td>{data.origin}</td>
                                            <td>{data.price} Tk</td>
                                            <td>{data.weight} Kg</td>
                                            <td>{data.age} Months</td>
                                            <td>{data.category}</td>
                                            <td className="flex gap-5">
                                                <Link to={`/dashboard/updateCattle/${data._id}`}>
                                                    <button><i className="fa-solid fa-pen-to-square text-xl text-green-600"></i></button>
                                                </Link>
                                                <button onClick={() => handleDeleteUser(data)}><i className="fa-solid fa-trash-can text-xl text-red-600"></i></button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-3xl font-bold">No Cattle Available</p>
                    </div>
                )
            }
        </div>
    );
};

export default ManageCattle;