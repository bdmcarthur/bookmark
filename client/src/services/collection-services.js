import axios from "axios";

const collectionAPI = axios.create({
  baseURL: `/collection`,
});

export const addCollection = ({ name }) =>
  new Promise((resolve, reject) => {
    collectionAPI
      .post("/add", { name })
      .then((response) => {
        const newCollection = response.data;
        resolve(newCollection);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const getCollections = () =>
  new Promise((resolve, reject) => {
    collectionAPI
      .get("/load")
      .then((response) => {
        const listing = response.data;
        resolve(listing);
      })
      .catch((error) => {
        reject(error);
      });
  });
