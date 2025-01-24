import { Link } from 'react-router-dom';
import product1 from '../../assets/product-icon-01.png';
import product2 from '../../assets/product-icon-02.png';

const Product = () => {
    return (
        <div className="lg:w-3/4 mx-auto py-16 lg:px-0 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                <div className='bg-green-900 flex items-center p-5 gap-5 rounded'>
                    <img src={product1} alt="" />
                    <h1 className='text-2xl font-semibold text-white'>WORLDWIDE FRESH MEAT
                        <br /> DELIVERY</h1>
                    <Link to='/shop'>
                        <button><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i></button>
                    </Link>
                </div>
                <div className='bg-green-900 flex items-center p-7 gap-5 rounded'>
                    <img src={product2} alt="" />
                    <h1 className='text-2xl font-semibold text-white'>WORLDWIDE FRESH MILK
                        <br /> DELIVERY</h1>
                    <Link to='/shop'>
                        <button><i className="fa-solid fa-arrow-right text-4xl font-extrabold text-yellow-200"></i></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;