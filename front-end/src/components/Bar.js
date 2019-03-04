import React, { Component } from 'react';


class Bar extends Component {
  renderPart(key, value, color) {
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
          {this.props.parts.map(part => this.renderPart('123123', part.value, part.color))}
        </div>
      </div>
    );
  }
}

export default Bar;