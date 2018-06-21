import React, { Component } from "react";
import { Button, Icon, Input } from "semantic-ui-react";
import { slide as Menu } from "react-burger-menu";
import "../styles/burger.less";
import SinglePersonPage from "../views/SinglePersonPage";
import PersonTable from "./PersonTable";
import { inject, observer } from "mobx-react";
import { observable } from "mobx";

class SideBar extends React.Component {
  render() {
    return <Demo />;
  }
}

@observer
@inject(["personStore"])
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: "push",
      side: "left"
    };
  }

  @observable isMenuOpen = false;
  @observable selectedItem;

  componentDidMount() {
    this.isMenuOpen = true;
  }

  itemSelected = uuid => () => {
    console.log(uuid);
    this.selectedItem = uuid;
  };

  handleMessage = e => {
    console.log(e.target.value);
  };

  inputChanges = e => {
    this.props.personStore.setFilter(e.target.value);
  };

  render() {
    return (
      <div id="outer-container" style={miniBorder}>
        <Button color="blue" icon>
          <Icon name="users" />
        </Button>
        <Menu
          pageWrapId={"page-wrap"}
          isOpen={this.isMenuOpen}
          width={"60%"}
          heigth={"100%"}
          noOverlay
        >
          <div style={wrapperColor}>
            <Input
              icon="search"
              placeholder="Search..."
              onChange={this.inputChanges}
            />
            <PersonTable onItemSelected={this.itemSelected.bind(this)} />
          </div>
        </Menu>
        <main id="page-wrap">
          <div>
            <div style={singlePerson}>
              <SinglePersonPage item={this.selectedItem} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const singlePerson = {
  padding: "2px 0px 0px 0px"
};

const miniBorder = {
  padding: "1px 1px 1px 1px"
};

const wrapperColor = {
  backgroundColor: "#CCCCCC",
  height: "100%"
};

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

export default SideBar;
