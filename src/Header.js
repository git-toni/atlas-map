import * as React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { withRouter } from "react-router-dom";

const TITLES = {
  routes: "Rutes",
  map: "Mapa",
  discover: "Descobrir",
};
const HeaderContainer = styled.div`
  display: flex;
  background: #000;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 5px 15px;
  * {
    color: white;
  }
`;
const MainTitle = styled.span`
  font-size: 18px;
`;
const Header = ({ toggleSidebar, location }) => {
  const title = TITLES[location.pathname.split("/")[1]];
  return (
    <HeaderContainer>
      <FaBars onClick={toggleSidebar} />
      <MainTitle>{title}</MainTitle>
      <img src="src/static/TMB.svg" alt="" width="41px" height="31px" />
    </HeaderContainer>
  );
};

export default withRouter(Header);
