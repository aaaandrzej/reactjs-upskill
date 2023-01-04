import { useState } from "react";
import { apiClient } from "../apiClient/apiClient";

export const useModifyInvoices = () => {
  const [response, setResponse] = useState([]);
  // TODO Is that ok to set loading to null here? otherwise it hangs the ui because of loading === true
  const [isLoading, setIsLoading] = useState(null);
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
