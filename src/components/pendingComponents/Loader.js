import React, { Component } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: red;
`;

export default class Loading extends Component {
  render() {
    return (
      <div>
        <BeatLoader css={override} size={50} color={"#ebebeb"} loading={true} />
      </div>
    );
  }
}
