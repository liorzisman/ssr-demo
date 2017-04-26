export const togglePost = (id) => {
  return {
    type: 'TOGGLE_LIKE',
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
