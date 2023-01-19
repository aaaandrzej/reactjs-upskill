import { AxiosError } from "axios";
import { useState } from "react";
import { PredefinedFieldsProps } from "../../Components/InvoiceForm/InvoiceForm";
import { apiClient } from "../apiClient/apiClient";
import { APIResponse } from "../useGetInvoices/useGetInvoices";

export const useModifyInvoices = () => {
  const [response, setResponse] = useState({} as APIResponse);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as AxiosError);

  const handleApiRequestPost = (data: PredefinedFieldsProps) => {
    setIsLoading(true);
    return apiClient
      .post("", data)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  const handleApiRequestPut = (id: string, data: PredefinedFieldsProps) => {
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
