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

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: ""
    };
  }
  handleClick(e) {
    e.preventDefault();
    var flag = 0, msg = "";
    console.log(
      this.state.name,
      this.state.email,
      this.state.phone,
      this.state.message
    );
    if(!this.state.name){
      msg += "please enter your name";
      flag = 1;
    }
    if(!this.state.email){
      msg += "please enter your email";
      flag = 1;
    }
    if(flag){
      alert(msg);
    } else{
      // submit form
    }
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleNameBlur () {
    if(!this.state.name){
      alert("please enter your name.....");
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
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    onBlur = {this.handleNameBlur}
                    placeholder="Your Name"
                    maxLength="50"
                    name="name"
                    id="id_name"
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
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    placeholder="Your Email"
                    id="id_email"
                    name="email"
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
                  <input
                    type="text"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    placeholder="Your Phone"
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
                  <textarea
                    name="message"
                    value={this.state.message}
                    onChange={this.handleMessageChange}
                    placeholder="Your Message"
                    cols="20"
                    rows="5"
                    id="id_message"
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
