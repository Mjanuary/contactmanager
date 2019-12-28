import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    // console.log("ComponentDidMount...");
    // this is where you put all the http calls ajax here
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  UNSAFE_componentWillMount() {
    console.log("component will mount...");
    // called before the commponent
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ...");
  }

  UNSAFE_componentWillUpdate() {
    // console.log("componentWillUpdate ...");
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    // console.log("Component will receive props...");
    return null;
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
