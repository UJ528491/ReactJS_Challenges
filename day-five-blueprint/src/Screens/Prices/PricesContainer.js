import React from "react";
import PricesPresenter from "./PricesPresenter";
import { pageApi } from "../../api";

export default class pricesContainer extends React.Component {
  state = {
    prices: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: prices } = await pageApi.prices();
      this.setState({
        prices
      });
    } catch {
      this.setState({
        error: "Can't find information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { prices, error, loading } = this.state;
    return <PricesPresenter prices={prices} error={error} loading={loading} />;
  }
}
