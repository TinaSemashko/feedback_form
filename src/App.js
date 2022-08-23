import React from "react";
import "./App.css";
import Main from "./Main.js";
import GoogleMapReact from "google-map-react";

function App() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="App">
      <div className="container">
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDWlpAjVoNGSLHNXyV5yeOjJZjikt3BfKI",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

        <Main />
      </div>
    </div>
  );
}

export default App;
