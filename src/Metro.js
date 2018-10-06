import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import { withData } from "./context";

import HighlightLine from "./components/HighlightLine";

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

class MetroMap extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA";
    this.map = new mapboxgl.Map({
      container: "MetroMap",
      style: "mapbox://styles/jalbertsr/cjmxd0ii9ddca2rlcxdcase1p",
      center: [2.171263, 41.38836],
      zoom: 10,
    });
  }

  render() {
    return (
      <Container>
        <MapContainer style={{ width: "100%", height: "100vh" }} id="MetroMap" />
        <PanelContainer>
          <HighlightLine data={this.props.data} />
        </PanelContainer>
      </Container>
    );
  }
}

export default withData(MetroMap);
