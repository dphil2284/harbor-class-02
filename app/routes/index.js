import React from "react";
import HomePage from "./HomePage";
import Page6 from "./Page6";
import Page913 from "./Page913";

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
      path: "/harbor-class2",
      name: "/harbor-class2",
      component: Page913
    },
    {
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
