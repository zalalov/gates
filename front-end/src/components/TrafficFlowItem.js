import React, {Component} from 'react';
import FlowArrowImg from '../static/img/flow-arrow.svg';

class TrafficFlowItem extends Component {
  render() {
    return (
      <div className="flex traffic-flow-item">
        <div className="flex flow">
          <img src={this.props.iconSrc} />
          {this.props.flowArrow && <img src={FlowArrowImg} />}
        </div>
        <div className="flex info">
          <div className="flex history">
            <div className="name bold">{this.props.name}</div>
            <div className="current">
              <span className="value">{this.props.currentValue}</span>
              <span className="date">{this.props.currentDateTitle}</span>
            </div>
            <div className="previous gray-font">
              <span className="value">{this.props.prevValue}</span>
              <span className="date">{this.props.prevDateTitle}</span>
            </div>
          </div>
          <div className="flex details">
            <div className="info flex bold">
              {this.props.details.map(detail => <span key="123123">{detail}</span>)}
            </div>
            <div className="description gray-font">{this.props.description}</div>
            <div className="help">{this.props.help}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrafficFlowItem;