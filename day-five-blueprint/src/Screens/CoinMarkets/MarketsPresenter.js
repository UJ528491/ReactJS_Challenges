import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Market from "../../Components/Market";

const MarketsPresenter = ({ loading, markets }) => {
  if (!loading) {
    return (
      <div>
        {markets
          .filter(item => item.market_url)
          .map((item, index) => (
            <Market
              key={`${item.exchange_name}-${index}`}
              url={item.market_url}
              name={item.exchange_name}
            />
          ))}
      </div>
    );
  }
  return <Loader />;
};

MarketsPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MarketsPresenter;
