import { useState, useEffect } from "react";
import { getCoinExchanges } from "../../api";

export const useCoinExchanges = props => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    getExchanges();
  }, []);
  const getExchanges = async () => {
    const {
      match: {
        params: { id },
      },
    } = props;
    try {
      const { data: exchanges } = await getCoinExchanges(id);
      setExchanges(exchanges);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, exchanges };
};
