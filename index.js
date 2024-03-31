import { data } from "./data.js";
import shortUUID from "short-uuid";

const editedData = [...data];

editedData.forEach((item) => {
  if (item.isEventAttended) {
    item.password = shortUUID().generate();
  }
});

console.log(editedData);
