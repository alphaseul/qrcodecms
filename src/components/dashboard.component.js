import React, { Component } from "react";
import "./style/dashboard.css";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="card card-dashboard-one container">
        <div className="card-header">
          <div>
            <h6 className="card-title">Website Audience Metrics</h6>
            <p className="card-text">
              Audience to which the users belonged while on the current date
              range.
            </p>
          </div>
          <div className="btn-group">
            <button className="btn active">Day</button>
            <button className="btn">Week</button>
            <button className="btn">Month</button>
          </div>
        </div>
        <div className="card-body">
          <div className="card-body-top">
            <div>
              <label className="mg-b-0">Users</label>
              <h2>13,956</h2>
            </div>
            <div>
              <label className="mg-b-0">Bounce Rate</label>
              <h2>33.50%</h2>
            </div>
            <div>
              <label className="mg-b-0">Page Views</label>
              <h2>83,123</h2>
            </div>
            <div>
              <label className="mg-b-0">Sessions</label>
              <h2>16,869</h2>
            </div>
          </div>
          <div className="flot-chart-wrapper">
            <div id="flotChart" className="flot-chart"></div>
          </div>
        </div>
        <div className="col-lg-5 mg-t-20 mg-lg-t-0">
          <div className="row row-sm">
            <div className="col-sm-6">
              <div className="card card-dashboard-two">
                <div className="card-header">
                  <h6>
                    33.50%{" "}
                    <i className="icon ion-md-trending-up tx-success"></i>{" "}
                    <small>18.02%</small>
                  </h6>
                  <p>Bounce Rate</p>
                </div>
                <div className="card-body">
                  <div className="chart-wrapper">
                    <div id="flotChart1" className="flot-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mg-t-20 mg-sm-t-0">
              <div className="card card-dashboard-two">
                <div className="card-header">
                  <h6>
                    86k <i className="icon ion-md-trending-down tx-danger"></i>{" "}
                    <small>0.86%</small>
                  </h6>
                  <p>Total Users</p>
                </div>
                <div className="card-body">
                  <div className="chart-wrapper">
                    <div id="flotChart2" className="flot-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mg-t-20">
              <div className="card card-dashboard-three">
                <div className="card-header">
                  <p>All Sessions</p>
                  <h6>
                    16,869{" "}
                    <small className="tx-success">
                      <i className="icon ion-md-arrow-up"></i> 2.87%
                    </small>
                  </h6>
                  <small>
                    The total number of sessions within the date range. It is
                    the period time a user is actively engaged with your
                    website, page or app, etc.
                  </small>
                </div>
                <div className="card-body">
                  <div className="chart">
                    <canvas id="chartBar5"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
