import axios from "axios";

export default {
  search: function(search: string) {
    return axios.get("https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=dc6zaTOxFJmzC&limit=10&rating=PG");
  }
}