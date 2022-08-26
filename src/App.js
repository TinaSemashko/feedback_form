import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Main from "./Main.js";
import Iframe from "react-iframe";
import central from "../src/central.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Main />
          </div>
          <div className="col">
            <Iframe
              className="round"
              title="myPlace"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44389.86744575049!2d-73.94844871607448!3d40.68568021855141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c75b6a8b821%3A0xf3bc87276691ebdc!2sBedford-Stuyvesant%2C%20Brooklyn%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1661249022089!5m2!1sfr!2sfr"
              width="300"
              height="225"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
            <div>
              <img src={central} className="img-fluid one" />
            </div>
          </div>
        </div>
        <hr className="p-2 hr-style"></hr>
        <footer>
          <div className="row pb-5">
            <div className="col-3">
              <div className="social-links d-flex justify-content-center">
                <i className="fab fa-linkedin p-2"></i>
                <i className="fab fa-twitter p-2"></i>
                <i className="fab fa-facebook p-2"></i>
                <i className="fab fa-pinterest p-2"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
