import Axios from "axios";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from 'sweetalert2';

const image_hosting_key = '7d139a3c13136ce3482f9b40c2af1c54';
const image_hosting_api = `https:api.imgbb.com/1/upload?key=${image_hosting_key}`;

const PostBlog = () => {
    const axios = useAxiosPublic();

    const handleUpload = async e => {
        e.preventDefault()
        const form = e.target;
        let imageUrl;

        const formData = new FormData();
        const name = form.name.value;
        const title = form.title.value;
        const date = form.date.value;
        const message = form.message.value;
        const image = form.image.files[0];
        formData.append('image', image);


        const response = await Axios.post(image_hosting_api, formData);
        imageUrl = response.data.data.url;

        const blogData = { image: imageUrl, name, title, date, message };
        // console.log('blogData', blogData)

        axios.post('/blog', blogData)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your blog has been submitted !',
                });
                form.reset();
            })
    }
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 my-10">
            <div className="bg-base-200 lg:p-10 md:p-10 p-5">
                <form onSubmit={handleUpload}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Author Name'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="title"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Blog Title'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="date"
                            id="date"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Date'
                        />
                    </div>
                    <div className="mb-4">
                        <input type="file" id="image" />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            rows="5"
                            required placeholder='Content'
                        ></textarea>
                    </div>
                    <button className='btn btn-success w-full rounded border-none uppercase'>Post Blog</button>
                </form>
            </div>
        </div>
    );
};

export default PostBlog;