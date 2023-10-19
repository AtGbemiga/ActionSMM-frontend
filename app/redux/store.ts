"use client";
import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./features/emailTransport/emailSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
