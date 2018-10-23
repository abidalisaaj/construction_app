import React from "react";
import { ContactForm } from "./ContactForm";

export class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-body">
          <div className="page-cont">
            <div className="content_column">
              <div className="content_row layout">
                <div className="whole">
                  <div className="layout-item">
                    <ContactForm />
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
