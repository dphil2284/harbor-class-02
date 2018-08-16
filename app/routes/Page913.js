/**
 *
 * Page913
 *
 */

import React, { Component } from "react";

import { Row } from "modules/Layout";
import { Center } from "modules/CSSPaterns";

class Page913 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div><Row /></div>

        <Center axis="x">
          <div
            style={{
              display: "inline-block",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fcecd7",
              borderRadius: "4px"
            }}
          >
            <span>Empty div</span>
          </div>
        </Center>

      </div>
    ); // eslint-disable-line
  }
}

export default Page913;
