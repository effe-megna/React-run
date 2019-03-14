import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Stopwatch extends React.Component {
  state = {
    lapse: 0,
    running: false
  };

  runStopwatch = () => {
    this.setState({
      running: true
    });

    this.intervalID = setInterval(() => {
      this.setState(prevState => {
        return {
          lapse: prevState.lapse + 1
        };
      });
    }, 1000);
  };

  pauseStopWatch = () => {
    this.setState(
      {
        running: false
      },
      () => {
        clearInterval(this.intervalID);
      }
    );
  };

  clearStopWatch = () => {
    this.setState({
      running: false,
      lapse: 0
    });
    clearInterval(this.intervalID);
  };

  render() {
    const { lapse, running } = this.state;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <label>{lapse}</label>
        <div>
          <button
            onClick={() => {
              if (running) {
                this.pauseStopWatch();
              } else {
                this.runStopwatch();
              }
            }}
          >
            {running ? "STOP" : "RUN"}
          </button>
          <button onClick={this.clearStopWatch}>Clear</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<Stopwatch />, rootElement);
