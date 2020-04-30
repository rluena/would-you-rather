const initialState = {
  authenticated: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };

    default:
      return state;
  }
};
