import team1 from '../../assets/Chinmoy.jpg';
import team2 from '../../assets/team (3).jpg';
import team3 from '../../assets/hero-1.jpg';

const Team = () => {
    return (
        <div className='lg:w-3/4 mx-auto lg:px-0 px-5 py-16'>
            <h1 className='text-3xl font-bold text-center pb-5 text-green-900 uppercase'>Meet Our Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-yellow-200 text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full border-dashed border-2 border-green-900' src={team1} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Chinmoy Biswas</h3>
                        <h5 className='text-center font-medium text-sm'>Founder & CEO</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
                <div className='bg-yellow-200 text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full border-dashed border-2 border-green-900' src={team2} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Rohan Prvej</h3>
                        <h5 className='text-center font-medium text-sm'>Co-Founder</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
                <div className='bg-yellow-200 text-green-900 rounded'>
                    <div className='flex justify-center pt-5'>
                        <img className='h-52 w-52 rounded-full border-dashed border-2 border-green-900' src={team3} alt="" />
                    </div>
                    <div className='py-5'>
                        <h3 className='text-2xl font-bold text-center'>Devid Ross</h3>
                        <h5 className='text-center font-medium text-sm'>Managing Director</h5>
                    </div>
                    <div className="flex justify-center gap-10 pb-5">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;