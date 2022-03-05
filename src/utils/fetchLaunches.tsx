import axios from "axios";

const fetchLaunches = async () => {
  return axios
    .get("https://api.spacexdata.com/v4/launches/upcoming")
    .then((res) => res)
    .catch((e) => Promise.reject(e));
};

export default fetchLaunches;
