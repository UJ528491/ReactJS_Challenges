import React from "react";
import ExchangesPresenter from "./ExchangesPresenter";
import { pageApi } from "../../api";

export default class exchangesContainer extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data: exchanges } = await pageApi.exchanges();
      this.setState({
        exchanges
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
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangesPresenter
        exchanges={exchanges}
        error={error}
        loading={loading}
      />
    );
  }
}
