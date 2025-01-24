/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import useCart from "../../hooks/useCart";


const Shop = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const navigate = useNavigate();

    const [shop, setShop] = useState([]);
    useEffect(() => {
        fetch('https://cattle-farm-server.vercel.app/shop')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])

    const handleAddToCart = (foodId, name, price, image) => {
        if (user && user.email) {
            const cartItem = {
                foodId: foodId,
                email: user.email,
                name: name,
                price: price,
                image: image
            };
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    // console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} successfully added `,
                            showConfirmButton: false,
                            timer: 2000
                        });

                        refetch();
                        navigate("/payment")
                    }
                })
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please login first!",
            });
        }
    };

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/vd5Rgrp/service-01.jpg)' }}>
                {/* <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-black bg-opacity-50 lg:p-10 md:p-10 p-3 rounded">
                        <h1 className="mb-5 text-4xl font-bold">HAPPY SHOPPING</h1>
                        <p className="mb-5 text-yellow-200">Farming is not just a livelihood, it's a legacy we sow today for future generations to reap !!!</p>
                    </div>
                </div> */}
            </div>
            <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {shop.map(shop => (<div key={shop._id} className="card card-compact rounded border border-green-700">
                        <figure><img className="h-36 w-full" src={shop.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title uppercase">{shop.name}</h2>
                            <p className="font-medium text-gray-600">Price : {shop.price} Tk</p>
                            <div className="card-actions justify-center">
                                <button onClick={() => handleAddToCart(shop._id, shop.name, shop.price, shop.image)} className="bg-green-900 w-full p-3 rounded text-yellow-200 font-semibold"><i className="fa-solid fa-cart-plus"></i> Add to cart</button>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default Shop;