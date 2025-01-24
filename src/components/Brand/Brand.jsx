import brand1 from '../../assets/brand-1.png';
import brand2 from '../../assets/brand-2.png';
import brand3 from '../../assets/brand-3.png';
import brand4 from '../../assets/brand-4.png';
import brand5 from '../../assets/brand-5.png';

const Brand = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 border-t-2 border-green-900 pt-16'>
                <div className='flex justify-center'>
                    <img src={brand1} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={brand2} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={brand3} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={brand4} alt="" />
                </div>
                <div className='flex justify-center'>
                    <img src={brand5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;