import "../App.css";
import React from "react";
import { isAlphaNumeric } from "../utils/isAlphaNumeric";
import { baseUrl } from "../config";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      postId: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (isAlphaNumeric(this.state.value)) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note: this.state.value }),
      };
      const url = baseUrl + "addNote";
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ postId: data.id });
        });
    } else {
      console.log("Not a valid string");
    }
    event.preventDefault();
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
          <input id="button" type="submit" value="Save" />
        </form>
        <div>
          {this.state.postId !== undefined ? (
            <div className="successText">
              {" "}
              Note has been inserted with id: {this.state.postId}{" "}
            </div>
          ) : (
            <div className="failureText">Enter a valid note</div>
          )}
        </div>
      </div>
    );
  }
}

export default InputComponent;
