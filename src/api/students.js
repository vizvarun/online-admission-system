import axios from "axios";
import { BaseUrl } from "./constant";
import { httpConfig } from "../helper/async-store-helper";

export const getStudents = async () => {
  const config = await httpConfig();
  return axios
    .get(`${BaseUrl}students/`, config)
    .then((response) => response.data);
};
