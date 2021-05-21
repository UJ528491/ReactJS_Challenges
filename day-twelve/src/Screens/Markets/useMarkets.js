import { useState, useEffect } from "react";
import { getCoinMarkets } from "../../api";

export const useMarkets = props => {
  const [loading, setLoading] = useState(true);
  const [markets, setMarkets] = useState([]);
  useEffect(() => {
    getMarkets();
  }, []);
  const getMarkets = async () => {
    const {
      match: {
        params: { id },
      },
    } = props;
    try {
      const { data: markets } = await getCoinMarkets(id);
      setMarkets(markets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return { loading, markets };
};

// export default class extends React.Component {
//   state = {
//     loading: true,
//     markets: []
//   };
//   getMarkets = async () => {
//     const {
//       match: {
//         params: { id }
//       }
//     } = this.props;
//     try {
//       const { data: markets } = await getCoinMarkets(id);
//       this.setState({ markets });
//     } catch (e) {
//       console.log(e);
//     } finally {
//       this.setState({ loading: false });
//     }
//   };
//   componentDidMount() {
//     this.getMarkets();
//   }
//   render() {
//     return <MarketsPresenter {...this.state} />;
//   }
// }
