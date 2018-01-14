import React from 'react'
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCQkrMC9nurUKmrzBz2yqRctZTdCLKIDRU&v=3.exp&libraries=geometry,drawing,places",
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

