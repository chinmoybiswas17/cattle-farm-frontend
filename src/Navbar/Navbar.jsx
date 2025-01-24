import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../authentication/Provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    const handleSingOut = () => {
        logOut()
            .then(res => {
                console.log(res.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-yellow-200 text-green-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>

                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 text-yellow-200 rounded w-52">
                        <li><NavLink
                            to="/"
                            className="hover:bg-transparent"
                        >
                            Home
                        </NavLink></li>
                        <li><NavLink
                            to="/cow"
                            className="hover:bg-transparent"
                        >
                            Cow
                        </NavLink></li>
                        <li><NavLink
                            to="/goat"
                            className="hover:bg-transparent"
                        >
                            Goat
                        </NavLink></li>
                        <li><NavLink
                            to="/shop"
                            className="hover:bg-transparent"
                        >
                            Shop
                        </NavLink></li>
                        {
                            user && isAdmin &&
                            <li><NavLink
                                to="/dashboard/adminHome"
                                className="hover:bg-transparent"
                            >
                                Dashboard
                            </NavLink></li>
                        }
                        {
                            user && !isAdmin &&
                            <li><NavLink
                                to="/dashboard/userHome"
                                className="hover:bg-transparent"
                            >
                                Dashboard
                            </NavLink></li>
                        }
                    </ul>
                </div>
                <div>
                    <img className='w-28' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-medium'>
                        <NavLink
                            to="/"
                            className="hover:bg-transparent"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='font-medium'><NavLink
                        to="/cow"
                        className="hover:bg-transparent"
                    >
                        Cow
                    </NavLink></li>
                    <li className='font-medium'><NavLink
                        to="/goat"
                        className="hover:bg-transparent"
                    >
                        Goat
                    </NavLink></li>
                    <li className='font-medium'><NavLink
                        to="/shop"
                        className="hover:bg-transparent"
                    >
                        Shop
                    </NavLink></li>
                    {
                        user && isAdmin &&
                        <li className="font-medium"><NavLink
                            to="/dashboard/adminHome"
                            className="hover:bg-transparent"
                        >
                            Dashboard
                        </NavLink></li>
                    }
                    {
                        user && !isAdmin &&
                        <li className="font-medium"><NavLink
                            to="/dashboard/userHome"
                            className="hover:bg-transparent"
                        >
                            Dashboard
                        </NavLink></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="" src={user?.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green-900 text-yellow-200 rounded w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><a>{user?.email}</a></li>
                                <li><NavLink onClick={handleSingOut}
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    <i className="fa-solid fa-right-from-bracket"></i> Sing Out
                                </NavLink></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login" className="btn rounded-full bg-green-900 text-yellow-200 hover:bg-green-800"><i className="fa-solid fa-user"></i></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;