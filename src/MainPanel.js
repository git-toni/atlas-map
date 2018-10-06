import * as React from "react";
import styled from "styled-components";

const PanelContainer = styled.div`
  display: flex;
  background: blue;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;
const MainPanel = () => {
  console.log("");
  return <PanelContainer>Im a panel</PanelContainer>;
};

export default MainPanel;
