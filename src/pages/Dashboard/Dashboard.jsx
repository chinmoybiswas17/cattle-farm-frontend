import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
// import useCart from "../../hooks/useCart";
// import useBooking from "../../hooks/useBooking";


const Dashboard = () => {
    // const [booking] = useBooking();
    // const [cart] = useCart();
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="lg:flex">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block lg:w-64 bg-success min-h-screen">
                            <ul className="menu fixed">
                                {/* Navbar menu content here */}
                                {
                                    isAdmin ?
                                        <>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/adminHome"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-house"></i>Admin Home
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/booking"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-calendar-days"></i>Manage Booking
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/cart"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-cart-plus"></i>Manage Cart
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/manageCattle"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-cow"></i>Manage Cattle
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/manageShop"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-shop"></i>Manage Shop
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/writeBlog"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                                Write Blog
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/users"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-users"></i>Manage Users
                                            </NavLink></li>
                                        </>
                                        :
                                        <>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/userHome"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-house"></i>User Home
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/myBooking"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-calendar-days"></i>My Booking
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/myCart"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-cart-plus"></i>My Cart
                                            </NavLink></li>
                                            <li className="font-medium mb-2"><NavLink
                                                to="/dashboard/review"
                                                className="hover:bg-transparent"
                                            >
                                                <i className="fa-solid fa-user-pen"></i>Review
                                            </NavLink></li>
                                        </>
                                }
                                <div className="divider">OR</div>
                                <li className="font-medium mb-2"><NavLink
                                    to="/"
                                    className="hover:bg-transparent"
                                >
                                    <i className="fa-solid fa-house"></i> Home
                                </NavLink></li>
                            </ul>
                        </div>
                        <div className="lg:w-full">
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-success">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/adminHome"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-house"></i>Admin Home
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/booking"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-calendar-days"></i>Manage Booking
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/cart"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-cart-plus"></i>Manage Cart
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/manageCattle"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-cow"></i>Manage Cattle
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/manageShop"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-shop"></i>Manage Shop
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/writeBlog"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fas fa-pencil-alt"></i>
                                        Write Blog
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/users"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-users"></i>Manage Users
                                    </NavLink></li>
                                </>
                                :
                                <>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/userHome"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-house"></i>User Home
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/myBooking"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-calendar-days"></i>My Booking
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/myCart"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-cart-plus"></i>My Cart
                                    </NavLink></li>
                                    <li className="font-medium mb-2"><NavLink
                                        to="/dashboard/review"
                                        className="hover:bg-transparent"
                                    >
                                        <i className="fa-solid fa-user-pen"></i>Review
                                    </NavLink></li>
                                </>
                        }
                        <div className="divider">OR</div>
                        <li className="font-medium mb-2"><NavLink
                            to="/"
                            className="hover:bg-transparent"
                        >
                            <i className="fa-solid fa-house"></i>Home
                        </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;