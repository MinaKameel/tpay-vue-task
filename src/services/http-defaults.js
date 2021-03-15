import axios from "axios";

export default function setHttpDefaults() {
  axios.defaults.baseURL = "https://api.mocki.io/";
}
