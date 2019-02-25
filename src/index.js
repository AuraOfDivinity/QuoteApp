import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./Components/QuoteBox";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      CurrentQuote: ""
    };
  }
  render() {
    return (
      <div>
        <div id="quote-box">
          <QuoteBox />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
