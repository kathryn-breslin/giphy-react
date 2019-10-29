import React, { Component } from "react";
import { Input, Gifs } from "../../components";
import API from "../../utils/API";
import "./Landing.css";

interface IData {
  data: any;
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

    this.searchGifs(search);
    console.log("Search:" + this.state.search);
  };

  searchGifs = (search: string) => {
    console.log("Gif Search: " + search);
    API.search(search).then(res =>
      this.setState({ gifs: res.data.data, search: "" })
    // console.log(res.data.data[0].title)
    );
      console.log("Gifs array state: " + JSON.stringify(this.state.gifs));
  };

  render() {
    const { search, gifs } = this.state;

    return (
      <div>
        <Input
          search={search}
          handleFormSearch={this.handleFormSearch}
          handleInputChange={this.handleInputChange}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
                {gifs.length ? (
                    <Gifs>
                        {gifs.map(gif => (
                            <div className="card">
                                <h5>{gif.title}</h5>
                            </div>
                        ))}
                    </Gifs>
                ): (
                    <h1>No Gifs Yet!</h1>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
