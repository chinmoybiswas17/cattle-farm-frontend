import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCattle = () => {
    const axiosPublic = useAxiosPublic();
    const { data: cattle = [], isPending: loading, refetch } = useQuery({
        queryKey: ['cattle'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cattle');
            return res.data;
        }
    })
    return [cattle, loading, refetch]
};

export default useCattle;