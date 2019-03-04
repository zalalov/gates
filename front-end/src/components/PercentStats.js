import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PercentStats extends Component {
  renderItem(key, value, additional) {
    return (
      <div key={key} className="flex percentage-item">
        <div className="flex status success">
          <span className="circle">&nbsp;</span>
        </div>
        <div className="info">
          <div className="value bold">{value}</div>
          <div className="additional gray-font">{additional}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex percentage">
        {this.props.items.map((item, index) => this.renderItem(index, item.value, item.additional))}
      </div>
    );
  }
}

PercentStats.propTypes = {
  items: PropTypes.array.isRequired
};

export default PercentStats;