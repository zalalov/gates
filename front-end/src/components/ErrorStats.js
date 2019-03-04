import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';
import Legend from './Legend';
import PercentStats from './PercentStats';
import {formatNumber} from "../utils";

class ErrorStats extends Component {
  static COLORS = [
    '#FFCC00',
    '#5856D5',
    '#2196F3',
    '#A0B0B9'
  ];
  static errorCountLimit = 4;

  noData() {
    return !(this.getPercentItems().length && this.getBarItems().length && this.getLegendItems().length);
  }

  getPercentItems() {
    if (!this.props.data.errors_percent && !this.props.data.zeroes_percent && !this.props.data.timeout_percent) {
      return [];
    }

    const {errors_percent, zeroes_percent, timeout_percent} = this.props.data;

    return [
      {
        value: `Errors: ${formatNumber(errors_percent, '%')}`,
        // Have no idea what average means, guys, will keep it as it as in template
        additional: 'Average: 0.11%'
      },
      {
        value: `Zeroes: ${formatNumber(zeroes_percent, '%')}`,
        // Have no idea what average means, guys, will keep it as it as in template
        additional: 'Average: 0.11%'
      },
      {
        value: `Timeouts: ${formatNumber(timeout_percent, '%')}`,
        // Have no idea what average means, guys, will keep it as it as in template
        additional: 'Average: 0.11%'
      }
    ];
  }

  getBarItems() {
    const totalErrorsCount = this.props.data.errors.reduce((acc, error) => acc + error.count, 0);
    // TODO: possible improvement, increase number of colors above and slice more errors
    return this.props.data.errors.slice(0, ErrorStats.errorCountLimit).map((error, index) => {
      return {
        value: error.count / totalErrorsCount * 100,
        color: ErrorStats.COLORS[index]
      };
    });
  }

  getLegendItems() {
    return this.props.data.errors.slice(0, ErrorStats.errorCountLimit).map((error, index) => {
      return {
        text: error.code ? `Error ${error.code}: ${formatNumber(error.count)}` : `Other: ${formatNumber(error.count)}`,
        color: ErrorStats.COLORS[index]
      }
    });
  }

  render() {
    const percentItems = this.getPercentItems();
    const barItems = this.getBarItems();
    const legendItems = this.getLegendItems();

    return (
      !this.noData() &&
      <div className="flex error-stats">
        {!!percentItems.length && <PercentStats items={this.getPercentItems()}/>}
        {!!barItems.length && <Bar items={this.getBarItems()}/>}
        {!!legendItems.length && <Legend items={this.getLegendItems()}/>}
      </div>
    );
  }
}

ErrorStats.propTypes = {
  data: PropTypes.object.isRequired
};

export default ErrorStats;