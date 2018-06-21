import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Details",
    render: () => (
      <Tab.Pane>
        <div>Tab 1 Content</div>
        <div>Tab 2 Content</div>
        <div>Tab 3 Content</div>
        <div>Tab 4 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
        <div>Tab 1 Content</div>
      </Tab.Pane>
    )
  },
  { menuItem: "Medication", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Files", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];

const TabExampleBasic = () => <Tab panes={panes} />;

class SinglePersonPage extends React.Component {
  render() {
    console.log("Details:" + this.props.item);
    return <div>{TabExampleBasic()}</div>;
  }
}

export default SinglePersonPage;
