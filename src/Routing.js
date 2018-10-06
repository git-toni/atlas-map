import React from "react";
import axios from "axios";

export default class Routing extends React.Component {
  constructor() {
    super();
    this.state = {
      to: {
        name: "",
        lat: 0,
        lng: 0,
      },
      from: {
        name: "",
        lat: 0,
        lng: 0,
      },
      profile: "walking",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlerSearchInput = this.handlerSearchInput.bind(this);
    this.fetchRouting = this.fetchRouting.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {}

  handleChange(e) {
    this.setState({
      [e.target.name]: {
        name: e.target.value,
      },
    });
  }

  handlerSearchInput(e) {
    e.preventDefault();
    const toOrFrom = e.target.name;
    const value = this.state[toOrFrom].name;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: value }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log(
          "lat",
          results[0].geometry.location.lat(),
          "lng",
          results[0].geometry.location.lng(),
        );
        this.setState({
          [toOrFrom]: {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          },
        });
      }
    });
  }

  handleSelect(e) {
    console.log(e.target.value);
    this.setState({
      profile: e.target.value,
    });
  }

  fetchRouting() {
    const { profile, to, from } = this.state;
    axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/${profile}/${from.lat},${from.lng};${to.lat},${
          to.lng
        }?access_token=pk.eyJ1IjoiamFsYmVydHNyIiwiYSI6ImNqbXRhNXdzeTJjazQzdm9laWlzcm94eHQifQ.y9QmSd0MurGeocOHEk0eZA`,
      )
      .then(data => {
        console.log("pintame esta", data);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>holaa routing</h1>
        <form onSubmit={this.handlerSearchInput} name="from" style={{ textAlign: "center" }}>
          <label htmlFor="from">
            From:
            <input
              id="from"
              name="from"
              onChange={this.handleChange}
              value={this.state.from.name}
            />
          </label>
          <input type="submit" />
        </form>
        <form onSubmit={this.handlerSearchInput} name="to" style={{ textAlign: "center" }}>
          <label htmlFor="to">
            To:
            <input id="to" name="to" onChange={this.handleChange} value={this.state.to.name} />
          </label>
          <input type="submit" />
        </form>
        <select onChange={this.handleSelect} value={this.state.profile}>
          <option value="cycling">Cycling</option>
          <option value="walking">Walking</option>
          <option value="driving">Driving</option>
        </select>
        <button onClick={this.fetchRouting}>Dame mi ruta</button>
      </React.Fragment>
    );
  }
}
