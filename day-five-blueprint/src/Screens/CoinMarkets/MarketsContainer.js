import React, { Component } from "react";
import MarketsPresenter from "./MarketsPresenter";
import { coinPageApi } from "../../api";

export default class MarketsContainer extends Component {
  state = {
    loading: true,
    markets: [],
  };

  getMarkets = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      const { data } = await coinPageApi.coinMarkets(id);
      this.setState({ markets: data });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getMarkets();
  }
  render() {
    return <MarketsPresenter {...this.state} />;
  }
}
