import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "./authTypes";

type TAuthState = {
  userDetails?: TUser | null;
  token?: string;
  loading: boolean;
  error: string;
  successMsg?: string;
  resetRequestSuccess?: boolean;
  passwordResetSuccess?: boolean;
  isLoggedIn: boolean;
};

const initialState: TAuthState = {
  userDetails: null,
  token: "",
  loading: false,
  isLoggedIn: false,
  error: "",
  successMsg: "",
  resetRequestSuccess: false,
  passwordResetSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {};

export default authSlice.reducer;
