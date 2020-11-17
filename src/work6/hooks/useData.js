import {useState, useEffect} from 'react';
import axios from 'axios'

export default function useData(path, initialValue, immediateLoading = true) {
    const [data, setData] = useState(initialValue);
    const [error, setError] = useState(null)
    const [isFetching, setFetching] = useState(false);

    const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    useEffect(() => {
        if (immediateLoading) {
            setFetching(true)
            axiosInstance.get(path)
                .then(response => {
                    setFetching(false)
                    setData(response.data);
                })
                .catch(err => {
                    setFetching(false)
                    setError(err.response)
                })
        }
    }, [path, immediateLoading])

    return [data, isFetching, error]
}