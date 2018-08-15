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
          <div />
          <div>
            <div
              style={{
                display: "block",
                justifyContent: "center",
                height: "300px",
                alignItems: "center",
                backgroundColor: "#272727",
                borderRadius: "4px",
                width: "300px",
                margin: "30px",
                textAlign: "center"
              }}
            >
              <div />
              <img
                src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p320x320/26731266_103396393805011_6010591048482941004_n.jpg?_nc_cat=0&oh=5bb0dcbabb4f6809855f304dae93ed1b&oe=5C138A28"
                style={{
                  width: "150px",
                  display: "inline-block",
                  margin: "22px"
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  color: "#ffffff",
                  margin: "10px"
                }}
              >
                Hyun Sung Lee
              </span>
              <span style={{ display: "block", color: "#ffffff" }}>안녕하세요</span>
              <a
                href="https://www.facebook.com/profile.php?id=100024039511819"
                style={{
                  fontStyle: "normal",
                  color: "#ffffff",
                  fontSize: "11px"
                }}
              >
                <span style={{ textDecoration: "none", textTransform: "none" }}>
                  facebook/01022842506
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
