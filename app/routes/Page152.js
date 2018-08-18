/**
 *
 * Page152
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page152 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div
          style={{
            height: "600px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "20px",
            position: "relative"
          }}
        >
          <Row style={{}}>
            <Column col={3} style={{ backgroundColor: "#c5c5c5" }} mCol={3} />
            <Column col={3} style={{ height: "20px" }} mCol={3}>
              <span> </span>
            </Column>
            <Column
              col={2}
              style={{ backgroundColor: "#c5c5c5", height: "20px" }}
              mCol={2}
            >
              <span> </span>
            </Column>
            <Column
              col={2}
              style={{ backgroundColor: "#ffffff", height: "20px" }}
              mCol={2}
            >
              <span> </span>
            </Column>
            <Column
              col={2}
              style={{ backgroundColor: "#c5c5c5", height: "20px" }}
              mCol={2}
            >
              <span> </span>
            </Column>
          </Row>
          <div>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                height: "30px",
                alignItems: "center",
                backgroundColor: "#5f5f5f",
                marginTop: "17px",
                width: "300px"
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                height: "250px",
                alignItems: "center",
                backgroundColor: "#ff5858",
                marginTop: "17px",
                width: "100%"
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                height: "10px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                marginTop: "12px",
                width: "150px"
              }}
            />
          </div>
          <div>
            <div
              style={{
                display: "inline-block",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                marginTop: "12px",
                width: "24%"
              }}
            />
            <div
              style={{
                display: "inline-block",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                marginTop: "12px",
                width: "24%",
                marginLeft: "11px"
              }}
            />
            <div
              style={{
                display: "inline-block",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                marginTop: "12px",
                width: "24%",
                marginLeft: "11px"
              }}
            />
            <div
              style={{
                display: "inline-block",
                justifyContent: "center",
                height: "100px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                marginTop: "12px",
                width: "24%",
                marginLeft: "11px"
              }}
            />
          </div>
          <div style={{ position: "relative", height: "42px" }}>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                height: "10px",
                alignItems: "center",
                backgroundColor: "#a0a0a0",
                width: "150px",
                position: "absolute",
                right: "0px",
                marginTop: "5px"
              }}
            />
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page152;
