import React from "react";
import HomePage from "./HomePage";
import Page6 from "./Page6";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },
    {
      path: "/work",
      name: "/work",
      component: Page6
    },
    {
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
