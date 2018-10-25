import React from "react";
import Slider from "react-slick";

// Images
import SlideShowImage_001 from "../images/ss_img_001.png";
import SlideShowImage_002 from "../images/ss_img_002.png";
import SlideShowImage_003 from "../images/ss_img_003.png";
import SlideShowImage_004 from "../images/ss_img_004.png";
import SlideShowImage_005 from "../images/ss_img_005.png";
import SlideShowImage_006 from "../images/ss_img_006.png";

export class SlideShow extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 899,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <section className="slide-show">
        <div className="container">
          <div className="row">
            <div className="row slideshow">
              <Slider {...settings}>
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
                        Bathroom Remodeling
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
                        Interior Remodeling
                    </strong>
                    </a>
                  </article>
                </div>
                <div className="one_third-md">
                  <article className="slideshow__thumb">
                    <a href="#">
                      <span className="slideshow__thumb--img">
                        <img
                          src={SlideShowImage_004}
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
                          src={SlideShowImage_005}
                          alt=""
                          title=""
                          className="img-responsive"
                        />
                      </span>
                      <strong className="slideshow__thumb--title">
                        Bathroom Remodeling
                    </strong>
                    </a>
                  </article>
                </div>
                <div className="one_third-md">
                  <article className="slideshow__thumb last">
                    <a href="#">
                      <span className="slideshow__thumb--img">
                        <img
                          src={SlideShowImage_006}
                          alt=""
                          title=""
                          className="img-responsive"
                        />
                      </span>
                      <strong className="slideshow__thumb--title">
                        Interior Remodeling
                    </strong>
                    </a>
                  </article>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
