import React from "react";
const style = {
  marginTop: "10px",
  marginBottom: "20px"
};
export class OurRemodelingProcess extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

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
      // errorMessage += "Please Enter Your Name";
      flag = 1;
    }

    if (!this.state.email.value) {
      var email = this.state.email;
      email["errMsg"] = "Please enter your Email";
      this.setState({ email });
      // errorMessage += "Please Enter Your Email";
      flag = 1;
    }

    if (!this.state.phone.value) {
      var phone = this.state.phone;
      phone["errMsg"] = "Please enter your Phone";
      this.setState({ phone });
      // errorMessage += "Please Enter Your Phone";
      flag = 1;
    }

    if (!this.state.message.value) {
      var message = this.state.message;
      message["errMsg"] = "Please enter your Message";
      this.setState({ message });
      // errorMessage += "Please Enter Your Message";
      flag = 1;
    }

    if (!flag) {
      //submit form
      alert("Your Form have been Submitted");
    }
  }

  handleNameChange(event) {
    var name = this.state.name;
    name["value"] = event.target.value;
    name["errMsg"] = "";
    this.setState({ name });
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
                        Our <span>Remodeling</span> Processes
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
                        {this.state.name.errMsg ? (
                          <p style={{ color: "#FF0000" }}>
                            {this.state.name.errMsg}
                          </p>
                        ) : null}
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={this.state.name.value}
                          onChange={this.handleNameChange}
                        />
                      </div>
                      <div className="one_fifth-md">
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
                        />
                      </div>
                      <div className="one_fifth-md">
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
                        />
                      </div>
                      <div className="one_fifth-md">
                        {this.state.message.errMsg ? (
                          <p style={{ color: "#FF0000" }}>
                            {this.state.message.errMsg}
                          </p>
                        ) : null}
                        <input
                          type="text"
                          placeholder="Your Message"
                          value={this.state.message.value}
                          onChange={this.handleMessageChange}
                        />
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
