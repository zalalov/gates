import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TrafficFlowItem from "./TrafficFlowItem";
import FilterSuccessIcon from '../static/img/filter-success.svg';
import FilterFailIcon from '../static/img/filter-fail.svg';
import FilterNeutralIcon from '../static/img/filter-neutral.svg';
import ClickSuccessIcon from '../static/img/click-success.svg';
import ClickFailIcon from '../static/img/click-fail.svg';
import ClickNeutralIcon from '../static/img/click-neutral.svg';
import CartSuccessIcon from '../static/img/cart-success.svg';
import CartFailIcon from '../static/img/cart-fail.svg';
import CartNeutralIcon from '../static/img/cart-neutral.svg';
import {formatNumber, getPercentDiff, getWeekDay} from "../utils";

class TrafficFlow extends Component {
  render() {
    const searchesHelp = (
      <div>
        Help:&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=Searches">Searches</a>,&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=Pessimisation">Pessimisation</a>
      </div>
    );
    const clicksHelp = (
      <div>
        Help:&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=CTR">CTR</a>,&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=Clicks">Clicks</a>
      </div>
    );
    const bookingsHelp = (
      <div>
        Help:&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=STR">STR</a>,&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=Bookings">Bookings</a>,&nbsp;&nbsp;
        <a href="http://lmgtfy.com/?q=Avg.Check">Avg.Check</a>
      </div>
    );

    const searchesDiffValue = getPercentDiff(this.props.data.searchesPrevious, this.props.data.searchesCurrent);
    let searchesIcon = FilterNeutralIcon;

    if (searchesDiffValue) {
      searchesIcon = searchesDiffValue > 0 ? FilterSuccessIcon : FilterFailIcon;
    }

    const clicksDiffValue = getPercentDiff(this.props.data.clicksPrevious, this.props.data.clicksCurrent);
    let clicksIcon = ClickNeutralIcon;

    if (clicksDiffValue) {
      clicksIcon = clicksDiffValue > 0 ? ClickSuccessIcon : ClickFailIcon;
    }

    const bookingsDiffValue = getPercentDiff(this.props.data.bookingsPrevious, this.props.data.bookingsCurrent);
    let bookingsIcon = CartNeutralIcon;

    if (bookingsDiffValue) {
      bookingsIcon = bookingsDiffValue > 0 ? CartSuccessIcon: CartFailIcon;
    }

    return (
      <div className="flex traffic-flow">
        <TrafficFlowItem iconSrc={searchesIcon}
                         flowArrow={true}
                         percentDiff={searchesDiffValue}
                         name="Searches"
                         currentValue={formatNumber(this.props.data.searchesCurrent)}
                         currentDateTitle="Yesterday"
                         prevValue={formatNumber(this.props.data.searchesPrevious)}
                         prevDateTitle={`Last ${getWeekDay()}`}
                         details={[
                           `Mobile Traffic: ${formatNumber(this.props.data.mobile, '%')}`,
                           `Web Traffic: ${formatNumber(this.props.data.web, '%')}`
                         ]}
                         description={
                           `You get ${formatNumber(this.props.data.mobile, '%')}
                           mobile and ${formatNumber(this.props.data.web, '%')} web traffic appropriately.`}
                         help={searchesHelp}
        />
        <TrafficFlowItem iconSrc={clicksIcon}
                         flowArrow={true}
                         percentDiff={clicksDiffValue}
                         name="Clicks"
                         currentValue={formatNumber(this.props.data.clicksCurrent)}
                         currentDateTitle="Yesterday"
                         prevValue={formatNumber(this.props.data.clicksPrevious)}
                         prevDateTitle={`Last ${getWeekDay()}`}
                         details={[`CTR: ${formatNumber(this.props.data.str, '%')}`]}
                         description="Conversion from searches to clicks on all devices."
                         help={clicksHelp}
        />
        <TrafficFlowItem iconSrc={bookingsIcon}
                         flowArrow={false}
                         percentDiff={bookingsDiffValue}
                         name="Bookings"
                         currentValue={formatNumber(this.props.data.bookingsCurrent)}
                         currentDateTitle="Yesterday"
                         prevValue={formatNumber(this.props.data.bookingsPrevious)}
                         prevDateTitle={`Last ${getWeekDay()}`}
                         details={[
                           `STR: ${formatNumber(this.props.data.str, '%')}`,
                           `Avg. Check: ${formatNumber(this.props.data.averagePrice)}`
                         ]}
                         description="Conversion from clicks to bookings on all devices."
                         help={bookingsHelp}
        />
      </div>
    );
  }
}

TrafficFlow.propTypes = {
  data: PropTypes.object.isRequired
};

export default TrafficFlow;