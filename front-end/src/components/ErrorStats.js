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

  render() {
    return (
      <div className="flex error-stats">
        <PercentStats items={[
          {value: 'Errors: 0.12%', additional: 'Average: 0.11%'},
          {value: 'Zeroes: 5.12%', additional: 'Average: 0.11%'},
          {value: 'Timeouts: 0.12%', additional: 'Average: 0.11%'}
        ]} />

        <Bar parts={[
          {value: 15, color: ErrorStats.COLORS[0]},
          {value: 40, color: ErrorStats.COLORS[1]},
          {value: 35, color: ErrorStats.COLORS[2]},
          {value: 10, color: ErrorStats.COLORS[3]},
        ]}/>

        <Legend parts={[
          {text: "Error 500: 1 256", color: ErrorStats.COLORS[0]},
          {text: "Error 501: 800", color: ErrorStats.COLORS[1]},
          {text: "Error 502: 650", color: ErrorStats.COLORS[2]},
          {text: "Other: 330", color: ErrorStats.COLORS[3]},
        ]} />
      </div>
    );
  }
}

export default ErrorStats;