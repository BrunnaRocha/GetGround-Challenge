const initialState = {
  books: [],
  totalCount: 10,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_BOOKS":
      return {
        books: payload.books,
        totalCount: payload.count,
      };
    default:
      return state;
  }
}
