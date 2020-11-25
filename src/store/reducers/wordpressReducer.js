import * as Actions from "../actions";

const initState = {
  data: [],
  lastAction: null
};

const wordpressReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.FETCH_WORDPRESS_CONTENT_START:
      return {
        ...state,
        lastAction: action.type
      };

    case Actions.FETCH_WORDPRESS_CONTENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        lastAction: action.type
      };

    case Actions.FETCH_WORDPRESS_CONTENT_FAIL:
      return {
        ...state,
        lastAction: action.type
      };

    default:
      return state;
  }
};

export default wordpressReducer;
