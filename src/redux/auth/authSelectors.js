export const selectUserName = state => state.auth.user.name;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
