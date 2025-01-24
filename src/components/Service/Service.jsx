import { Link } from 'react-router-dom';
import cow from '../../assets/cow.jpg';
import goat from '../../assets/goat.jpg';
import meat from '../../assets/meat.jpg';
import milk from '../../assets/milk.jpg';


const Service = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 py-16">
            <p className="text-center font-bold text-green-900">Service</p>
            <h1 className="text-4xl font-bold text-center pb-10 text-green-900">WHAT WE PROVIDE</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className="border-b-2 border-yellow-200">
                    <img className="h-48 w-48 mx-auto rounded-full" src={cow} alt="" />
                    <h2 className="text-2xl font-semibold text-center pt-5">ORGANIC COW</h2>
                    <p className="text-center py-3">A beautiful sunset over the ocean with vibrant colors.</p>
                    <div className="card-actions justify-center pb-3">
                        <Link to="/cow">
                            <button className=""><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-green-900"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="border-b-2 border-yellow-200">
                    <img className="h-48 w-48 mx-auto rounded-full" src={goat} alt="" />
                    <h2 className="text-2xl font-semibold text-center pt-5">ORGANIC GOAT</h2>
                    <p className="text-center py-3">A close-up of a blooming red rose in a garden.</p>
                    <div className="card-actions justify-center pb-3">
                        <Link to="/goat">
                            <button className=""><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-green-900"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="border-b-2 border-yellow-200">
                    <img className="h-48 w-48 mx-auto rounded-full" src={meat} alt="" />
                    <h2 className="text-2xl font-semibold text-center pt-5">ORGANIC MEAT</h2>
                    <p className="text-center py-3">A serene mountain landscape with snow-capped peaks.</p>
                    <div className="card-actions justify-center pb-3">
                        <Link to="/shop">
                            <button className=""><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-green-900"></i></button>
                        </Link>
                    </div>
                </div>
                <div className="border-b-2 border-yellow-200">
                    <img className="h-48 w-48 mx-auto rounded-full" src={milk} alt="" />
                    <h2 className="text-2xl font-semibold text-center pt-5">ORGANIC MILK</h2>
                    <p className="text-center py-3">A playful puppy chasing a ball in a green field.</p>
                    <div className="card-actions justify-center pb-3">
                        <Link to="/shop">
                            <button className=""><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-green-900"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;