import { useState, useEffect } from "react";
import { getExchanges } from "../../api";

export const useExchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    getCoinExchanges();
  }, []);
  const getCoinExchanges = async () => {
    try {
      const { data: exchanges } = await getExchanges();
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, exchanges };
};
