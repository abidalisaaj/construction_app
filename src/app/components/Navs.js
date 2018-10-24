import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";



export default class Navs extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.navigations.map((nav, i) => (
                    <li key={i}>
                        <Link to={nav.path}>{nav.name}</Link>
                    </li>
                ))}
            </React.Fragment>
        );
    }
}

