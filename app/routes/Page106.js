/**
 *
 * Page106
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page106 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Row style={{}}>
          <Column col={4} style={{ backgroundColor: "green" }} mCol={4}>
            <span>Text</span>
          </Column>
          <Column col={4} style={{ backgroundColor: "red" }} mCol={4}>
            <span>Text</span>
          </Column>
          <Column col={4} style={{ backgroundColor: "#4a90e2" }} mCol={4}>
            <span>Text</span>
          </Column>
        </Row>

      </div>
    ); // eslint-disable-line
  }
}

export default Page106;
