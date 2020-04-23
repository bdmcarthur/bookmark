import axios from "axios";

const linkAPI = axios.create({
  baseURL: `/link`
});

export const addLink = ({ link, name, description, board }) =>
  new Promise((resolve, reject) => {
    linkAPI
      .post("/add", { link, name, description, board })
      .then(response => {
        const listing = response.data;
        resolve(listing);
      })
      .catch(error => {
        reject(error);
      });
  });

export const getLinks = () =>
  new Promise((resolve, reject) => {
    linkAPI
      .get("/load")
      .then(response => {
        const listing = response.data;
        resolve(listing);
      })
      .catch(error => {
        reject(error);
      });
  });