import { createAsyncThunk } from "@reduxjs/toolkit";

import { extractErrorMessage, httpClient } from "@/shared/api";

type ResendArgs = {
  email?: string;
  phone?: string;
};

export const resendCode = createAsyncThunk<
  void,
  ResendArgs,
  { rejectValue: string }
>("features/resendCode", async (resendData, thunkApi) => {
  try {
    await httpClient.post("/auth/resend-code", resendData);
    return;
  } catch (error) {
    return thunkApi.rejectWithValue(extractErrorMessage(error));
  }
});
