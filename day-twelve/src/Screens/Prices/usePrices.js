import { useState, useEffect } from "react";
import { getPrices } from "../../api";

export const usePrices = () => {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    getCoinPrices();
  }, []);
  const getCoinPrices = async () => {
    try {
      const { data: prices } = await getPrices();
      setPrices(prices);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, prices };
};
