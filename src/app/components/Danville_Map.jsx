import React from 'react'

import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.666233967218!2d-121.9219587493757!3d37.79786101850504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ff2382ec77fb1%3A0xc6112e3901d0431d!2sChina%20Paradise%20Restaurant!5e0!3m2!1sen!2sus!4v1610387554280!5m2!1sen!2sus",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: 37.7978, lng: -121.91974 }}>
    <Marker position={{ lat: 37.7978, lng: -121.91974 }} />
  </GoogleMap>
));

export default MyMapComponent;

