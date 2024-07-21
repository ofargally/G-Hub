import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


interface Response<T> {
    count: number;
    results: T[];
  }


const useData = <T>(endpoint : string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<Response<T>>(endpoint, { signal: controller.signal })
            .then((response) => {
                setData(response.data.results)
                setTimeout(() => setLoading(false), 2000);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            })
        return () => controller.abort();
        }, []);
    return { data, error, isLoading};
}

export default useData;