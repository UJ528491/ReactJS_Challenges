import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/",
});

export const pageApi = {
  prices: () => api.get("tickers"),
  exchanges: () => api.get("exchanges"),
  coins: () => api.get("coins"),
};
export const coinPageApi = {
  coinDetail: id => api.get(`coins/${id}`),
  coinExchanges: id => api.get(`coins/${id}/exchanges`),
  coinMarkets: id => api.get(`coins/${id}/markets`),
};
