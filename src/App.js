import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import Iframe from "react-iframe";
import central from "../src/central.svg";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Map from "./Map";
import Balls from "./Balls";
import Image from "react-bootstrap/Image";

const SocialLinks = styled.div`
  font-size: 8px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
`;

const Line = styled.hr`
  border: none;
  border-top: 2px solid #333;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
`;

const App = () => (
  <Wrapper>
    <div className="row">
      <div className="col">
        <Main />
      </div>
      <div className="col">
        <Map>
          <Iframe
            title="myPlace"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44389.86744575049!2d-73.94844871607448!3d40.68568021855141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c75b6a8b821%3A0xf3bc87276691ebdc!2sBedford-Stuyvesant%2C%20Brooklyn%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1661249022089!5m2!1sfr!2sfr"
            width="500"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </Map>
        <Balls>
          <Image src={central} />
        </Balls>
      </div>
    </div>
    <span className="p-1">
      <Line />
    </span>
    <footer>
      <div className="row pb-5">
        <div className="col-3">
          <SocialLinks>
            <i className="fab fa-linkedin p-2"></i>
            <i className="fab fa-twitter p-2"></i>
            <i className="fab fa-facebook p-2"></i>
            <i className="fab fa-pinterest p-2"></i>
          </SocialLinks>
        </div>
      </div>
    </footer>
  </Wrapper>
);

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
