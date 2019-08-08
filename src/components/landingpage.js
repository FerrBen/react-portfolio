import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media.licdn.com/dms/image/C4D03AQE25Bcoz7lK7g/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=DP2jKrp0naCHelM6qgF32Nfvy1r-DEivnjyzced-ch0"
              alt="Avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Ferruccio Benito - Frontend-Developer</h1>

              <hr />

              <p>
                {" "}
                HTML/CSS | JavaScript | React | React Native | NodeJS | Express
                | MongoDB{" "}
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Tschi0"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ferrucciobenito/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.xing.com/profile/Ferruccio_Hess"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-xing-square" aria-hidden="true" />
                </a>
                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
