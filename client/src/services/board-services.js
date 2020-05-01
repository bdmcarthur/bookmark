import axios from "axios";

const boardAPI = axios.create({
  baseURL: `/board`,
});

export const addBoard = ({ name, description, collections }) =>
  new Promise((resolve, reject) => {
    boardAPI
      .post("/add", { name, description, collections })
      .then((response) => {
        const board = response.data;
        resolve(board);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const getBoards = ({ collection }) =>
  new Promise((resolve, reject) => {
    boardAPI
      .post("/load", { collection })
      .then((response) => {
        const boards = response.data;
        resolve(boards);
      })
      .catch((error) => {
        reject(error);
      });
  });
