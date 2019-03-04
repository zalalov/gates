import React, {Component} from 'react';


class Legend extends Component {
  renderPart(key, text, color) {
    return (
      <div className="flex legend-part bold">
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
        {this.props.parts.map(part => this.renderPart('123123', part.text, part.color))}
      </div>
    );
  }
}

export default Legend;