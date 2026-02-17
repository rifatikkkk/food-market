import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { userActions } from "@/entities/user";

import { LOCAL_STORAGE_USER_KEY } from "@/shared/config";

type LoginArgs = {
  email?: string;
  phone?: string;
  password?: string;
};

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  "features/login",
  async (authData, thunkApi) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        authData,
      );
      const user = res.data;

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      thunkApi.dispatch(userActions.setUserData(user));
      return;
      // eslint-disable-next-line
    } catch (error) {
      return thunkApi.rejectWithValue("login error");
    }
  },
);
