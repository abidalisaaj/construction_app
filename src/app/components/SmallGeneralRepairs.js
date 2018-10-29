import React from "react";

const style = {
  marginTop: "10px",
  marginBottom: "20px"
};

export class SmallGeneralRepairs extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: { value: "", errMsg: "" },
      email: { value: "", errMsg: "" },
      phone: { value: "", errMsg: "" },
      message: { value: "", errMsg: "" }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    var flag = 0;
    var errorMessage = "";

    if (!this.state.name.value) {
      var name = this.state.name;
      name["errMsg"] = "Please enter your Name";
      this.setState({ name });
      flag = 1;
    }

    if (!this.state.email.value) {
      var email = this.state.email;
      email["errMsg"] = "Please enter your Email";
      this.setState({ email });
      flag = 1;
    }

    if (!this.state.phone.value) {
      var phone = this.state.phone;
      phone["errMsg"] = "Please enter your Phone";
      this.setState({ phone });
      flag = 1;
    }

    if (!this.state.message.value) {
      var message = this.state.message;
      message["errMsg"] = "Please enter your Message";
      this.setState({ message });
      flag = 1;
    }

    if (!flag) {
      //submit form
      alert("Your Form have been Submitted");
    }
  }

  handleChange(key, event) {
    var obj = this.state[key];
    obj["value"] = event.target.value;
    obj["errMsg"] = "";
    this.setState({ obj });
  }

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
                      <h2>
                        Our <span>Small General Repairs</span> Processes
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <blockquote>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </blockquote>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore.
                      </p>
                    </article>

                    <form className="fancyform">
                      <div className="one_fifth-md">
                        <div className="emailform-field">
                          {this.state.name.errMsg ? (
                            <p className="emailform-field--error">
                              {this.state.name.errMsg}
                            </p>
                          ) : null}
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={this.state.name.value}
                            onChange={this.handleChange.bind(this, "name")}
                          />
                        </div>
                      </div>
                      <div className="one_fifth-md">
                        <div className="emailform-field">
                          {this.state.email.errMsg ? (
                            <p className="emailform-field--error">
                              {this.state.email.errMsg}
                            </p>
                          ) : null}
                          <input
                            type="text"
                            placeholder="Your Email"
                            value={this.state.email.value}
                            onChange={this.handleChange.bind(this, "email")}
                          />
                        </div>
                      </div>
                      <div className="one_fifth-md">
                        <div className="emailform-field">
                          {this.state.phone.errMsg ? (
                            <p className="emailform-field--error">
                              {this.state.phone.errMsg}
                            </p>
                          ) : null}
                          <input
                            type="text"
                            placeholder="Your Phone"
                            value={this.state.phone.value}
                            onChange={this.handleChange.bind(this, "phone")}
                          />
                        </div>
                      </div>
                      <div className="one_fifth-md">
                        <div className="emailform-field">
                          {this.state.message.errMsg ? (
                            <p className="emailform-field--error">
                              {this.state.message.errMsg}
                            </p>
                          ) : null}
                          <input
                            type="text"
                            placeholder="Your Message"
                            value={this.state.message.value}
                            onChange={this.handleChange.bind(this, "message")}
                          />
                        </div>
                      </div>
                      <div className="one_fifth-md">
                        <button style={style} onClick={this.handleSubmit}>
                          Submit
                        </button>
                      </div>
                    </form>
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
