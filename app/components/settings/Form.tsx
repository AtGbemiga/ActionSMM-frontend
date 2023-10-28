"use client";
import { authFunc } from "@/lib/authFunc";
import { useState, useEffect } from "react";
import styles from "./settings.module.css";

export const Form = ({ loginEmail }: { loginEmail: string }): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  useEffect(() => {
    console.log(loginEmail);
    setEmail(loginEmail);
  }, [loginEmail]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value);
  }

  // disable submit button when no passing email or password
  const disable = password.length < 6 || password !== retypePassword;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("submit clicked");

    // if (!email) return;
    await authFunc({ email, password }, "resetPassword");
    console.log("password changed");
    setEmail("");
    setPassword("");
    // function to trigger side popup acknowledging change status here. Then clear input fields
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-100 p-5">
        <div>
          <div className={`mb-3 ${styles.hidden}`}>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group d-flex align-items-center">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="basic-addon3 basic-addon4"
                onChange={handleInputChange}
                autoComplete="email"
                name="email"
                value={email}
                required
                aria-required
              />
            </div>
          </div>
          <label htmlFor="password" className="form-label">
            New Password
          </label>
          <div className="input-group d-flex align-items-center">
            <span className="input-group-text" id="basic-addon3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className={`bi bi-lock-fill`}
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="basic-addon3 basic-addon4"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              name="new-password"
              value={password}
              required
              aria-required
            />
          </div>
          {password !== "" && password.length < 6 && (
            <div className={` form-text text-danger`} id="basic-addon4">
              Password must be at least 6 characters.
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="retypePassword" className="form-label">
            Confirm Password
          </label>
          <div className="input-group d-flex align-items-center">
            <span className="input-group-text" id="basic-addon3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className={`bi bi-lock-fill`}
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
            </span>
            <input
              type="password"
              className="form-control"
              id="retypePassword"
              aria-describedby="basic-addon3 basic-addon4"
              onChange={(e) => setRetypePassword(e.target.value)}
              autoComplete="new-password"
              name="retypePassword"
              value={retypePassword}
              required
              aria-required
            />
          </div>
          {password !== retypePassword && (
            <div className={` form-text text-danger`} id="basic-addon4">
              Passwords do not match
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary w-100"
          disabled={disable}
          aria-disabled={disable}
          name="submit"
        >
          Change Password
        </button>
      </form>
    </>
  );
};
