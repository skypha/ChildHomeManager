// @flow

import React from "react";
import PersonTable from "../components/PersonTable";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from "semantic-ui-react";
import SideBar from "../components/SideBarContainer";

import SinglePersonPage from "./SinglePersonPage";

class Home extends React.Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;

    /*
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable style={sidebarStyle} as={Segment}>
          <Sidebar
            style={sidebarStyle}
            as={<PersonTable />}
            animation="uncover"
            width="very wide"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <PersonTable />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <SinglePersonPage />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );*/
    return (
      <div>
        <SideBar />
      </div>
    );
  }
}

export default Home;
