import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Header";
import { Footer } from "./Footer";

// Styles
import "./../styles/normalize.css";
import "./../styles/grid.css";
import "./../styles/style.css";

export class Root extends React.Component {
  render() {
    var navigations = [
      { name: "My Home", items: [] },
      { name: "About Us", items: [] },
      { name: "Gallery", items: [] },
      { name: "Pages", items: [
          { name: "Drop List Level 1", items: [] },
          { name: "Drop List Level 1", items: [
              { name: "Drop List Level 2", items: [] },
              { name: "Drop List Level 2", items: [
                  { name: "Drop List Level 3", items: [] },
                  { name: "Drop List Level 3", items: [] },
                  { name: "Drop List Level 3", items: [] }]
              },
              { name: "Drop List Level 2", items: [] }
            ]
          },
          { name: "Drop List Level 1", items: [] }
        ]},
      { name: "Testimonial", items: [] },
      { name: "Our Remodel Process", items: [] },
      { name: "Small General Repairs", items: [] },
      { name: "Contact Us", items: [] }
    ];
    var address = {
      title: "ADDRESS",
      addressLine_1: "E 561a, Ramphal Chow,",
      addressLine_2: "Sector-7, Dwarka, New Delhi. 110059"
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
      year: "© 2015",
      link: "Drawing Board Media, Inc"
    };
    return (
      <React.Fragment>
        <Header
          contacts={contacts}
          navigations={navigations}
        />

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
