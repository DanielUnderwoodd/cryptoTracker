import React, { Component, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CoinLists from "./CoinLists/CoinLists";
import TopBarProgress from "react-topbar-progress-indicator";
import { get } from "../../ActionCreators/Public/api";
import { Container } from "react-bootstrap";
import Chart from "./ChartBody/Chart/Chart";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    TopBarProgress.config({
      barThickness: 6,
      barColors: {
        0: "#FF0000 ",
        "1.0": "#FF0000 ",
      },
    });
  }

  async componentDidMount() {
    let data = await get("global");
    this.setState({
      data,
    });
  }

  render() {
    return (
      <div>
        {" "}
        <Container>
          <Suspense fallback={<TopBarProgress />}>
            <Routes>
              <Route path="/" element={<CoinLists data={this.state.data} />} />
              <Route
                path="/coin/:name"
                element={<Chart data={this.state.data} />}
              />
            </Routes>
          </Suspense>
        </Container>
      </div>
    );
  }
}
