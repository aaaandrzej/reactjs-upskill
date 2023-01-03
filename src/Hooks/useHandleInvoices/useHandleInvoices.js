import { useEffect, useState } from "react";
import axios from "axios";

export const useHandleInvoices = (id = "") => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3001/invoices/",
  });
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  // TODO move handlers to separate hooks
  const handleApiRequestPost = (data) => {
    setIsLoading(true);
    return apiClient
      .post("", data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleApiRequestPut = (id, data) => {
    setIsLoading(true);
    return apiClient
      .put(id, data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleApiRequestDelete = (id) => {
    setIsLoading(true);
    return apiClient
      .delete(id)
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
    handleApiRequestPost,
    handleApiRequestPut,
    handleApiRequestDelete,
  };
};
