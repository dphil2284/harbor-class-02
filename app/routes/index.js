import React from "react";
import Page152 from "./Page152";
import Page1298 from "./Page1298";
import Page55 from "./Page55";
import HomePage from "./HomePage";
import Page6 from "./Page6";
import Page913 from "./Page913";
import Page106 from "./Page106";

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
  indexRoute: { component: Page152 },
  childRoutes: [
    {
      path: "/class-03",
      name: "/class-03",
      component: Page152
    },
    {
      path: "/Portfolio-01",
      name: "/Portfolio-01",
      component: Page1298
    },
    {
      path: "/class-04",
      name: "/class-04",
      component: Page55
    },
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
      path: "/col",
      name: "/col",
      component: Page106
    },
    {
      path: "*",
      name: "notfound",
      component: Page152
    }
  ]
};
