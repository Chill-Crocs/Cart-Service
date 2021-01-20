import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ShippingPolicies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.getReturnTypes = this.getReturnTypes.bind(this);
  }

  getReturnTypes() {
    const { shopPolicy } = this.props;
    const { noReturnTypes } = shopPolicy;
    let i = 0;
    function mapFunc(value) {
      i += 1;
      return (
        <li key={i}>
          {value}
        </li>
      );
    }
    const typesView = noReturnTypes.map(mapFunc);
    return (
      <ul>
        {typesView}
      </ul>
    );
  }

  getExchanges() {
    const { shopPolicy } = this.props;
    const { returns, noReturnTypes } = shopPolicy;
    if (returns) {
      return (
        <div>
          Returns & Exchanges
          <br />
          I gladly accept exchanges and cancellations
          <br />
          Contact me within: 14 days of delivery
          Ship items back within: 30 days of delivery
          Request a cancellation within: 1 hour of purchase
          <br />
          I don't accept returns
          <br />
          But please contact me if you have any problems with your order.
          <br />
          The following items can't be returned or exchanged
          <br />
          Because of the nature of these items, unless they arrive damaged or defective,
          I can't accept returns for:
          <br />
          {this.getReturnTypes()}
          <br />
          Conditions of return
          <br />
          Buyers are responsible for return shipping costs. If the item is not returned
          in its original condition, the buyer is responsible for any loss in value.
        </div>
      );
    }
  }

  render() {
    const { shopPolicy, name, showModal, modalClass } = this.props;
    const { lastUpdated } = shopPolicy;
    return (
      <div id="policy-modal">
        <button type="button" id="policy-button" onClick={showModal}>
          View shop policies
        </button>
        <div className={modalClass}>
          <div id="modal-close-button">
            <button type="button" className="close-button" onClick={showModal}>
              <span className="etsy-icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 0 1.8 1.8" aria-hidden="true" focusable="false">
                  <path
                    d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="modal-container">
            <div className="modal-content">
              {name}
              <br />
              Last updated on
              <span> </span>
              {moment(lastUpdated).format('MMM D YY')}
              <br />
              {this.getExchanges()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingPolicies;
