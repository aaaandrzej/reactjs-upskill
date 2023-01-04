import { useState } from "react";
import { apiClient } from "../apiClient/apiClient";

export const useDeleteInvoices = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    handleApiRequestDelete,
  };
};
