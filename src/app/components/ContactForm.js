import React from "react";

export class ContactForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h2>Contact <span>Us</span></h2>
        </header>
        <form method="post" action="" className="fancyform">
          <div style={{ display: "none" }}>
            <input
              type="hidden"
              value="bcd6afb3777bb83ffd1121af5d7c27e0"
              name="csrfmiddlewaretoken"
            />
          </div>
          <fieldset>
            <div className="emailform">
              <div className="emailform-errors" />
              <div
                id="emailform-field-id_name"
                className="emailform-field emailform-field-name"
              >
                <div className="emailform-field-label">
                  <label htmlFor="id_name">Name</label>
                </div>
                <div className="emailform-field-input">
                  <input type="text" maxLength="50" name="name" id="id_name" />
                </div>
              </div>
              <div
                id="emailform-field-id_email"
                className="emailform-field emailform-field-email"
              >
                <div className="emailform-field-label">
                  <label htmlFor="id_email">Email</label>
                </div>
                <div className="emailform-field-input">
                  <input type="text" id="id_email" name="email" />
                </div>
              </div>
              <div
                id="emailform-field-id_phone"
                className="emailform-field emailform-field-phone"
              >
                <div className="emailform-field-label">
                  <label htmlFor="id_phone">Phone</label>
                </div>
                <div className="emailform-field-input">
                  <input
                    type="text"
                    maxLength="50"
                    name="phone"
                    id="id_phone"
                  />
                </div>
              </div>
              <div
                id="emailform-field-id_message"
                className="emailform-field emailform-field-message"
              >
                <div className="emailform-field-label">
                  <label htmlFor="id_message">Message</label>
                </div>
                <div className="emailform-field-input">
                  <textarea name="message" cols="20" rows="5" id="id_message" />
                </div>
              </div>
              <div className="emailform-button">
                <button value="Submit" type="submit">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}
