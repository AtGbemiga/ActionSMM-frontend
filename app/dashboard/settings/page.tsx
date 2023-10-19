"use client";
import { useAppSelector, useAppDispatch } from "@/app/redux/hook";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/app/redux/store";
import {
  setEmailTransport,
  emailRootState,
} from "@/app/redux/features/emailTransport/emailSlice";

// interface SettingsProps {
//   test: string;
// }

function Settings(): JSX.Element {
  const email = useAppSelector(emailRootState);
  const dispatch = useAppDispatch();

  return <div>email: {email}</div>;
}

export default Settings;
