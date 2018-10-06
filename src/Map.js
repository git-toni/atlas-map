import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import MainPanel from "./MainPanel";
// mapboxgl.accessToken =
//  "pk.eyJ1IjoidG9uaXUiLCJhIjoiY2o3bjZ5bmRuMnhpYjJxbWoxbGIwMWk3aiJ9.flgQgH61YWCoJD6Vkwk39g";
// let map = new mapboxgl.Map({
//  container: "YOUR_CONTAINER_ELEMENT_ID",
//  style: "mapbox://styles/mapbox/streets-v10",
// });

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
    // mapboxgl.accessToken =
    //  "pk.eyJ1IjoidG9uaXUiLCJhIjoiY2o3bjZ5bmRuMnhpYjJxbWoxbGIwMWk3aiJ9.flgQgH61YWCoJD6Vkwk39g";
    // this.map = new mapboxgl.Map({
    //  container: "SupaMap",
    //  style: "mapbox://styles/mapbox/streets-v10",
    //  // style: "mapbox://styles/jalbertsr/cjmwh3gyv15bv2sqqnmpwpcit",
    //  center: [2.175761, 41.371313],
    //  zoom: 11.3,
    // });
    // this.map.on("load", () => {
    //  this.map.addSource("stations", {
    //    type: "vector",
    //    url:
    //      "https://api.mapbox.com/styles/v1/jalbertsr/cjmwh3gyv15bv2sqqnmpwpcit.html?fresh=true&title=true&access_token=pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA#11.3/41.3713/2.1758",
    //  });
    // });
  }
  render() {
    return (
      <Container>
        <MapContainer id="SupaMap" />;
        <PanelContainer>
          <MainPanel />
        </PanelContainer>
      </Container>
    );
  }
}

export default MainMap;
