import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import { withData } from "./context";

import SelectService from "./components/SelectService";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const PanelContainer = styled.div`
  height: auto;
  //height: 2em;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background: lightgreen;
`;

class BiciMap extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA";
    this.map = new mapboxgl.Map({
      container: "BiciMap",
      style: "mapbox://styles/jalbertsr/cjmx9b00h5h1v2sl7ofmvh681",
      center: [2.175761, 41.371313],
      zoom: 11.5,
    });
  }

  render() {
    const { servicesActives, toggleServicesActives } = this.props.data;
    return (
      <Container>
        <MapContainer style={{ width: "100%", height: "100vh" }} id="BiciMap" />
        <PanelContainer>
          <SelectService
            servicesActives={servicesActives}
            toggleServicesActives={toggleServicesActives}
          />
        </PanelContainer>
      </Container>
    );
  }
}

export default withData(BiciMap);
