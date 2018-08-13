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
              backgroundColor: "#fcecd7",
              borderRadius: "4px",
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px"
            }}
          >
            <span
              style={{
                lineHeight: "35px",
                backgroundColor: "#ffffff",
                color: "#4a90e2",
                fontSize: "33px"
              }}
            >
              Hello World + [dphil2284]
            </span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
