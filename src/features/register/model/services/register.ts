import { createAsyncThunk } from "@reduxjs/toolkit";

import { extractErrorMessage, httpClient } from "@/shared/api";

import { registerActions } from "../slice/registerSlice";
import { FormSteps } from "../types/registerForm";

type RegisterArgs = {
  email?: string;
  phone?: string;
  password: string;
};

export const register = createAsyncThunk<
  void,
  RegisterArgs,
  { rejectValue: string }
>("features/register", async (authData, thunkApi) => {
  try {
    await httpClient.post("/auth/register", authData);
    thunkApi.dispatch(registerActions.setStep(FormSteps.VERIFICATION));
  } catch (error) {
    thunkApi.dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
    return thunkApi.rejectWithValue(extractErrorMessage(error));
  }
});
