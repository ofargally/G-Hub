import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
  }
  interface Response {
    count: number;
    results: Game[];
  }

const useGames = () => { 
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<Response>("/games", { signal: controller.signal })
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
            })
        return () => controller.abort();
        }, []);
    return { games, error };
}

export default useGames;