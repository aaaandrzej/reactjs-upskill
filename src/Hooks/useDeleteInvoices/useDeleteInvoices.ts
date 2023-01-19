import { AxiosError } from "axios";
import { useState } from "react";
import { apiClient } from "../apiClient/apiClient";
import { APIResponse } from "../useGetInvoices/useGetInvoices";

export const useDeleteInvoices = () => {
  const [response, setResponse] = useState([] as APIResponse[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as AxiosError);

  const handleApiRequestDelete = (id: string) => {
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
