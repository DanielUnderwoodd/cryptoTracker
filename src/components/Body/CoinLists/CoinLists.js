import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Coin } from "../../LazyConfig/Lazy";
import "./style.css";
export default class CoinLists extends Component {
  constructor() {
    super();
    this.state = {
      List: [],
      data: [],
    };
  }

  async listMaker() {
    let { data } = this.props;
    let filterData = await data.filter((coin) => coin !== "usdt");
    const list = filterData.map((coin, index) => {
      return <Coin coin={coin} key={index} />;
    });
    this.setState((prevState) => ({
      ...prevState,
      List: list,
    }));
  }
  componentDidMount() {
    this.listMaker();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.listMaker();
    }
  }

  render() {
    return (
      <div className="coins-list">
        <Row
          sm="auto"
          className="  text-center align-items-center justify-content-center "
        >
          {this.state.List}
        </Row>
      </div>
    );
  }
}
