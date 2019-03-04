import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Legend extends Component {
  renderItem(key, text, color) {
    return (
      <div key={key} className="flex legend-part bold">
        <div className="flex marker">
          <span style={{backgroundColor: color}}>&nbsp;</span>
        </div>
        <div className="info">{text}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex legend">
        {this.props.items.map((part, index) => this.renderItem(index, part.text, part.color))}
      </div>
    );
  }
}

Legend.propTypes = {
  items: PropTypes.array.isRequired
};

export default Legend;