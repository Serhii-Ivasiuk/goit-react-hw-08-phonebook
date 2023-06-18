export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;
export const getIsRefreshing = state => state.auth.isRefreshing;
