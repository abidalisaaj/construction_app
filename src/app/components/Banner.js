import React from "react";

// Images
import BannerImage_001 from "../images/banner_001.png";

export class Banner extends React.Component {
  render() {
    return (
      <section className="home-banner">
        <div className="container">
          <div className="row layout">
            <div className="whole">
              <div className="banner">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <img
                        src={BannerImage_001}
                        alt=""
                        title=""
                        className="img-responsive"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
