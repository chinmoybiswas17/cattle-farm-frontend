import phone from '../../assets/phone-icon.png';
import Swal from "sweetalert2";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5rdxana', 'template_b5h3617', form.current, 'aY09R0x-o_CBd4nUQ')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "You you have successfully submitted !",
                    icon: "success"
                });
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="lg:w-3/4 mx-auto my-16 lg:px-0 px-5">
            <p className="font-medium text-green-900 text-center">Customer Request</p>
            <h1 className="text-4xl font-bold text-green-900 text-center mb-5">BOOK AN APPOINTMENT</h1>
            <div className="bg-green-900 lg:p-10 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Your Name'
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            required placeholder='Your Email'
                        />
                    </div>
                    <div className="mb-4">
                        <textarea
                            id="message"
                            name="message"
                            className="w-full px-4 py-2 rounded text-black focus:outline-none"
                            rows="5"
                            required placeholder='Message'
                        ></textarea>
                    </div>
                    <button className='btn bg-yellow-200 hover:bg-yellow-200 text-green-900 font-bold w-full rounded border-none'>
                        GET APPOINTMENT <i className="fa-solid fa-arrow-right text-green-900 font-bold"></i>
                    </button>
                </form>
                <div className="bg-yellow-200 rounded">
                    <div className='flex items-center gap-7 lg:px-10 px-5 py-5'>
                        <div className='border-dashed border-2 border-green-900 rounded-full p-7'>
                            <img src={phone} alt="" />
                        </div>
                        <div>
                            <p>Or Call Us Now</p>
                            <h3 className='text-2xl font-bold'>01738751356</h3>
                        </div>
                    </div>
                    <p className='px-10 lg:pb-0 pb-5 text-justify'>Give us a call to ask for online advice or book a physical schedule at dairy press soon.</p>
                    <div className='lg:px-10 px-5 lg:mt-5 lg:mb-0 mb-5'>
                        <i className="fa-solid fa-location-dot bg-green-900 px-5 py-3 text-2xl text-yellow-200 rounded"></i>
                        <button className='font-bold lg:ml-5 ml-3'>VIEW ON GOOGLE MAP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;