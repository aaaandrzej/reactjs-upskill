import { useState } from "react";
import { apiClient } from "../apiClient/apiClient";

export const useModifyInvoices = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return {
    response,
    isLoading,
    error,
    handleApiRequestPost,
    handleApiRequestPut,
  };
};
