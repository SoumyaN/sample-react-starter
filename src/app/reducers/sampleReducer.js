const initialState = {
  message: ''
};

const createShowMessageState = (state, action) => {
  return Object.assign({}, state, {
    message: action.data
  });
};

export default function sample(state = initialState, action) {
  switch (action.type) {
    case '/show-message':
      return createShowMessageState(state, action);
    default:
      return state;
  }
}
