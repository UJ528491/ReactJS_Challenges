import React, { Component } from "react";
import CoinExchangesPresenter from "./CoinExchangesPresenter";
import { coinPageApi } from "../../api";

export default class CoinExchangesContainer extends Component {
  state = {
    loading: true,
    coinExchanges: [],
  };

  getExchanges = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data } = await coinPageApi.coinExchanges(id);
      this.setState({ coinExchanges: data });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getExchanges();
  }
  render() {
    return <CoinExchangesPresenter {...this.state} />;
  }
}
