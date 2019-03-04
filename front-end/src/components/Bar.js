import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Bar extends Component {
  renderItem(key, value, color) {
    let styles = {
      width: `${value}%`,
      backgroundColor: color
    };

    return (
      <div key={key} className="bar-part" style={styles}>&nbsp;</div>
    );
  }

  render() {
    return (
      <div>
        <div className="flex bar">
          {this.props.items.map((part, index) => this.renderItem(index, part.value, part.color))}
        </div>
      </div>
    );
  }
}

Bar.propTypes = {
  items: PropTypes.array.isRequired
};

export default Bar;