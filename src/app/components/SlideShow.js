import React from "react";

// Images
import SlideShowImage_001 from "../images/ss_img_001.png";
import SlideShowImage_002 from "../images/ss_img_002.png";
import SlideShowImage_003 from "../images/ss_img_003.png";

export class SlideShow extends React.Component {
  render() {
    return (
      <section className="slide-show">
        <div className="content_column">
          <div className="content_row">
            <div className="content_row slideshow">
              <div className="one_third-md">
                <article className="slideshow__thumb">
                  <a href="#">
                    <span className="slideshow__thumb--img">
                      <img
                        src={SlideShowImage_001}
                        alt=""
                        title=""
                        className="img-responsive"
                      />
                    </span>
                    <strong className="slideshow__thumb--title">
                      Kitchen Remodeling
                    </strong>
                  </a>
                </article>
              </div>
              <div className="one_third-md">
                <article className="slideshow__thumb">
                  <a href="#">
                    <span className="slideshow__thumb--img">
                      <img
                        src={SlideShowImage_002}
                        alt=""
                        title=""
                        className="img-responsive"
                      />
                    </span>
                    <strong className="slideshow__thumb--title">
                      Kitchen Remodeling
                    </strong>
                  </a>
                </article>
              </div>
              <div className="one_third-md">
                <article className="slideshow__thumb last">
                  <a href="#">
                    <span className="slideshow__thumb--img">
                      <img
                        src={SlideShowImage_003}
                        alt=""
                        title=""
                        className="img-responsive"
                      />
                    </span>
                    <strong className="slideshow__thumb--title">
                      Kitchen Remodeling
                    </strong>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
