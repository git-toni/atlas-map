import * as React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  background: #152935;
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
const Header = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <FaBars onClick={toggleSidebar} />
      <MainTitle>Descobrir</MainTitle>
      <img src="src/static/TMB.svg" alt="" width="41px" height="31px" />
    </HeaderContainer>
  );
};

export default Header;
