import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

// Styles
import "./../styles/normalize.css";
import "./../styles/grid.css";
import "./../styles/style.css";
import "./../styles/slick-theme.min.css";
import "./../styles/slick.min.css";

export class Root extends React.Component {
  render() {
    var navigations = [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Gallery", path: "/gallery" },
      {
        name: "Pages",
        path: "/pages",
        items: [
          { name: "Drop List Level 1", path: "/dd1" },
          {
            name: "Drop List Level 2",
            path: "/dd1",
            items: [
              { name: "Drop List Level 2a", path: "/dd1" },
              {
                name: "Drop List Level 2b",
                path: "/dd1",
                items: [
                  { name: "Drop List Level 2b1", path: "/dd1" },
                  { name: "Drop List Level 2b2", path: "/dd1" },
                  { name: "Drop List Level 2b3", path: "/dd1" }
                ]
              },
              { name: "Drop List Level 2c", path: "/dd1" }
            ]
          },
          { name: "Drop List Level 3", path: "/dd1" }
        ]
      },
      { name: "Testimonial", path: "/testinomial" },
      { name: "Our Remodeling Process", path: "/our-remodeling-process" },
      { name: "Small General Repairs", path: "/small-general-repairs" },
      { name: "Contact Us", path: "/contact" }
    ];
    var address = {
      title: "ADDRESS",
      addressLine_1: "E-457A, Ramphal Chowk,",
      addressLine_2: "Sector-7, Dwarka, ND. 110059"
    };
    var contacts = {
      title: "Contact Us",
      phone: "989-137-xxxx",
      email: "construction@gmail.com"
    };
    var hours = {
      title: "HOURS",
      days: "Monday to Friday",
      hour: "8:00am to 5:00pm"
    };
    var copyright = {
      year: "© 2018",
      link: "Abid Ali"
    };
    return (
      <React.Fragment>
        <Header contacts={contacts} navigations={navigations} />

        {this.props.children}

        <Footer
          address={address}
          contacts={contacts}
          hours={hours}
          copyright={copyright}
          navigations={navigations}
        />
      </React.Fragment>
    );
  }
}
