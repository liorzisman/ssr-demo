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

function getInitialState(num) {
  const result = [];
  for (let i = 0; i < num; i++) result.push({ id: i, imageUrl: reactUrl, description: i, title: i});
  return result;
}

export const posts = (state = getInitialState(100), action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE':
      return state.map(t =>
        post(t, action)
      );
    default:
      return state;
  }
};