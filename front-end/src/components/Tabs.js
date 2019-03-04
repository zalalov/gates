import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="flex tabs">
        <div className="flex tab-btn">
          <span>Last hour</span>
        </div>
        <div className="flex tab-btn">Today</div>
        <div className="flex tab-btn active">Yesterday</div>
        <div className="flex tab-btn">Last 3 days</div>
      </div>
    );
  }
}