import * as React from "react";
import styled from "styled-components";
import { FiNavigation, FiStar, FiInfo, FiSettings, FiMap, FiMapPin } from "react-icons/fi";

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  padding: 25px 0px;
  z-index: 99;
`;
const MenuItemContainer = styled.div`
  padding: 12px 0px;
  padding-left: 22px;
  background: ${({ isSelected }) => (isSelected ? "#f0f0f0" : "white")};
  border-left: 3px solid ${({ isSelected }) => (isSelected ? "#e31713" : "transparent")};
  display: flex;
  align-items: center;
`;
const MenuItemIcon = styled.div`
  margin-right: 8px;
  * {
    color: #e31713;
  }
`;
const MenuItemLabel = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
const MenuItem = ({ onClick, isSelected, icon, label }) => (
  <MenuItemContainer onClick={onClick} isSelected={isSelected}>
    <MenuItemIcon>{icon}</MenuItemIcon>
    <MenuItemLabel>{label}</MenuItemLabel>
  </MenuItemContainer>
);
const handleMenuSelect = path => () => {
  console.log("navigate to ", path);
};
const SidePanel = () => {
  console.log("");
  return (
    <SideContainer>
      <MenuItem onClick={handleMenuSelect("routes")} icon={<FiNavigation />} label="Rutes" />
      <MenuItem onClick={handleMenuSelect("maps")} isSelected icon={<FiMap />} label="Mapes" />
      <MenuItem onClick={handleMenuSelect("discover")} icon={<FiStar />} label="Descobrir" />
      <MenuItem onClick={() => {}} icon={<FiMapPin />} label="Punts d'interès" />
      <MenuItem onClick={() => {}} icon={<FiInfo />} label="Informació útil" />
      <MenuItem onClick={() => {}} icon={<FiSettings />} label="Configuració" />
    </SideContainer>
  );
};

export default SidePanel;
