import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Platform {
    id : number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
  }

interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => { 
    const [isLoading, setLoading] = useState<boolean>(false);
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<Response>("/games", { signal: controller.signal })
            .then((response) => {
                setGames(response.data.results)
                setTimeout(() => setLoading(false), 2000);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            })
        return () => controller.abort();
        }, []);
    return { games, error, isLoading};
}

export default useGames;