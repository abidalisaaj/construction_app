import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default class Navs extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* {this.props.navigations.map((nav, i) => (
          <li key={i}>
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))} */}

        {this.props.navigations.map(function(nav, i) {
          if (nav.items != undefined) {
            return (
              <li key={i} className="expanded">
                <Link to={nav.path} className="parent_list">
                  {nav.name}
                </Link>

                <ul key={i}>
                  {nav.items.map(function(items, i) {
                    return (
                      <li key={i}>
                        <Link to={items.path}>{items.name}</Link>

                        
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={i}>
                <Link to={nav.path}>{nav.name}</Link>
              </li>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
