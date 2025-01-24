import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-green-900 text-yellow-200">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Cattle</a>
                    <a className="link link-hover">Meat</a>
                    <a className="link link-hover">Milk</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-green-900 text-yellow-200 border-yellow-200">
                <aside className="items-center grid-flow-col">
                    <img className='w-20' src={logo} alt="" />
                    <p>Cattle Farm Ltd. <br />Providing reliable cattle since 2024</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href=''><i className="fa-brands fa-facebook text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-twitter text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-linkedin text-2xl"></i></a>
                        <a href=''><i className="fa-brands fa-youtube text-2xl"></i></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;