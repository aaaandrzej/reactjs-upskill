import { useEffect, useState } from "react";
import axios from "axios";

export const useHandleInvoices = (id = "") => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3001/invoices/",
  });
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleApiRequest("get", id, {});
  }, []);

  const handleApiRequest = (method, id, data) => {
    apiClient[method](String(id), data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };
  return { response, isLoading, error, handleApiRequest };
};
