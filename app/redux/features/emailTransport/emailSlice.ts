"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface EmailState {
  value: string;
}

const initialState: EmailState = {
  value: "starter",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailTransport: (state, action: PayloadAction<string>) => {
      const email = action.payload;
      state.value = email;
    },
  },
});

export const { setEmailTransport } = emailSlice.actions;

export const emailRootState = (state: RootState) => state.email.value;

export default emailSlice.reducer;
