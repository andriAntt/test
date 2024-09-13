import { useEffect, useState } from "react";
import { Property } from "../types";
import { getProperties } from "../service";

const useProperty = (filters: Partial<Property> = {}, page = 1, limit = 10) => {
  const [data, setData] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const result = await getProperties(filters, page, limit);
        setData(result.data);
        setTotalPages(result.totalPages);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters, page, limit]);

  return {
    data,
    isLoading,
    hasError,
    totalPages,
  };
};

export default useProperty;