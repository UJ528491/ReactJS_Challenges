import React from "react";
import CoinsIdApi from "../../api";
import CoinIdPresenter from "./CoinIDPresenter";
// id, description, rank, open_source, org_structure

export default class coinId extends React.Component {
  state = {
    id: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const id = this.props;
      console.log(id);
    } catch {
      this.setState({
        error: "Can't find information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { id, error, loading } = this.state;
    console.log(this.state);
    return <CoinIdPresenter id={id} error={error} loading={loading} />;
  }
}
