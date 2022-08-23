import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import GoogleMapReact from "google-map-react";

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Main() {
  function handleSubmit() {
    alert("data was submitted");
  }

  /*
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
*/
  return (
    <Form className="form border border-3 rounded p-5" onSubmit={handleSubmit}>
      <Form.Label>Your name</Form.Label>
      <Form.Control placeholder="Enter your name" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your e-mail</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="ControlTextarea1">
        <Form.Label>Your message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
