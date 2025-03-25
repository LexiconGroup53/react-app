import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAddReference = () => {
    return useMutation({
        mutationFn: (item) => {
            const response = axios.post('/ref/add-ref', item);
            return response.data;
        }
})}

export const useGetAllReferences = () => {
    return useQuery({
        queryKey: ['reference'],
        queryFn: async () => {
            const response = await axios.get('/ref/all-ref');
            return response.data;
        }
    })

}