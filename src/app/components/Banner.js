import React from "react";
import SlickBanner from "react-slick";

// Images
import BannerImage_001 from "../images/banner_001.png";
import BannerImage_002 from "../images/banner_002.png";
import BannerImage_003 from "../images/banner_003.png";
import BannerImage_004 from "../images/banner_004.png";
import BannerImage_005 from "../images/banner_005.png";

export class Banner extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            
          }
        },
        {
          breakpoint: 900,
          settings: {
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            dots: false            
          }
        }
      ]
    };
    return (
      <section className="home-banner">
        <div className="container">
          <div className="row layout">
            <div className="whole banner">
              <SlickBanner {...settings}>
                <div className="banner-item">
                  <img
                    src={BannerImage_001}
                    alt=""
                    title=""
                    className="banner-img"
                  />
                </div>
                <div className="banner-item">
                  <img
                    src={BannerImage_002}
                    alt=""
                    title=""
                    className="banner-img"
                  />
                </div>
                <div className="banner-item">
                  <img
                    src={BannerImage_003}
                    alt=""
                    title=""
                    className="banner-img"
                  />
                </div>
                <div className="banner-item">
                  <img
                    src={BannerImage_004}
                    alt=""
                    title=""
                    className="banner-img"
                  />
                </div>
                <div className="banner-item">
                  <img
                    src={BannerImage_005}
                    alt=""
                    title=""
                    className="banner-img"
                  />
                </div>
              </SlickBanner>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
