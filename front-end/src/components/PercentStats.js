import React, {Component} from 'react';

class PercentStats extends Component {
  renderItem(key, value, additional) {
    return (
      <div className="flex percentage-item">
        <div className="flex status success">
          <span className="circle"></span>
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
        {this.props.items.map(item => this.renderItem('123123', item.value, item.additional))}
      </div>
    );
  }
}

export default PercentStats;