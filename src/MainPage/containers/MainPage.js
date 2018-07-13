import React, { Component } from "react";
import { connect } from "react-redux";
class MainPage extends Component {
  render() {
    return (
      <div>
        <header className="header">
          This APP for QWERTY {console.log(this.props.mainState)}
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    mainState: state
  };
};

export default connect(mapStateToProps)(MainPage);
