import { useCallback, useState } from "react";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // use callback is necessary because when we use
    // our custom hooks and put them in a useEffect as
    // a dependency, we will create an inifity loop.
    // This happens cause functions are objects in js,
    // and every time a function is recreated, even if
    // contains the same logic, is a new object in the
    // memory and therefore useEffect would treat as a
    // new value, and would re-execute
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};
export default useHttpRequest;
