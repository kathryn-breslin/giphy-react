import React, { Component } from "react";
import { Input } from "../../components";
// import API from "../../utils/API";

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

  handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value });
  };

  handleFormSearch = (event: { preventDefault: () => void }) => {
    const { search } = this.state;

    event.preventDefault();
    this.setState({ search: search });

    // this.searchGifs(search);
    console.log("Search:" + this.state.search);
  };

//   searchGifs = (search: string) => {
//       console.log("Search: " + search);
//   }

  render() {
    const { search } = this.state;

    return (
      <div>
        {/* <h1>Hello World! This is the landing page.</h1> */}
        <Input
        search={search}
        handleFormSearch={this.handleFormSearch}
        handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Landing;
