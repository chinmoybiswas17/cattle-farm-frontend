import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin/cart');
            return res.data;
        }
    })

    const handleDelete = id => {
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
                axiosSecure.delete(`/cart/${id}`)
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
                cart.length > 0 ? (
                    <div>
                        <div className="lg:px-20 px-5 mt-10">
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead className="bg-success text-base-200">
                                        <tr>
                                            <th>#</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            {/* <th>Status</th> */}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => <tr key={item._id}>
                                                <th>{index + 1}</th>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="rounded-full w-12 h-12">
                                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                {/* <td>
                                                    <button>Confirm</button>
                                                </td> */}
                                                <td>
                                                    <button onClick={() => handleDelete(item._id)}><i className="fa-solid fa-trash-can text-xl text-red-600"></i></button>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="flex justify-center items-center h-screen">
                            <p className="text-3xl font-bold">No Cart Available</p>
                        </div>
                    )
            }
        </div>
    );
};

export default Cart;