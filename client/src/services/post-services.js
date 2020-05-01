import axios from "axios";

const postAPI = axios.create({
  baseURL: `/post`,
});

export const addPost = ({ link, name, description, board, type }) =>
  new Promise((resolve, reject) => {
    postAPI
      .post("/add", { link, name, description, board })
      .then((response) => {
        const post = response.data;
        resolve(post);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const getPosts = ({ board }) =>
  new Promise((resolve, reject) => {
    postAPI
      .post("/load", { board })
      .then((response) => {
        const posts = response.data;
        resolve(posts);
      })
      .catch((error) => {
        reject(error);
      });
  });
