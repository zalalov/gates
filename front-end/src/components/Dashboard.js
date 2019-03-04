import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import ErrorStats from "./ErrorStats";
import TrafficFlow from "./TrafficFlow";
import {BeatLoader} from 'react-spinners';
import {API_URL} from "../config";

class Dashboard extends Component {
  constructor(props) {
    super();

    this.state = {
      loaded: false,
      stats: {}
    };

    this.loadDashboardData = this.loadDashboardData.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
    this.getData = this.getData.bind(this);
    this.getLastHourData = this.getLastHourData.bind(this);
    this.getTodayData = this.getTodayData.bind(this);
    this.getYesterdayData = this.getYesterdayData.bind(this);
    this.getLastThreeDaysData = this.getLastThreeDaysData.bind(this);
  }

  componentWillMount() {
    this.loadDashboardData();
  }

  parseResponse(response) {
    if (!response['data'].length) {
      console.error('Server data is invalid.');
    }

    this.setState({loaded: true, stats: response}, () => {console.log(this.getTodayData())});
  }

  errorHandler(err) {
    console.log(err);
  }

  loadDashboardData() {
    fetch(`${API_URL}/dashboard`, {
      mode: 'cors',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(this.parseResponse)
      .catch(this.errorHandler);
  }

  getData(postfix) {
    if (!this.state.stats || (this.state.stats && !this.state.stats[`errors${postfix}`])) {
      return null;
    }

    return {
      errors: this.state.stats[`errors${postfix}`],
      errors_percent: this.state.stats['data'][0][`errors${postfix}`],
      zeroes_percent: this.state.stats['data'][0][`zeroes${postfix}`],
      timeout_percent: this.state.stats['data'][0][`zeroes${postfix}`],
      searchesCurrent: this.state.stats['data'][0][`searches_current${postfix}`],
      searchesPrevious: this.state.stats['data'][0][`searches_previous${postfix}`],
      clicksCurrent: this.state.stats['data'][0][`clicks_current${postfix}`],
      clicksPrevious: this.state.stats['data'][0][`clicks_previous${postfix}`],
      ctr: this.state.stats['data'][0][`ctr${postfix}`],
      bookingsCurrent: this.state.stats['data'][0][`bookings_current${postfix}`],
      bookingsPrevious: this.state.stats['data'][0][`bookings_previous${postfix}`],
      averagePrice: this.state.stats['data'][0][`avg_price${postfix}`],
      str: this.state.stats['data'][0][`str${postfix}`],
      mobile: this.state.stats['data'][0]['mobile_pessimizer'],
      web: this.state.stats['data'][0]['web_pessimizer'],
    };
  }

  getLastHourData() {
    return this.getData('_last_hour');
  }

  getYesterdayData() {
    return this.getData('_yesterday');
  }

  getTodayData() {
    return this.getData('_today');
  }

  getLastThreeDaysData() {
    return this.getData('_last_3days');
  }

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
            <Tab disabled={!this.getLastHourData()}>Last hour</Tab>
            <Tab disabled={!this.getTodayData() }>Today</Tab>
            <Tab disabled={!this.getYesterdayData()}>Yesterday</Tab>
            <Tab disabled={!this.getLastThreeDaysData()}>Last 3 days</Tab>
          </TabList>

          <TabPanel>
            <ErrorStats data={this.getLastHourData()}/>
            <TrafficFlow data={this.getLastHourData()}/>
          </TabPanel>
          <TabPanel>
            <ErrorStats data={this.getTodayData()}/>
            <TrafficFlow data={this.getTodayData()}/>
          </TabPanel>
          <TabPanel>
            <ErrorStats data={this.getYesterdayData()}/>
            <TrafficFlow data={this.getYesterdayData()}/>
          </TabPanel>
          <TabPanel>
            <ErrorStats data={this.getLastThreeDaysData()}/>
            <TrafficFlow data={this.getLastThreeDaysData()}/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }

  render() {
    return this.renderDashboard();
  }
}

export default Dashboard;