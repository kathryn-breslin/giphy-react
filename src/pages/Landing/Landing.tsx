import React, { Component } from "react";
import API from "../../utils/API";

interface IData {
  title: string; 
}

interface IGif {
  gifs: IData[];
  title: string;
  search: string;
}

class Landing extends Component {
  state: IGif = {
    gifs: [], 
    title: "", 
    search: ""
  };

//   searchGifs = (search: string)

  render() {
    return (
      <div>
        <h1>Hello World! This is the landing page.</h1>
      </div>
    );
  }
}

export default Landing;
