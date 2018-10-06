import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import { withData } from "./context";

import SelectService from "./components/SelectService";
import utils from "./utilsMap/addLayers";

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

class MainMap extends React.Component {
  componentDidMount() {
    console.log("LOAD MAPBOX HERE");
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA";
    this.map = new mapboxgl.Map({
      container: "SupaMap",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [2.175761, 41.371313],
      zoom: 11.3,
    });
  }
  renderLayersEvent = () => {
    Object.keys(this.props.data.events).map(key => {
      if (key && this.props.data.events[key].area && this.map) {
        utils.polygon(key, this.props.data.events[key].area, this.map);
      }
    });
  };

  render() {
    const { servicesActives, toggleServicesActives } = this.props.data;
    return (
      <Container>
        <MapContainer id="SupaMap" />
        <PanelContainer>
          {servicesActives.events && this.renderLayersEvent()}
          <SelectService
            servicesActives={servicesActives}
            toggleServicesActives={toggleServicesActives}
          />
        </PanelContainer>
      </Container>
    );
  }
}

export default withData(MainMap);
