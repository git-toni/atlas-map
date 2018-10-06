export default {
  polygon: (id, coordinates, map) =>
    map.addLayer({
      id,
      type: "fill",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates,
          },
        },
      },
      layout: {},
      paint: {
        "fill-color": "#088",
        "fill-opacity": 0.8,
      },
    }),
  circle: (id, features, map) =>
    map.addLayer({
      id,
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features,
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#007cbf",
      },
    }),
};
