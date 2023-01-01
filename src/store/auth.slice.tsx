import { createSlice } from "@reduxjs/toolkit";

interface SLICENATURE {
  currentUser: null | any;
}

const _: SLICENATURE = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: _,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const AuthenticationReducer = authSlice.reducer;
export const { setCurrentUser } = authSlice.actions;
