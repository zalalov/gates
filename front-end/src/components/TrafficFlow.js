import React, {Component} from 'react';
import TrafficFlowItem from "./TrafficFlowItem";
import FilterIcon from '../static/img/filter.svg';
import ClickIcon from '../static/img/click.svg';
import CartIcon from '../static/img/cart.svg';

class TrafficFlow extends Component {
  render() {
    const searchesHelp = (
      <div>
        Help: <a href="#">Searches</a>, <a href="#">Pessimisation</a>
      </div>
    );
    const clicksHelp = (
      <div>
        Help: <a href="#">CTR</a>, <a href="#">Clicks</a>
      </div>
    );
    const bookingsHelp = (
      <div>
        Help: <a href="#">CTR</a>, <a href="#">Clicks</a>
      </div>
    );

    return (
      <div class="flex traffic-flow">
        <TrafficFlowItem iconSrc={FilterIcon}
                         flowArrow={true}
                         name="Searches"
                         currentValue="29 380"
                         currentDateTitle="Yesterday"
                         prevValue="27 985"
                         prevDateTitle="Last Friday"
                         details={['Mobile Traffic: 100%', 'Web Traffic: 100%']}
                         description="You get 100% traffic on mobile and desktop devices."
                         help={searchesHelp}
        />
        <TrafficFlowItem iconSrc={ClickIcon}
                         flowArrow={true}
                         name="Clicks"
                         currentValue="243"
                         currentDateTitle="Yesterday"
                         prevValue="280"
                         prevDateTitle="Last Friday"
                         details={['CTR: 0.04%']}
                         description="Conversion from searches to clicks on all devices."
                         help={clicksHelp}
        />
        <TrafficFlowItem iconSrc={CartIcon}
                         flowArrow={false}
                         name="Bookings"
                         currentValue="24"
                         currentDateTitle="Yesterday"
                         prevValue="24"
                         prevDateTitle="Last Friday"
                         details={['STR: 6.2%', 'Avg. Check: 8 903']}
                         description="Conversion from clicks to bookings on all devices."
                         help={bookingsHelp}
        />
      </div>
    );
  }
}

export default TrafficFlow;