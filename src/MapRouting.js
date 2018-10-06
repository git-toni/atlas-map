import * as React from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

import { withData } from "./context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background: lightgreen;
`;

class MapRouting extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA";
    this.map = new mapboxgl.Map({
      container: "MapRouting",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [2.175761, 41.371313],
      zoom: 11.5,
    });
  }
  componentDidUpdate() {
    this.map.on("load", () => {
      this.map.addLayer({
        id: "MapRouting",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [this.props.waypoints],
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#888",
          "line-width": 8,
        },
      });
    });
  }

  render() {
    return (
      <Container>
        <MapContainer style={{ width: "100%", height: "auto" }} id="MapRouting" />
      </Container>
    );
  }
}

export default withData(MapRouting);
