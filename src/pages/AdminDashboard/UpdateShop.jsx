import { useLoaderData } from "react-router-dom";
import Axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = '7d139a3c13136ce3482f9b40c2af1c54';
const image_hosting_api = `https:api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateShop = () => {
    const axios = useAxiosPublic();
    const shop = useLoaderData();
    const { name, price, _id } = shop;

    const handleUpdate = async e => {
        e.preventDefault()
        const form = e.target;
        let imageUrl;

        const formData = new FormData();
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const image = form.image.files[0];
        formData.append('image', image);


        const response = await Axios.post(image_hosting_api, formData);
        imageUrl = response.data.data.url;

        const shopData = { image: imageUrl, price, name };
        // console.log('cattleData', cattleData)

        axios.patch(`/shop/${_id}`, shopData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `${name} has been updated !`,
                });
                form.reset();
            })
    }
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-10">
            <form onSubmit={handleUpdate} className="p-10 shadow-md rounded">
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <label className=" font-bold text-md">Name</label>
                        <input id="name" type="text" placeholder="Name" defaultValue={name} className="input input-bordered w-full focus:outline-none" required />
                    </div>
                    <div className="w-full">
                        <label className=" font-bold text-md">Price</label>
                        <input id="price" type="text" placeholder="Price" defaultValue={price} className="input input-bordered w-full focus:outline-none" required />
                    </div>
                </div>
                <div className="w-full">
                    <label className=" font-bold text-md">Add Photo</label>
                    <input id="image" type="file" placeholder="Category" className="input input-bordered w-full focus:outline-none pt-2" required />
                </div>
                <div className="mt-5">
                    <button className="btn btn-success w-full uppercase">Update Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateShop;