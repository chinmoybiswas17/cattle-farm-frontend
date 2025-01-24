import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cow from "../pages/Cow/Cow";
import Goat from "../pages/Goat/Goat";
import Shop from "../pages/Shop/Shop";
import Dashboard from "../pages/Dashboard/Dashboard";
import AdminHome from "../pages/AdminDashboard/AdminHome";
import UserHome from "../pages/UserDashboard/UserHome";
import Payment from "../pages/Payment/Payment";
import BookingForm from "../pages/BookingForm/BookingForm";
import Review from "../pages/UserDashboard/Review";
import Users from "../pages/AdminDashboard/Users";
import MyCart from "../pages/UserDashboard/MyCart";
import Cart from "../pages/AdminDashboard/Cart";
import MyBooking from "../pages/UserDashboard/MyBooking";
import Booking from "../pages/AdminDashboard/Booking";
import AllPhotos from "../components/Gallery/AllPhotos";
import Blog from "../components/Blog/Blog";
import BlogDetails from "../components/Blog/BlogDetails";
import WriteBlog from "../pages/AdminDashboard/WriteBlog";
import AddCattle from "../pages/AdminDashboard/AddCattle";
import AddItem from "../pages/AdminDashboard/AddItem";
import ManageCattle from "../pages/AdminDashboard/ManageCattle";
import ManageShop from "../pages/AdminDashboard/ManageShop";
import UpdateCattle from "../pages/AdminDashboard/UpdateCattle";
import UpdateShop from "../pages/AdminDashboard/UpdateShop";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/cow",
                element: <Cow></Cow>
            },
            {
                path: "/goat",
                element: <Goat></Goat>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch('https://cattle-farm-server.vercel.app/blog')
            },
            {
                path: "/bookingForm/:id",
                element: <BookingForm></BookingForm>,
                loader: () => fetch('https://cattle-farm-server.vercel.app/cattle')
            },
            {
                path: "/allPhotos",
                element: <AllPhotos></AllPhotos>
            }
        ],
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/payment",
        element: <Payment></Payment>
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [

            // admin dashboard
            {
                path: "adminHome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "booking",
                element: <Booking></Booking>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "manageCattle",
                element: <ManageCattle></ManageCattle>
            },
            {
                path: "updateCattle/:id",
                element: <UpdateCattle></UpdateCattle>,
                loader: ({ params }) => fetch(`https://cattle-farm-server.vercel.app/cattle/${params.id}`)
            },
            {
                path: "manageShop",
                element: <ManageShop></ManageShop>
            },
            {
                path: "updateShop/:id",
                element: <UpdateShop></UpdateShop>,
                loader: ({ params }) => fetch(`https://cattle-farm-server.vercel.app/shop/${params.id}`)
            },
            {
                path: "addCattle",
                element: <AddCattle></AddCattle>
            },
            {
                path: "addItem",
                element: <AddItem></AddItem>
            },
            {
                path: "writeBlog",
                element: <WriteBlog></WriteBlog>
            },
            {
                path: "users",
                element: <Users></Users>
            },

            // user dashboard
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "myBooking",
                element: <MyBooking></MyBooking>
            },
            {
                path: "myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "review",
                element: <Review></Review>
            }

        ]
    }
]);

export default router;