import React, {Component} from 'react';
import Bar from './Bar';
import Legend from './Legend';
import PercentStats from './PercentStats';

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
        value: errors_percent ? `Errors: ${errors_percent.toFixed(2)}%` : 'Errors: N/A',
        // Have no idea what average means, guys, will keep it as it as in template
        additional: 'Average: 0.11%'
      },
      {
        value: zeroes_percent ? `Zeroes: ${zeroes_percent.toFixed(2)}%` : `Zeroes: N/A`,
        // Have no idea what average means, guys, will keep it as it as in template
        additional: 'Average: 0.11%'
      },
      {
        value: timeout_percent ? `Timeouts: ${timeout_percent.toFixed(2)}%` : 'Timeouts: N/A',
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
        text: error.code ? `Error ${error.code}: ${error.count}` : `Other: ${error.count}`,
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

export default ErrorStats;