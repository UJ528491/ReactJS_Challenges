import React, { Component } from "react";
import CoinPresenter from "./CoinPresenter";
import { coinPageApi } from "../../api";

export default class CoinContainer extends Component {
  state = {
    loading: true,
    coin: null,
  };
  getCoin = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data: coin } = await coinPageApi.coinDetail(id);
      this.setState({ coin });
    } catch {
      this.setState({
        error: "Can't find information.",
      });
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.getCoin();
  }
  render() {
    return <CoinPresenter {...this.state} />;
  }
}
