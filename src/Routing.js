import React from "react";
import axios from "axios";
import styled from "styled-components";
import MapRouting from "./MapRouting";

const PanelContainer = styled.div`
  margin-top: 48px;
  padding: 10px;
  background-color: #f0f0f0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  form {
    padding: 10px 0;
  }

  label span {
    background-color: red;
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 10px 15px;
    border-radius: 4px 0 0 4px;
    min-width: 80px;
    display: inline-block;
  }

  input {
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    color: #787878;
    display: inline-block;
  }

  .submit {
    background: black;
    color: white;
    border-radius: 0 4px 4px 0;
  }

  .select {
    width: 100%;
    padding: 10px 0;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .select select {
    display: inline-block;
    font-size: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    border: none;
    padding: 10px 15;
  }

  .button-container {
    text-align: center;
  }

  .button {
    background: red;
    padding: 10px 15px;
    border-radius: 4px;
    display: inline-block;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin: 10px 0 20px;
  }
`;

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
      waypoints: [],
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
        const parsedWayPoint1 = data.data.waypoints[0].location.reverse();
        const parsedWayPoint2 = data.data.waypoints[1].location.reverse();
        this.setState({ waypoints: [parsedWayPoint1, parsedWayPoint2] });
      });
  }

  render() {
    return (
      <React.Fragment>
        <PanelContainer>
          <form onSubmit={this.handlerSearchInput} name="from" style={{ textAlign: "center" }}>
            <label htmlFor="from">
              <span>FROM</span>
              <input
                id="from"
                name="from"
                onChange={this.handleChange}
                value={this.state.from.name}
              />
            </label>
            <input className="submit" type="submit" />
          </form>
          <form onSubmit={this.handlerSearchInput} name="to" style={{ textAlign: "center" }}>
            <label htmlFor="to">
              <span>TO</span>
              <input id="to" name="to" onChange={this.handleChange} value={this.state.to.name} />
            </label>
            <input className="submit" type="submit" />
          </form>
          <div className="select">
            <select onChange={this.handleSelect} value={this.state.profile}>
              <option value="cycling">Cycling</option>
              <option value="walking">Walking</option>
              <option value="driving">Driving</option>
            </select>
          </div>
          <div className="button-container">
            <button className="button" onClick={this.fetchRouting}>
              Calcula la ruta
            </button>
          </div>
        </PanelContainer>
        <MapRouting waypoints={this.state.waypoints} />
      </React.Fragment>
    );
  }
}
