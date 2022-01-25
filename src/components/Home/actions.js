import { PostRequest } from "../../utils/api.js";

export const fetchBooks = async (page, itemsPerPage) => {
  const payload = await PostRequest(`/api/books`, {
    page,
    itemsPerPage,
    filters: [{ type: "all", values: [""] }],
  });

  return {
    type: "FETCH_BOOKS",
    payload: payload.data,
  };
};
