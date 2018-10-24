import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
  static propTypes = {
    address: propTypes.object,
    contacts: propTypes.object,
    hours: propTypes.object,
    navigations: propTypes.array,
    copyright: propTypes.object
  };
  render() {
    return (
      <footer className="page-foot">
        <div className="foot-cont">
          <div className="content_column">
            <div className="content_row layout">
              <div className="one_third-md">
                <article className="foot-cont__col col_001">
                  <h4>{this.props.address.title}</h4>
                  <p>
                    <span>{this.props.address.addressLine_1}</span>
                    <span>{this.props.address.addressLine_2}</span>
                  </p>
                </article>
              </div>
              <div className="one_third-md">
                <article className="foot-cont__col col_002">
                  <h4>{this.props.contacts.title}</h4>
                  <p>
                    <span>Contact: {this.props.contacts.phone}</span>
                    <span>
                      Email: <a href="#">{this.props.contacts.email}</a>
                    </span>
                  </p>
                </article>
              </div>
              <div className="one_third-md">
                <article className="foot-cont__col col_003">
                  <h4>{this.props.hours.title}</h4>
                  <p>
                    <span>{this.props.hours.days} :</span>
                    <span>{this.props.hours.hour}</span>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div className="foot-micro">
          <div className="content_column">
            <div className="content_row layout">
              <div className="three_fourths-lg">
                <nav className="foot-nav">
                  <ul className="list-unstyled">
                    {this.props.navigations.map((nav, i) => (
                      <li key={i}>
                        <a href="#">{nav.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="one_fourth-lg">
                <div className="copyright">
                  {this.props.copyright.year}{" "}
                  <a href="#">{this.props.copyright.link}</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
