import axios, { AxiosRequestConfig } from "axios";

export interface Response<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "a95e752c0c574a3a93c3b333b2e0daad",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((response) => response.data);
  };
}
export default APIClient;
