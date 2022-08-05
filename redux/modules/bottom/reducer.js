const bottomState = {
  isShow: false,
}

export const bottomReducer = (state = bottomState, action) => {
  switch (action.type) {
      case "OPEN_BOTTOM": {
      return {
        ...state,
        isShow: true,
      };
    }
    case "CLOSE_BOTTOM": {
      return {
        ...state,
        isShow: false,
      };
    }
    default:
      return state;
  }
};
