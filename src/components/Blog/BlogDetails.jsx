import { useContext, useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import admin from '../../assets/Chinmoy.jpg';
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]);
    const { id } = useParams();
    const loadData = useLoaderData();

    useEffect(() => {
        const findData = loadData?.find(details => details._id === id);
        setData(findData)
    }, [id, loadData])

    const handleComment = e => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const userPhoto = user.photoURL;

        const userComment = { comment, userName, userEmail, userPhoto };
        // console.log(userComment);

        axiosSecure.post('/comment', userComment)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "Comment successfully added !",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div className="lg:flex gap-20 lg:px-20 px-5 my-10">
            <div className="lg:w-3/4 w-full border rounded p-5">
                <img className="w-full rounded" src={data.image} alt="" />
                <div className='flex justify-between mt-5'>
                    <span className="font-medium text-green-900"><i className="fa-solid fa-user text-green-800 mr-2"> </i>{data.author}</span>
                    <span className="font-medium text-green-900"><i className="fa-solid fa-calendar-days text-green-800 mr-2"> </i>{data.date}</span>
                </div>
                <h1 className="text-3xl font-bold uppercase my-5">{data.title}</h1>
                <p className="text-justify">{data.content}</p>
                <form onSubmit={handleComment} className="bg-base-200 p-10 mt-10">
                    <div className="mb-4">
                        <textarea
                            id="comment"
                            name="comment"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none border"
                            rows="5"
                            required placeholder='Comment'
                        ></textarea>
                    </div>
                    <button className='btn bg-green-900 hover:bg-green-900 text-yellow-200 font-bold w-full rounded border-none uppercase'>
                        Post Comment
                    </button>
                </form>
            </div>
            <div className="lg:w-1/3 w-full border rounded p-5 lg:mt-0 mt-10">
                <div>
                    <img className="w-32 h-32 mx-auto rounded-full border border-green-700" src={admin} alt="" />
                </div>
                <h1 className="text-center font-bold mt-3">Chinmoy Biswas</h1>
                <p className="text-justify">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.orem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="flex justify-center gap-10 mt-5">
                    <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                    <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                    <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;