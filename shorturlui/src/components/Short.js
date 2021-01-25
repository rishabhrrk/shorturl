import React, { Component } from "react";
import axios from "axios";

class Short extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      newUrl: "",
      message: "",
    };
  }

  handleChange(e) {
    this.setState({ url: e.target.value });
  }

  handleSubmit(e) {
    const axios_url = process.env.REACT_APP_URL;
    const data = JSON.stringify({ url: this.state.url });

    axios
      .post(axios_url, { url: this.state.url })
      .then((result) => {
        console.log(JSON.stringify(result.data));
        this.setState({ newUrl: result.data["shortURL"], message: "" });
      })
      .catch((err) => {
        this.setState({ message: err.response.data["shortURL"], newUrl: "" });
        console.log(err.response);
      });

    e.preventDefault();
    return false;
  }

  render() {
    let message = "";
    let copyButton = "";
    if (this.state.newUrl) {
      message = (
        <div>
          <div className="input-group">
            <a
              className="btn btn-outline-primary"
              style={{ width: "100%" }}
              href={"//" + this.state.newUrl}
              target="_blank"
            >
              {this.state.newUrl}
            </a>
          </div>
          <div className="input-group-btn">
            <button
              className="btn btn-primary"
              onClick={(e) => {
                navigator.clipboard.writeText(this.state.newUrl);
                e.preventDefault();
                return false;
              }}
            >
              COPY
            </button>
          </div>
        </div>
      );
    } else if (this.state.message) {
      message = (<div className="btn btn-outline-primary" style={{ width: "100%" }}>{this.state.message}</div>);
    }
    return (
      <div>
        <div class="jumbotron text-center" style={{backgroundColor: "rgba(0,0,0,0)"}}>
          <h1>URL Shortener</h1>
          <p>Make LONG URLs SHORT</p>
          <form className="form-inline">
            <div className="input-group">
              <input
                className="form-control"
                size="50"
                required
                placeholder="Shorten a URL"
                value={this.state.url}
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={(e) => this.handleSubmit(e)}
            >
              Submit
            </button>
          </form>
          {message}
        </div>
      </div>
    );
  }
}

export default Short;
