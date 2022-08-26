import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Main.css";

export default function Main() {
  function handleSubmit() {
    alert("data was submitted");
  }

  return (
    <>
      <h1 className="hh mt-5">Reach out to us!</h1>
      <Form className="form mt-2 ps-5" onSubmit={handleSubmit}>
        <Form.Control placeholder="Your name*" className="mb-1" />
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your email*" />
        </Form.Group>
        <Form.Group className="mb-1" controlId="ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Your message*" />
        </Form.Group>

        <Button type="submit" variant="flat">
          Send message
        </Button>
      </Form>
    </>
  );
}
