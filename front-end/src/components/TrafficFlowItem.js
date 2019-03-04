import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlowArrowImg from '../static/img/flow-arrow.svg';
import {formatNumber} from "../utils";

class TrafficFlowItem extends Component {
  render() {
    return (
      <div className="flex traffic-flow-item">
        <div className="flex flow">
          <img src={this.props.iconSrc}/>
          <div className="flex arrow-flow">
            {this.props.flowArrow && <img className="arrow-flow" src={FlowArrowImg}/>}
          </div>
        </div>
        <div className="flex info">
          <div className="flex history">
            <div className={`flex name bold ${this.props.percentDiff < 0 ? 'fail' : ''}`}>
              {this.props.name}
              {!!this.props.percentDiff && <div className={`diff ${this.props.percentDiff > 0 ? 'success' : 'fail'}`}>
                {this.props.percentDiff > 0 ? formatNumber(this.props.percentDiff, '%', '+') : formatNumber(this.props.percentDiff, '%')}
              </div>}
            </div>
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
            <div className={`info flex bold ${this.props.percentDiff < 0 ? 'fail' : ''}`}>
              {this.props.details.map((detail, index) => <span key={index}>{detail}</span>)}
            </div>
            <div className="description gray-font">{this.props.description}</div>
            <div className="help">{this.props.help}</div>
          </div>
        </div>
      </div>
    )
  }
}

TrafficFlowItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  flowArrow: PropTypes.bool.isRequired,
  percentDiff: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  currentDateTitle: PropTypes.string.isRequired,
  prevValue: PropTypes.string.isRequired,
  prevDateTitle: PropTypes.string.isRequired,
  details: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired
};

export default TrafficFlowItem;