import about1 from '../../assets/about-img-01.jpg'
import liton from '../../assets/Chinmoy.jpg';
import sumon from '../../assets/hero-1.jpg';

const About = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div>
                    <div>
                        <img src={about1} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h5 className='font-bold text-green-900'>About Us</h5>
                        <h1 className='text-5xl font-bold'>KNOW ABOUT OUR FARM & HISTORY</h1>
                        <p className='text-justify py-5'>We have been working in this industry for more than 30 years with trust and honesty. All hands must be on deck if we are to achieve our goal of improving global nutrition.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <h3 className='text-xl font-bold'>OUR About</h3>
                            <ul className='py-3'>
                                <li><i className="fa-solid fa-check text-green-500"></i> High-quality work</li>
                                <li><i className="fa-solid fa-check text-green-500"></i> Straightforward pricing</li>
                                <li><i className="fa-solid fa-check text-green-500"></i> Rapid response times</li>
                            </ul>
                        </div>
                        <div className='bg-green-900 rounded text-yellow-200'>
                            <h1 className='text-8xl font-bold text-center'>6</h1>
                            <p className='text-center font-medium pb-5'>Years+ Experience</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 pt-5'>
                        <div>
                            <img className='w-20 h-20 mx-auto rounded-full border border-green-900' src={liton} alt="" />
                            <h3 className='text-xl font-bold text-center text-green-900'>Chinmoy Biswas</h3>
                            <h5 className='font-medium text-sm text-center'>Founder & CEO</h5>
                        </div>
                        <div>
                            <img className='w-20 h-20 mx-auto rounded-full border border-green-900' src={sumon} alt="" />
                            <h3 className='text-xl font-bold text-center text-green-900'>Devid Ross</h3>
                            <h5 className='font-medium text-sm text-center'>Managing Director</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;