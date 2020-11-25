import Axios from "axios";

export default function getSummary() {
  const header = {
    "X-Auth-Token": process.env.X_AUTH_TOKEN,
  };
  let resp = Axios.get("https://api.covid19api.com/world", header);
  return resp;
}