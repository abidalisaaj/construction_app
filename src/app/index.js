import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Switch,
  browserHistory
} from "react-router-dom";

// Common Modules
import { Root } from "./components/Root";

// Page Modules
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Warrenty } from "./components/Warrenty";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { OurRemodelingProcess } from "./components/OurRemodelingProcess";
import { SmallGeneralRepairs } from "./components/SmallGeneralRepairs";
import { ContactUs } from "./components/ContactUs";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/about"} component={AboutUs} />
            <Route path={"/warrenty"} component={Warrenty} />
            <Route path={"/gallery"} component={Gallery} />
            <Route path={"/testinomials"} component={Testimonials} />
            <Route path={"/our-remodeling-process"} component={OurRemodelingProcess} />
            <Route path={"/small-general-repairs"} component={SmallGeneralRepairs} />
            <Route path={"/contact"} component={ContactUs} />
          </Switch>
        </Root>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
