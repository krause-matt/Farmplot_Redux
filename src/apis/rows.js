import axios from "axios";

export default axios.create({
  baseURL: "https://garden-plotter-api.herokuapp.com/"
});