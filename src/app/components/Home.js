import React from "react";

import { Banner } from "./Banner";
import { HeroContent } from "./HeroContent";
import { ContactForm } from "./ContactForm";
import { SlideShow } from "./SlideShow";

// Images & Videos
import Video from "../images/movie.mp4";


export class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <HeroContent />
        <SlideShow />
        <section className="page-body">
          <div className="page-cont">
            <div className="container">
              <div className="row ">
                <div className="whole">
                  <div className="row layout">
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
                            <video width="100%" height="400" controls>
                              <source src={Video} type="video/mp4" />
                              <source src={Video} type="video/ogg" />
                            </video>
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
