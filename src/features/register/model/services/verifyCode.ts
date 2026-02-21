import { createAsyncThunk } from "@reduxjs/toolkit";

import { applyUserSession, type User } from "@/entities/user";

import { extractErrorMessage, httpClient } from "@/shared/api";

type VerifyArgs = {
  email?: string;
  phone?: string;
  code: string;
};

export const verifyCode = createAsyncThunk<
  User,
  VerifyArgs,
  { rejectValue: string }
>("features/verifyCode", async (verifyData, thunkApi) => {
  try {
    const res = await httpClient.post<User>("/auth/verify", verifyData);
    const user = res.data;

    applyUserSession(user, thunkApi.dispatch);

    return user;
  } catch (error) {
    return thunkApi.rejectWithValue(extractErrorMessage(error));
  }
});
