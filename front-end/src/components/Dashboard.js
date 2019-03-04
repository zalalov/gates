import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ErrorStats from "./ErrorStats";
import TrafficFlow from "./TrafficFlow";
import { BeatLoader } from 'react-spinners';

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      loaded: false
    };
  }

  componentWillMount() {}

  renderDashboard() {
    if (!this.state.loaded) {
      return <BeatLoader/>;
    }

    return (
      <div className="dashboard">
        <div className="title bold">
          Main metrics
        </div>

        <Tabs>
          <TabList className="tabs">
            <Tab>Last hour</Tab>
            <Tab>Today</Tab>
            <Tab>Yesterday</Tab>
            <Tab>Last 3 days</Tab>
          </TabList>

          <TabPanel>
            <ErrorStats />
          </TabPanel>
          <TabPanel>
            <ErrorStats />
          </TabPanel>
          <TabPanel>
            <ErrorStats />
          </TabPanel>
          <TabPanel>
            <ErrorStats />
          </TabPanel>
        </Tabs>

        <TrafficFlow />
      </div>
    );
  }

  render() {
    return this.renderDashboard();
  }
}

export default Dashboard;