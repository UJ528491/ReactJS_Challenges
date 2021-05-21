import { useState, useEffect } from "react";
import { getCoins } from "../../api";

export const useCoins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState(null);
  useEffect(() => {
    getCoinsData();
  }, []);
  const getCoinsData = async () => {
    try {
      const { data: coins } = await getCoins();
      setCoins(coins);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, coins };
};
