const getIsAuthenticated = state => Boolean(state.authorization.token);

const getUsername = state => state.authorization.user.name;

export default { getIsAuthenticated, getUsername };
