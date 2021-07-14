import apiClient from "./apiClient";
import axios from "axios";

export const covidCaseAll = async () => {
  return await apiClient({
    method: "get",
    url: "/all",

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return [];
    });
};

export const jhucsse = async () => {
  return await axios({
    method: "get",
    url: "https://corona.lmao.ninja/v2/jhucsse",

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return [];
    });
};
