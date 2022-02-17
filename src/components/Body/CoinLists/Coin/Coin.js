import React, { Component } from "react";
import { dataEntry } from "./Store";
import { Link } from "react-router-dom";

import { Col, Card } from "react-bootstrap";
import Threeline from "../../../Skeleton/Threeline";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./style.css";

export default class Coin extends Component {
  constructor(props) {
    super();
    this.state = {
      price: 0,
      percent: 0,
      dataEntry,
      pathname: "/coin/" + props.coin,
      ws: new WebSocket("wss://stream.binance.com:9443/ws"),
    };
  }

  setSegment(segment, data) {
    let { name, property } = segment;
    let response = new name(data);
    this.setState({
      [property]: response.getData(),
    });
  }
  componentWillUnmount() {
    this.state.ws.close();
    console.log("closing..");
  }

  WebSocket() {
    let { ws } = this.state;
    const msg = {
      method: "SUBSCRIBE",
      params: [
        `${this.props.coin.toLowerCase()}usdt@aggTrade`,
        `${this.props.coin.toLowerCase()}usdt@ticker`,
      ],
      id: 1,
    };

    ws.onopen = function open() {
      console.log("connected");
      ws.send(JSON.stringify(msg));
    };

    ws.onclose = function close() {
      console.log("disconnected");
    };

    ws.onmessage = (message) => {
      var data = JSON.parse(message.data);
      this.state.dataEntry.forEach((segment) => {
        if (data.e === segment.type) {
          this.setSegment(segment, data);
        }
      });
    };
  }

  async componentDidMount() {
    this.WebSocket();
  }
  render() {
    const card = (
      <Col>
        <Card
          border={this.state.percent < 0 ? "danger" : "success"}
          className={
            this.state.percent < 0
              ? "coin-card coin-card-danger"
              : "coin-card coin-card-success"
          }
        >
          <Card.Header>{this.props.coin.toUpperCase()}</Card.Header>
          <Card.Body>
            <Card.Title>{this.state.price}</Card.Title>
            <Card.Title>{this.state.percent + "%"}</Card.Title>
            <Link to={this.state.pathname}>
              {" "}
              <MdOutlineKeyboardArrowRight className="arrow-navigation" />
            </Link>
          </Card.Body>
        </Card>{" "}
        <br />
      </Col>
    );

    return <>{this.state.price ? card : <Threeline />}</>;
  }
}
