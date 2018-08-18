import React from "react";
import Page1298 from "./Page1298";
import HomePage from "./HomePage";

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
  indexRoute: { component: Page1298 },
  childRoutes: [
    {
      path: "/Portfolio-01",
      name: "/Portfolio-01",
      component: Page1298
    },
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },
    {
      path: "*",
      name: "notfound",
      component: Page1298
    }
  ]
};
