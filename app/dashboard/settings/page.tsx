"use client";
import { useAppSelector, useAppDispatch } from "@/app/redux/hook";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/app/redux/store";
import {
  setEmailTransport,
  emailRootState,
} from "@/app/redux/features/emailTransport/emailSlice";
import { Form } from "@/app/components/settings/Form";

// interface SettingsProps {
//   test: string;
// }

function Settings(): JSX.Element {
  // const email = useAppSelector(emailRootState);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, []);

  return (
    <div>
      <Form loginEmail={email ?? ""} />
    </div>
  );
}

export default Settings;
