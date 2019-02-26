import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./Components/QuoteBox";

import "./styles.css";

const quoteList = [
  {
    quoteId: 1,
    quote: "All hell will break lose, if you make your parents mad!",
    author: "Asel Peiris"
  },
  {
    quoteId: 2,
    quote: "Whatever you are be a good one",
    author: "Abraham Lincoln"
  },
  {
    quoteId: 3,
    quote: "Whatever you are be a good one",
    author: "Abraham Lincoln"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      CurrentQuote: "",
      Quotes: quoteList
    };
  }
  render() {
    return (
      <div>
        <div id="quote-box">
          <QuoteBox Quotes={this.state.Quotes[1].quote} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
