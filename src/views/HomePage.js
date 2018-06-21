/**
 * Created by eatong on 17-3-13.
 */
import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="">
        This is home page...
        <br />
        <Link to="/todo">todo....</Link>
      </div>
    );
  }
}

HomePage.propTypes = {};
export default HomePage;
