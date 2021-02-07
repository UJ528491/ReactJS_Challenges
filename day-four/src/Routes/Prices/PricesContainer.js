import React from "react";
import PricesPresenter from "./PricesPresenter";
import { CoinExchangeApi } from "../../api";

export default class pricesContainer extends React.Component {
  state = {
    prices: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: prices } = await CoinExchangeApi.prices();
      this.setState({
        prices,
      });
    } catch {
      this.setState({
        error: "Can't find information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { prices, error, loading } = this.state;
    return <PricesPresenter prices={prices} error={error} loading={loading} />;
  }
}
