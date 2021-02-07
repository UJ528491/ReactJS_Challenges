import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { CoinExchangeApi } from "../../api";

export default class coinsContainer extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: coins } = await CoinExchangeApi.coins();
      this.setState({
        coins,
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
    const { coins, error, loading } = this.state;
    return <CoinsPresenter coins={coins} error={error} loading={loading} />;
  }
}
