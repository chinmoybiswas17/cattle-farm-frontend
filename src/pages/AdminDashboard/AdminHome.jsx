import { useContext } from "react";
import { AuthContext } from "../../authentication/Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-5">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : 'Back'
                }
            </h2>
            <div className="lg:px-20 px-5 mt-10">
                <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow w-full">

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Reviews</div>
                        <div className="stat-value text-secondary">{stats.review}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Booking</div>
                        <div className="stat-value text-secondary">{stats.booking}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Total Cattle</div>
                        <div className="stat-value text-secondary">{stats.cattle}</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Cart</div>
                        <div className="stat-value text-secondary">{stats.cart}</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-secondary">{stats.user}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminHome;