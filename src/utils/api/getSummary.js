import Axios from "axios";

export default function getSummary() {
  const header = {
    "X-Auth-Token": "5cf9dfd5-3449-485e-b5ae-70a60e997864",
  };
  let resp = Axios.get("https://api.covid19api.com/summary", header);
  return resp;
}
