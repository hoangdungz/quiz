import React, { Component } from "react";

class QuizEnd extends Component {
  handleResetClick = () => {
    this.props.resetClickHandler();
  };
  render() {
    return (
      <div>
        <p>KIMOCHI</p>
        <a href="" onClick={this.handleResetClick}>
          Reset Quiz
        </a>
      </div>
    );
  }
}
export default QuizEnd;
