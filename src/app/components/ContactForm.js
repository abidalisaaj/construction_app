import React from "react";

export class ContactForm extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleEmailBlur = this.handleEmailBlur.bind(this);
    this.handlePhoneBlur = this.handlePhoneBlur.bind(this);
    this.handleMessageBlur = this.handleMessageBlur.bind(this);

    this.state = {
      name: { value: "", errMsg: "" },
      email: { value: "", errMsg: "" },
      phone: { value: "", errMsg: "" },
      message: { value: "", errMsg: "" }
    };
  }
  handleClick(e) {
    e.preventDefault();
    var flag = 0;

    if (!this.state.name.value) {
      var name = this.state.name;
      name["errMsg"] = "Please enter your Name";
      this.setState({ name });
      flag = 1;
    }
    if (!this.state.email.value) {
      var email = this.state.email;
      email["errMsg"] = "please enter your Email";
      this.setState({ email });
      flag = 1;
    }
    if (!this.state.phone.value) {
      var phone = this.state.phone;
      phone["errMsg"] = "please enter your Phone";
      this.setState({ phone });
      flag = 1;
    }
    if (!this.state.message.value) {
      var message = this.state.message;
      message["errMsg"] = "plese enter your Message";
      this.setState({ message });
      flag = 1;
    }

    if (!flag) {
      //submit form
      alert("Your Form have been Submitted");
    }
  }

  handleNameChange(event) {
    var reg = /^\d+$/;
    var name = this.state.name;
    if (!reg.test(event.target.value)) {
      name["value"] = event.target.value;
      name["errMsg"] = "";
      this.setState({ name });
    }
  }

  handleEmailChange(event) {
    var email = this.state.email;
    email["value"] = event.target.value;
    email["errMsg"] = "";
    this.setState({ email });
  }

  handlePhoneChange(event) {
    var phone = this.state.phone;
    phone["value"] = event.target.value;
    phone["errMsg"] = "";
    this.setState({ phone });
  }

  handleMessageChange(event) {
    var message = this.state.message;
    message["value"] = event.target.value;
    message["errMsg"] = "";
    this.setState({ message });
  }

  handleNameBlur() {
    if (!this.state.name.value) {
      var name = this.state.name;
      name["errMsg"] = "Please enter your Name";
      this.setState({ name });
    }
  }
  handleEmailBlur() {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
    if (!reg.test(this.state.email.value)) {
      var email = this.state.email;
      email["errMsg"] = "please enter your Email";
      this.setState({ email });
    }
  }
  handlePhoneBlur() {
    var phone = this.state.phone;
    if (!phone.value) {
      phone["errMsg"] = "please enter your Phone";
    } else if (/[a-z]/i.test(phone.value)) {
      phone["errMsg"] = "Please enter valid phone number";
    } else if (phone.value.length !== 10) {
      phone["errMsg"] = "Phone number must be of 10 digits";
    }
    this.setState({ phone });
  }
  handleMessageBlur() {
    if (!this.state.message.value) {
      var message = this.state.message;
      message["errMsg"] = "plese enter your Message";
      this.setState({ message });
    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h2>
            Contact <span>Us</span>
          </h2>
        </header>
        <form className="fancyform">
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
                  {this.state.name.errMsg ? (
                    <p style={{ color: "#FF0000" }}>{this.state.name.errMsg}</p>
                  ) : null}
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={this.state.name.value}
                    onChange={this.handleNameChange}
                    onBlur={this.handleNameBlur}
                  />
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
                  {this.state.email.errMsg ? (
                    <p style={{ color: "#FF0000" }}>
                      {this.state.email.errMsg}
                    </p>
                  ) : null}
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={this.state.email.value}
                    onChange={this.handleEmailChange}
                    onBlur={this.handleEmailBlur}
                  />
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
                  {this.state.phone.errMsg ? (
                    <p style={{ color: "#FF0000" }}>
                      {this.state.phone.errMsg}
                    </p>
                  ) : null}

                  <input
                    type="text"
                    placeholder="Your Phone"
                    value={this.state.phone.value}
                    onChange={this.handlePhoneChange}
                    onBlur={this.handlePhoneBlur}
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
                  {this.state.message.errMsg ? (
                    <p style={{ color: "#FF0000" }}>
                      {this.state.message.errMsg}
                    </p>
                  ) : null}
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    value={this.state.message.value}
                    onChange={this.handleMessageChange}
                    onBlur={this.handleMessageBlur}
                  />
                </div>
              </div>
              <div className="emailform-button">
                <button value="Submit" type="submit" onClick={this.handleClick}>
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}
