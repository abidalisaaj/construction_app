import React from "react";
import GridGallery from 'react-grid-gallery';

// Images
import GalleryImage_001 from "../images/gal_img_001.png";
import GalleryImage_002 from "../images/gal_img_002.png";
import GalleryImage_003 from "../images/gal_img_003.png";
import GalleryImage_004 from "../images/gal_img_004.png";
import GalleryImage_005 from "../images/gal_img_005.png";
import GalleryImage_006 from "../images/gal_img_006.png";
import GalleryImage_007 from "../images/gal_img_007.png";
import GalleryImage_008 from "../images/gal_img_008.png";
import GalleryImage_009 from "../images/gal_img_009.png";
import GalleryImage_010 from "../images/gal_img_010.png";
import GalleryImage_011 from "../images/gal_img_011.png";
import GalleryImage_012 from "../images/gal_img_012.png";

const GALLERY_IMAGES = [{
  src: `${GalleryImage_001}`,
  thumbnail: `${GalleryImage_001}`,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_002}`,
  thumbnail: `${GalleryImage_002}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_003}`,
  thumbnail: `${GalleryImage_003}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_004}`,
  thumbnail: `${GalleryImage_004}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_005}`,
  thumbnail: `${GalleryImage_005}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Kitchen", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_006}`,
  thumbnail: `${GalleryImage_006}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com",
}, {
  src: `${GalleryImage_007}`,
  thumbnail: `${GalleryImage_007}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Washroom", title: "Washroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_008}`,
  thumbnail: `${GalleryImage_008}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_009}`,
  thumbnail: `${GalleryImage_009}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Basement", title: "Basement" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_010}`,
  thumbnail: `${GalleryImage_010}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_011}`,
  thumbnail: `${GalleryImage_011}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Dining Room", title: "Dining Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_012}`,
  thumbnail: `${GalleryImage_012}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Kitchen and Dining", title: "Kitchen and Dining" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_001}`,
  thumbnail: `${GalleryImage_001}`,
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  isSelected: false,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_002}`,
  thumbnail: `${GalleryImage_002}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_003}`,
  thumbnail: `${GalleryImage_003}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_004}`,
  thumbnail: `${GalleryImage_004}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_005}`,
  thumbnail: `${GalleryImage_005}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Kitchen", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_006}`,
  thumbnail: `${GalleryImage_006}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Living Room", title: "Living Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com",
}, {
  src: `${GalleryImage_007}`,
  thumbnail: `${GalleryImage_007}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Washroom", title: "Washroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_008}`,
  thumbnail: `${GalleryImage_008}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_009}`,
  thumbnail: `${GalleryImage_009}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Basement", title: "Basement" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_010}`,
  thumbnail: `${GalleryImage_010}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Bathroom", title: "Bathroom" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_011}`,
  thumbnail: `${GalleryImage_011}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Dining Room", title: "Dining Room" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}, {
  src: `${GalleryImage_012}`,
  thumbnail: `${GalleryImage_012}`,
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{ value: "Kitchen and Dining", title: "Kitchen and Dining" }, { value: "Interior", title: "Interior" }],
  caption: "Abid Ali | Picture Credit pixabay.com"
}]

export class Gallery extends React.Component {
  render() {

    return (
      <React.Fragment>
        <section className="page-body">
          <div className="page-cont">
            <div className="container">
              <div className="row layout">
                <div className="whole">
                  <div className="layout-item">
                    <article>
                      <header>
                        <h2>
                          Image <span>Gallery</span>
                        </h2>
                      </header>
                      <GridGallery images={GALLERY_IMAGES} />
                    </article>
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
