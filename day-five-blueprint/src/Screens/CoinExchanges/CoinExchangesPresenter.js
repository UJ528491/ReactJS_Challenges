import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import CoinExchanges from "../../Components/CoinExchange";

const CoinExchangesPresenter = ({ loading, coinExchanges }) => {
  if (!loading) {
    return (
      <div>
        {coinExchanges.map((item, index) => (
          <CoinExchanges
            key={`${item.id}-${index}`}
            fiats={item.fiats}
            name={item.name}
          />
        ))}
      </div>
    );
  }
  return <Loader />;
};

CoinExchangesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  coinExchanges: PropTypes.arrayOf(
    PropTypes.shape({
      fiats: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          symbol: PropTypes.string,
        })
      ),
    })
  ),
};

export default CoinExchangesPresenter;
