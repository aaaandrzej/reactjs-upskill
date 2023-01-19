import { useEffect, useState } from "react";
import { apiClient } from "../apiClient/apiClient";
import { AxiosError } from "axios";

export interface APIResponse {
  number: string;
  amount: number;
  recipentName: string;
  recipentAddress: string;
  senderName: string;
  senderAddress: string;
  date: Date;
  isPaid: boolean;
  id: number;
}

export const useGetInvoices = (id: string = "") => {
  const [response, setResponse] = useState({} as APIResponse);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as AxiosError);

  useEffect(() => {
    handleApiRequestGet();
  }, []);

  const handleApiRequestGet = () => {
    setIsLoading(true);
    return apiClient
      .get(id)
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  };

  return {
    response,
    isLoading,
    error,
    handleApiRequestGet,
  };
};
