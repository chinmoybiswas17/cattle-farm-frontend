import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../authentication/Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useBooking = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: cattle = [] } = useQuery({
        queryKey: ['cattle', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking?email=${user.email}`);
            return res.data;
        }
    })

    return [cattle, refetch]
};

export default useBooking;