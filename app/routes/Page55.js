/**
 *
 * Page55
 *
 */

import React, { Component } from "react";

import { Row, Column } from "modules/Layout";

class Page55 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div>
          <div
            style={{
              height: "100%",
              backgroundColor: "#ffffff",
              margin: "60px",
              position: "relative",
              paddingBottom: "50px"
            }}
          >
            <Row style={{ backgroundColor: "#ffffff", padding: "33px" }}>
              <Column
                col={2}
                style={{ backgroundColor: "#9b9b9b", height: "30px" }}
                mCol={2}
              />
              <Column
                col={3}
                style={{ backgroundColor: "#ffffff", height: "30px" }}
                mCol={3}
              />
              <Column
                col={2}
                style={{ backgroundColor: "#9b9b9b", height: "30px" }}
                mCol={2}
              />
              <Column
                col={3}
                style={{ backgroundColor: "#ffffff", height: "30px" }}
                mCol={3}
              />
              <Column
                col={2}
                style={{ backgroundColor: "#9b9b9b", height: "30px" }}
                mCol={2}
              />
            </Row>
            <div style={{ position: "relative", height: "44px" }}>
              <div
                style={{
                  height: "44px",
                  backgroundColor: "#4a4a4a",
                  width: "30%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  left: "50%"
                }}
              />
            </div>
            <div>
              <div
                style={{
                  height: "300px",
                  backgroundColor: "#ff8f81",
                  position: "relative",
                  marginLeft: "33px",
                  marginRight: "33px",
                  marginTop: "30px",
                  marginBottom: "30px"
                }}
              />
            </div>
            <div style={{ position: "relative", height: "44px" }}>
              <div
                style={{
                  height: "44px",
                  backgroundColor: "#4a4a4a",
                  width: "30%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  left: "50%"
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                height: "25px",
                marginTop: "15px"
              }}
            >
              <div
                style={{
                  height: "29px",
                  backgroundColor: "#929292",
                  width: "21%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  left: "50%"
                }}
              />
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default Page55;
