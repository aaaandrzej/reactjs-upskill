import { useEffect, useState } from "react";
import { apiClient } from "../apiClient/apiClient";

export const useGetInvoices = (id = "") => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAllInvoices = () => {
    handleApiRequestGet();
  };

  useEffect(() => {
    fetchAllInvoices();
  }, []);

  const handleApiRequestGet = () => {
    setIsLoading(true);
    return apiClient
      .get(id)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return {
    response,
    isLoading,
    error,
    fetchAllInvoices,
    handleApiRequestGet,
  };
};
