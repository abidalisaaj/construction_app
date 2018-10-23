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
        <div className="content_column">
          <div className="content_row layout">
            <div className="one_half-md">
              <div className="head-logo">
                <a href="#">
                  <img
                    src={Logo}
                    alt="Construction"
                    title="Construction"
                    className="img-responsive"
                  />
                </a>
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
          <div className="content_column">
            <div className="content_row">
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
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/warrenty"}>Warrenty</Link>
                    </li>
                    <li className="expanded">
                      <Link to={"/gallery"} className="parent_list">
                        {" "}
                        Gallery{" "}
                      </Link>
                      <ul>
                        <li>
                          <a href="#">Gallery Test 001</a>
                        </li>
                        <li className="expanded">
                          <a href="#" className="parent_list">
                            Gallery Test 002
                          </a>
                          <ul>
                            <li>
                              <a href="#">Gallery Test 002a</a>
                            </li>
                            <li className="expanded">
                              <a href="#" className="parent_list">
                                Gallery Test 002b
                              </a>
                              <ul>
                                <li>
                                  <a href="#">Gallery Test 002a_1</a>
                                </li>
                                <li>
                                  <a href="#">Gallery Test 002b_2</a>
                                </li>
                                <li>
                                  <a href="#">Gallery Test 002c_3</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Gallery Test 002c</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Gallery Test 002</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to={"/testinomials"}>Testimonials</Link>
                    </li>
                    <li>
                      <Link to={"/our-remodeling-process"}>
                        Our Remodel Process
                      </Link>
                    </li>
                    <li>
                      <Link to={"/small-general-repairs"}>
                        Small General Repairs
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>

                    {/* {this.props.navigations.map((nav, i) => (
                      <li key={i}>
                        <a href="#">{nav.name}</a>
                      </li>
                    ))} */}
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
