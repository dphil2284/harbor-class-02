/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              height: "100px",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px"
            }}
          >
            <span style={{ lineHeight: "35px", fontSize: "33px" }}>
              Hello World +{" "}
            </span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
