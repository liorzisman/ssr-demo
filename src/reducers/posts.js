
const title= ['Tempor cupidatat fugiat officia aliquip', 'Officia aliquip enim Lorem tempor', 'Pariatur aliquip enim magna tempor'];
const desc = ['Magna tempor cupidatat id officia aliquip enim magna. Cupidatat id officia aliquip enim magna tempor cupidatat id officia aliquip enim magna tempor cupidatat.',
              'Id pariatur aliquip enim magna tempor cupidatat. Pariatur aliquip enim magna tempor cupidatat id pariatur aliquip enim.',
              'Minim ullamco deserunt in proident amet esse minim. Deserunt in proident amet esse minim ullamco deserunt in proident amet esse minim ullamco deserunt.'];
const urls = ['/static/plain-bits.png', '/static/plain-sql.png', '/static/plain-hip.png'];

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

function getInitialState(num) {
  const result = [];
  for (let i = 0; i < num; i++) result.push({ id: i, imageUrl: urls[i % 3], description: desc[i % 3], title: title[i % 3]});
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