import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import SidePanel from "./SidePanel";
import { Root } from "./scenes";
import { DataStateProvider } from "./context";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const HeaderContainer = styled.div`
  height: 3em;
  z-index: 99;
`;
const MapContainer = styled.div`
  height: 100vh;
`;
const SidePanelContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 14em;
  box-shadow: 3px 0px 12px #787878;
`;
class App extends React.Component {
  state = {
    sidebarToggled: true,
  };

  toggleSidebar = () => this.setState(prev => ({ ...prev, sidebarToggled: !prev.sidebarToggled }));

  renderSidePanel = () => {
    const { sidebarToggled } = this.state;
    if (sidebarToggled) {
      return (
        <SidePanelContainer isToggled={sidebarToggled}>
          <SidePanel />
        </SidePanelContainer>
      );
    }
    return null;
  };
  render() {
    return (
      <Layout>
        <HeaderContainer>
          <Header toggleSidebar={this.toggleSidebar} />
        </HeaderContainer>
        <Content>
          {this.renderSidePanel()}
          <DataStateProvider>
            <Root />
          </DataStateProvider>
        </Content>
      </Layout>
    );
  }
}

export default App;
