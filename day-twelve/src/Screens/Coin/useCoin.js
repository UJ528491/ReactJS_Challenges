import { useState, useEffect } from "react";
import { getCoinDetail } from "../../api";

export const useCoin = props => {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState(null);
  useEffect(() => {
    getCoin();
  }, []);
  const getCoin = async () => {
    const {
      match: {
        params: { id },
      },
    } = props;
    try {
      const { data: coin } = await getCoinDetail(id);
      setCoin(coin);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, coin };
};
