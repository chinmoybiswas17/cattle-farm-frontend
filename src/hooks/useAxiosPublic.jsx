import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://cattle-farm-server.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;