import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const Butt = styled.button`
  border-radius: 200px;
  border: 0.1px solid;
  background-color: gold;
  color: white;
  padding: 10px 20px 10px 20px;
  font-size: 10px;
`;

const Header = styled.h1`
  font-size: 24px;
  text-align: left;
  margin-left: 50px;
  margin-top: 100px;
`;

export default function Main() {
  function handleSubmit() {
    alert("data was submitted");
  }

  return (
    <>
      <Header>Reach out to us!</Header>
      <Form className="form mt-2 ps-5" onSubmit={handleSubmit}>
        <Form.Control placeholder="Your name*" className="mb-1" />
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your email*" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Your message*" />
        </Form.Group>

        <Butt>Send message</Butt>
      </Form>
    </>
  );
}
