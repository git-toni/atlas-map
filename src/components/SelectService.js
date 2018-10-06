import React from "react";
import styled from "styled-components";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Wrapper = styled.div`
  svg {
    position: absolute;
    top: -34px;
    z-index: 1;
    font-size: 2em;
    left: 0;
    right: 0;
    margin-right: auto;
    stroke: #fff;
    margin-left: auto;
    bottom: 45px;
  }
`;

const ToggleButton = styled.div`
  border-top: 3px solid #e31713;

  :after {
    content: "";
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    cursor: pointer;
    top: -100px;
    width: 100px;
    height: 100px;
    background: #e31713;
    clip-path: circle(50% at 50% 100%);
  }
`;

const SquareService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90px;
  width: calc(100% * (1 / 4) - 10px);
  flex-grow: 1;
  margin: 5px;
  background-color: #ffffff;
  box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.04);
  opacity: 0.5;

  img {
    height: 50%;
    margin-bottom: 10px;
  }

  &.service-active {
    opacity: 1;
  }
`;

const WrapperService = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #f0f0f0;
  padding: 10px;
  display: none;

  &.active {
    display: flex;
  }
`;

class SelectService extends React.Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  activeService = service => {
    this.props.toggleServicesActives && this.props.toggleServicesActives(service);
  };

  render() {
    const { servicesActives } = this.props;

    return (
      <Wrapper>
        <div onClick={this.toggle}>
          {this.state.open ? (
            <FiChevronDown />
          ) : (
            <FiChevronUp />
          )}
          <ToggleButton />
        </div>
        <WrapperService className={this.state.open ? "active" : ""}>
          <SquareService className={servicesActives["metro"] ? "service-active" : ""} onClick={() => this.activeService("metro")}>
            <img src="src/static/metro-logo.png" />
            <p>Metro</p>
          </SquareService>
          <SquareService className={servicesActives["fgc"] ? "service-active" : ""} onClick={() => this.activeService("fgc")}>
            <img src="src/static/fgc-logo.png" />
            <p>FGC</p>
          </SquareService>
          <SquareService className={servicesActives["rodalies"] ? "service-active" : ""} onClick={() => this.activeService("rodalies")}>
            <img src="src/static/renfe-logo.png" />
            <p>Rodalies</p>
          </SquareService>
          <SquareService className={servicesActives["bus"] ? "service-active" : ""} onClick={() => this.activeService("bus")}>
            <img src="src/static/bus-logo.png" />
            <p>Bus</p>
          </SquareService>
          <SquareService className={servicesActives["bicing"] ? "service-active" : ""} onClick={() => this.activeService("bicing")}>
            <img src="src/static/bicing-logo.png" />
            <p>Bicing</p>
          </SquareService>
          <SquareService className={servicesActives["tram"] ? "service-active" : ""} onClick={() => this.activeService("tram")}>
            <img src="src/static/tram-logo.png" />
            <p>TRAM</p>
          </SquareService>
          <SquareService className={servicesActives["maps"] ? "service-active" : ""} onClick={() => this.activeService("maps")}>
            <img src="src/static/mapa-logo.png" />
            <p>Mapes</p>
          </SquareService>
          <SquareService className={servicesActives["events"] ? "service-active" : ""} onClick={() => this.activeService("events")}>
            <img src="src/static/events-logo.png" />
            <p>Events</p>
          </SquareService>
        </WrapperService>
      </Wrapper>
    );
  }
}

export default SelectService;
