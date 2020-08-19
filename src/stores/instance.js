import axios from "axios";

const instance = axios.create({
  baseURL: "https://equipment-trader.herokuapp.com/",
});

export default instance;
