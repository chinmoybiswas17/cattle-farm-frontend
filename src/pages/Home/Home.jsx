import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import Gallery from "../../components/Gallery/Gallery";
import Product from "../../components/Product/Product";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";
import Team from "../../components/Team/Team";
import Video from "../../components/Video/Video";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Blog from "../../components/Blog/Blog";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <About></About>
            <Product></Product>
            <Service></Service>
            <Gallery></Gallery>
            <Video></Video>
            <Brand></Brand>
            <Team></Team>
            <Contact></Contact>
            <Blog></Blog>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;