import React from "react";

export class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="page-body">
          <div className="page-cont">
            <div className="container">
              <div className="row">
                <div className="whole layout">
                  <div className="layout-item">
                    <article>
                      <h2>
                        About <span>Construction</span>
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
