import { useEffect, useState } from "react";
import { movieApi } from "../constants/axios";
export const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        console.log("url", url)
        const response = await movieApi.get(url);
        console.log(response);
        setData([response.data])
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
    };

    fetchData(url)

  }, [url]);

  return { data, loading, error}
};