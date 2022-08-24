import axios from "axios";
// import env from "./env";

export default axios.create({
  baseURL: "http://185.4.30.29:8090/api/portal",
  headers: {
    "Content-type": "application/json"
  }
});