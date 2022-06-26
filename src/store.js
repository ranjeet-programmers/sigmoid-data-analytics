import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { reducer as formReducer } from "redux-form";
import { sigmoidApi } from "./services/sigmoidApi";
import loginReducer from "./pages/login/loginSlice";

export const store = configureStore({
  reducer: {
    [sigmoidApi.reducerPath]: sigmoidApi.reducer,
    form: formReducer,
    login: loginReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sigmoidApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
