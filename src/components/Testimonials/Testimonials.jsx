import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Navigation } from "swiper/modules";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://cattle-farm-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20 lg:w-3/4 mx-auto lg:px-0 px-5">
            <h2 className='text-3xl font-bold text-center text-green-900 mb-5 uppercase'>What Our Clients Say</h2>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="lg:w-3/4 mx-auto flex flex-col items-center p-10 border">
                            <img className="w-20 h-20 rounded-full" src={review.userPhoto} alt="" />
                            <h3 className="text-2xl mt-2 text-orange-400">{review.name}</h3>
                            <p className="py-5 text-justify">{review.details}</p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;