import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../authentication/Provider/AuthProvider";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { refetch, data: item = [] } = useQuery({
        queryKey: ['item', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`);
            return res.data;
        }
    })

    return [item, refetch]
};

export default useCart;