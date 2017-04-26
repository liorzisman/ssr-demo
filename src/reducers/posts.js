const post = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state,
        { liked: !state.liked }
      );
    default:
      return state;
  }
};

const reactUrl = 'http://devstickers.com/assets/img/pro/cew3.png';

const initialState = [
  { id: 0, imageUrl: reactUrl, description: 'Pic One', title: 'Pick one'},
  { id: 1, imageUrl: reactUrl, description: 'Pic Two', title: 'Pick Two'},
  { id: 2, imageUrl: reactUrl, description: 'Pic Three', title: 'Pick Three'}
];

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return state.map(t =>
        post(t, action)
      );
    default:
      return state;
  }
};