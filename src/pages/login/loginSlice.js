import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const token = localStorage.getItem("token");
  return token
    ? { isLogin: true, token: token }
    : { isLogin: false, token: null };
};

const slice = createSlice({
  name: "login",
  initialState: getInitialState(),
  reducers: {
    setCredentials: (state, { payload }) => {
      if (payload.token) {
        localStorage.setItem("token", payload.token);
        state.token = payload.token;
        state.isLogin = true;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isLogin = false;
    },
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const isUserLoginSelector = (state) => state.login.isLogin;
