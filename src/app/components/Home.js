import React from "react";

import { Banner } from "./Banner";
import { HeroContent } from "./HeroContent";
import { ContactForm } from "./ContactForm";

// Images
import VideoImage from "../images/video_img.png";
import { SlideShow } from "./SlideShow";

export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <HeroContent />
        <SlideShow />
        <section className="page-body">
          <div className="page-cont">
            <div className="content_column">
              <div className="content_row layout">
                <div className="whole">
                  <div className="content_row">
                    <div className="two_thirds-md">
                      <div className="layout-item layout-item--left">
                        <article>
                          <h2>
                            Welcome to <span>Tone Construction</span>
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <blockquote>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </blockquote>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore.
                          </p>
                          <div className="video">
                            <img
                              src={VideoImage}
                              alt=""
                              title=""
                              className="img-responsive"
                            />
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="one_third-md">
                      <aside className="layout-item layout-item--right">
                        <ContactForm />
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
