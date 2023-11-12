"use client";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LoginPage.module.css";
import { useState, useEffect } from "react";
import { authFunc } from "@/lib/authFunc";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { BootstrapIcon } from "../Global/assets/BootstrapIconWrapper";

export const Form = (): JSX.Element => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [error_msg, setError_msg] = useState("");
  const router = useRouter();
  const [token, setToken] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  useEffect(() => {
    setToken(Cookies.get("token") ?? "");

    if (token) {
      router.push("/plans");
    }
  }, [token, router]);

  function handleRegexCheck(e: React.ChangeEvent<HTMLInputElement>): void {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //test pattern via regex
    // if regex fails, setError to true
    !pattern.test(e.target.value) && setError(true);
    // if regex passes, setError to false
    pattern.test(e.target.value) && setError(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    handleRegexCheck(e);
    setEmail(e.target.value);
  }

  // disable submit button when no passing email or password
  const disable = password.length < 6 || email === "Fail";

  function handleBlurEvent(e: React.FocusEvent<HTMLInputElement>): void {
    if (email === undefined) {
      setEmail("");
      setError_msg("Email address is a required field.");
    } else if (email !== undefined) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      !pattern.test(e.target.value) &&
        setError_msg("Enter a valid email address. For example: name@site.com");
    }
  }

  // toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // identifier is a string, used to tell the Function what URL to use in the fetch.
    const res = await authFunc({ email, password }, "login");

    if (!email) return;
    localStorage.setItem("email", email);

    router.push("/plans");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="input-group d-flex align-items-center">
            <span className="input-group-text" id="basic-addon3">
              <BootstrapIcon
                className={`bi bi-at ${styles.imgs}`}
                width="24"
                height="24"
                viewBox="0 0 16 16"
                path="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
              />
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="basic-addon3 basic-addon4"
              onChange={handleInputChange}
              onBlur={handleBlurEvent}
              autoComplete="email"
              name="email"
              value={email}
              required
              aria-required
              autoFocus
            />
            {email !== "" && email !== undefined && !error && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={`${styles.font_awesome_icon} ms-1`}
              />
            )}
          </div>
          <div
            className={`${styles.error_msg} form-text text-danger mb-2`}
            id="basic-addon4"
          >
            {error_msg}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="input-group d-flex align-items-center">
            <span className="input-group-text" id="basic-addon3">
              <BootstrapIcon
                height="24"
                width="24"
                className={`bi bi-lock-fill ${styles.imgs}`}
                path="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                viewBox="0 0 16 16"
              />
            </span>
            <input
              type={passwordVisibility ? "text" : "password"}
              className="form-control"
              id="password"
              aria-describedby="basic-addon3 basic-addon4"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
              name="current-password"
              value={password}
              required
              aria-required
            />
            {password && (
              <span
                className={`input-group-text ${styles.eyeSpan}`}
                id="basic-addon3"
                onClick={togglePasswordVisibility}
              >
                {passwordVisibility ? (
                  <BootstrapIcon
                    path="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                    pathOne="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                    className={`bi bi-eye ${styles.eyeClose}`}
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                  />
                ) : (
                  <BootstrapIcon
                    path="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                    pathOne="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                    pathTwo="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                    width="24"
                    height="24"
                    className={`bi bi-eye-slash ${styles.eyeClose}`}
                    viewBox="0 0 16 16"
                  />
                )}
              </span>
            )}
            {password !== "" && password.length >= 6 && (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={`${styles.font_awesome_icon} ms-1`}
              />
            )}
          </div>
          {password !== "" && password.length < 6 && (
            <div
              className={`${styles.error_msg} form-text text-danger`}
              id="basic-addon4"
            >
              Password must be at least 6 characters.
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
          Login
        </button>
      </form>
    </>
  );
};
