import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, IndexRoute, Switch, browserHistory } from "react-router-dom";

// Common Modules
import { Root } from "./components/Root";

// Page Modules
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Gallery } from "./components/Gallery";
import { Pages } from "./components/Pages";
import { Testimonial } from "./components/Testimonial";
import { OurRemodelingProcess } from "./components/OurRemodelingProcess";
import { SmallGeneralRepairs } from "./components/SmallGeneralRepairs";
import { ContactUs } from "./components/ContactUs";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Root>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/about"} component={AboutUs} />
            <Route path={"/gallery"} component={Gallery} />
            <Route path={"/pages"} component={Pages} />
            <Route path={"/testinomial"} component={Testimonial} />
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
