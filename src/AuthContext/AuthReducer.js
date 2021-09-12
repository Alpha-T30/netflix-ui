const authReducer = (state, action) => {
  switch (action.type) {
    case "login_start":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "login_success":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "login_failure":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "logout":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return state;
  }
};

export default authReducer;
