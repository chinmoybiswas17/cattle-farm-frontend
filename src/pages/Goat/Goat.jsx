/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import Swal from "sweetalert2";


const Goat = () => {
    const { user } = useContext(AuthContext);
    const [goat, setGoat] = useState([]);
    useEffect(() => {
        fetch('https://cattle-farm-server.vercel.app/cattle')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.filter(item => item.category === 'goat');
                setGoat(filteredData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [goat]);

    const handleErrorModal = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please login first!",
        });
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wdtm3NZ/Goat-Farming.jpg)' }}>
                {/* <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                        <h1 className="mb-5 text-4xl font-bold">HAPPY FARMING</h1>
                        <p className="mb-5 text-yellow-200">Farming is not just a livelihood, it's a legacy we sow today for future generations to reap !!!</p>
                    </div>
                </div> */}
            </div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {goat.map(goat => (<div key={goat._id} className="card card-compact border border-green-700 rounded">
                        <figure><img className="h-52 w-full" src={goat.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{goat.origin}
                                <div className="badge badge-secondary">Weight : {goat.weight} Kg</div>
                            </h2>
                            <p className="font-medium text-gray-600">Price : {goat.price} Tk</p>
                            <p className="font-medium text-gray-600">Age : {goat.age} Months Tk</p>
                            <div className="card-actions">
                                {user && user.email ? (
                                    <Link to={`/bookingForm/${goat._id}`} className="w-full">
                                        <button className="btn bg-green-900 hover:bg-green-800 text-yellow-200 w-full uppercase">Book Now</button>
                                    </Link>
                                ) : (
                                    <button onClick={handleErrorModal} className="btn bg-green-900 hover:bg-green-800 text-yellow-200 w-full uppercase">Book Now</button>
                                )}

                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default Goat;