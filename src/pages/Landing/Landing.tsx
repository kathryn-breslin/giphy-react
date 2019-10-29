import React, { Component } from "react";
import { Input, Gifs } from "../../components";
import API from "../../utils/API";
import "./Landing.css";

interface IData {
  data: any;
  title: string;
  images: any;
  fixed_height_small: string;
}

interface IGif {
  gifs: IData[];
  title: string;
  images: any;
  fixed_height_small: string;

  search: string;
}

class Landing extends Component {
  state: IGif = {
    gifs: [],
    title: "",
    search: "", 
    images: "",
    fixed_height_small: ""

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
    API.search(search).then(
      res => 
      this.setState({ gifs: res.data.data, search: "" })
    //   console.log(res.data.data)
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
                      <div className="row no-gutters">
                        <div className="col-sm-4">
                          <img
                            src={gif.images.fixed_height_small}
                            className="card-img"
                            alt={gif.title}
                          />
                        </div>
                        <div className="col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              {gif.title}
                            </h5>
                            <p className="card-text">
                              {/* {item.volumeInfo.description} */}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Gifs>
              ) : (
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
