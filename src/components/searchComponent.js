import "../App.css";
import React from "react";
import { isAlphaNumeric } from "../utils/isAlphaNumeric";
import { baseUrl } from "../config";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      postId: "",
      result: [],
      userMessage: "Enter a search keyword",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (isAlphaNumeric(this.state.value)) {
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const url = baseUrl + "search?keyword=" + this.state.value;
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ result: data });
        });
    } else {
      console.log("Not a valid string");
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            id="input"
            type="text"
            name="some-text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input id="button" type="submit" value="Search" />
        </form>
        <div className="searchContainer">
          {this.state.result.length > 0 ? (
            this.state.result.map((res) => {
              return (
                <div key={res.id} className="searchItem">
                  {res.note}
                </div>
              );
            })
          ) : (
            <div className="failureText">{this.state.userMessage}</div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchComponent;
