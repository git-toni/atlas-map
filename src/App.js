import * as React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import SidePanel from "./SidePanel";
import Root from "./Root";
import { DataStateProvider } from "./context";
import Animation from "./Animation";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  //height: 100%;
  height: auto;
`;
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3em;
  width: 100%;
  z-index: 99;
`;
const SidePanelContainer = styled.div`
  height: 100%;
  position: fixed;
  top: 3em;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 14em;
  box-shadow: 3px 0px 12px #787878;
  transition: 0.3s ease-in-out;
`;
class App extends React.Component {
  constructor() {
    super();
    this.timerAnimation = setTimeout(() => {
      this.setState({ animation: false });
    }, 4500);
    this.state = {
      sidebarToggled: true,
      animation: true,
    };
  }

  toggleSidebar = () => this.setState(prev => ({ ...prev, sidebarToggled: !prev.sidebarToggled }));

  renderSidePanel = () => {
    const { sidebarToggled } = this.state;
    if (sidebarToggled) {
      return (
        <SidePanelContainer isToggled={sidebarToggled}>
          <SidePanel toggleSidebar={this.toggleSidebar} />
        </SidePanelContainer>
      );
    }
    return null;
  };

  render() {
    return this.state.animation ? (
      <Animation />
    ) : (
      <DataStateProvider>
        <Router>
          <Layout>
            <HeaderContainer>
              <Header toggleSidebar={this.toggleSidebar} />
            </HeaderContainer>
            <Content>
              {this.renderSidePanel()}
              <Root />
            </Content>
          </Layout>
        </Router>
      </DataStateProvider>
    );
  }
}

export default App;
