/* eslint-disable react/no-unknown-property */


const Video = () => {
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
            <p className="text-center font-bold text-green-900">Intro Video</p>
            <h1 className="text-5xl font-bold text-center text-green-900 pb-10">READY TO EXPERIENCE &
                <br /> WORK DIFFERENCE</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="flex justify-center">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/V_oHstsiCO8?si=IWWxJZi0WFd5R71c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="flex justify-center">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/4xgdjiQom5s?si=ovXl1PPm43c1syyb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            {/* <div className="flex justify-center gap-10 py-10">
                <button className='bg-green-900 text-yellow-200 px-4 py-3 rounded font-bold'>MAKE APPOINTMENT <i className="fa-solid fa-arrow-right text-yellow-200 font-bold"></i></button>
                <button className='bg-green-900 text-yellow-200 px-4 py-3 rounded font-bold'>GET A QUOTE <i className="fa-solid fa-arrow-right text-yellow-200 font-bold"></i></button>
            </div> */}
        </div>
    );
};

export default Video;