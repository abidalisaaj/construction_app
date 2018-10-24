import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

// Images
import Logo from "../images/logo.png";
import CallIcon from "../images/call_icon.png";

export class Header extends React.Component {
  static propTypes = {
    contacts: propTypes.object,
    navigations: propTypes.array
  };
  render() {
    return (
      <header className="page-head">
        <div className="container">
          <div className="row layout">
            <div className="one_half-md">
              <div className="head-logo">
                <Link to={"/"} >
                  <img
                    src={Logo}
                    alt="Construction"
                    title="Construction"
                    className="img-responsive"
                  />
                </Link>
              </div>
            </div>
            <div className="one_half-md">
              <div className="head-content">
                <p className="head-content__call">
                  <a href="tel:+19738203050">
                    <span className="head-content__call--icon">
                      <img src={CallIcon} alt="call" title="call" />
                    </span>
                    <span className="head-content__call--no">
                      {this.props.contacts.phone}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="page-nav">
          <div className="container">
            <div className="row">
              <div className="whole">
                <div id="site-nav-toggle" className="site-nav-toggle">
                  <a
                    className="site-nav-toggle__btn"
                    href="#site-nav-toggle__btn"
                  >
                    <span className="site-nav-toggle__btn--text">Menu</span>
                    <span className="site-nav-toggle__btn--icon">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </span>
                  </a>
                </div>
                <nav className="site-nav" id="site-nav">
                  <ul>
                    {/* <li>
                      <Link to={"/"}> Home </Link>
                    </li>
                    <li>
                      <Link to={"/about"}> About Us </Link>
                    </li>
                    <li>
                      <Link to={"/gallery"}> Gallery </Link>
                    </li>
                    <li className="expanded">
                      <Link to={"/pages"} className="parent_list"> Pages </Link>
                      <ul>
                        <li>
                          <a href="#">Drop List Level 1</a>
                        </li>
                        <li className="expanded">
                          <a href="#" className="parent_list">
                          Drop List Level 2
                          </a>
                          <ul>
                            <li>
                              <a href="#">Gallery Test 002a</a>
                            </li>
                            <li className="expanded">
                              <a href="#" className="parent_list">
                              Drop List Level 2a
                              </a>
                              <ul>
                                <li>
                                  <a href="#">Drop List Level 2a1</a>
                                </li>
                                <li>
                                  <a href="#">Drop List Level 2a2</a>
                                </li>
                                <li>
                                  <a href="#">Drop List Level 2a3</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Gallery Test 002c</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Drop List Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/testinomial"}> Testimonial </Link>
                    </li>
                    <li>
                      <Link to={"/our-remodeling-process"}> Our Remodel Process </Link>
                    </li>
                    <li>
                      <Link to={"/small-general-repairs"}> Small General Repairs </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li> */}

                    {this.props.navigations.map((nav, i) => (
                      <li key={i}>
                        <Link to={nav.path}>{nav.name}</Link>
                      </li>
                    ))}

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
