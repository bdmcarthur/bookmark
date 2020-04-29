import axios from "axios";

const boardAPI = axios.create({
  baseURL: `/board`,
});

export const addBoard = ({ name, description, collections }) =>
  new Promise((resolve, reject) => {
    boardAPI
      .post("/add", { name, description, collections })
      .then((response) => {
        const newBoard = response.data;
        resolve(newBoard);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const getBoards = () =>
  new Promise((resolve, reject) => {
    boardAPI
      .get("/load")
      .then((response) => {
        const listing = response.data;
        resolve(listing);
      })
      .catch((error) => {
        reject(error);
      });
  });
