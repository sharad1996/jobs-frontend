import React from "react";
import "./Footer.scss";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import Api from "../services/api";
import SuccessAnimation from "../GeneralComponents/SuccessAnimation";

const shouldShow = () => {
  const timeSpan = window.localStorage.getItem("dateGetUpdates");
  if (!timeSpan) return true;

  return new Date().getTime() - timeSpan > 1000 * 60 * 60 * 24 * 30; // 30 days
};
const updateShouldShow = () => {
  window.localStorage.setItem("dateGetUpdates", new Date().getTime());
};
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len, no-useless-escape
  return re.test(String(email).toLowerCase());
}
export default function () {
  const emailRef = React.useRef();
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(shouldShow());
  const [err, setErr] = React.useState("");
  const [showAnimation, setShowAnimation] = React.useState(false);

  function handleClose() {
    setErr("");
    updateShouldShow();
    setShow(shouldShow());
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function showSuccess() {
    setShowAnimation(true);
  }
  function submitSubscriber() {
    const apiClient = new Api();

    apiClient
      .postSubscriber(email)
      .then(() => {
        showSuccess();
        setTimeout(handleClose, 3000);
      })
      .catch(() => {
        // console.log("catch", apiErr);
        setErr("An error occurred. Please try again later.");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail(email)) {
      submitSubscriber();
    }
  }

  return (() => {
    if (show) {
      return (
        <div className="get-updates">
          <h2>Never miss opportunities!</h2>
          <p>Leave us your email to get the latests. Spam free.</p>
          <CloseIcon className="close-icon" onClick={handleClose} />
          <div className="get-updates-form-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                ref={emailRef}
                onChange={handleChange}
                className="input-email"
                placeholder="Email"
              />
              <Button
                variant="outlined"
                className={`updates-send ${showAnimation ? "hidden" : ""}`}
                type="submit"
                disableRipple
              >
                Send
              </Button>
              {showAnimation ? (
                // element #id is #successAnimation
                <SuccessAnimation height="35" width="35" />
              ) : (
                ""
              )}
            </form>
            <span className="get-updates-error">{err}</span>
          </div>
        </div>
      );
    }
    return "";
  })();
}
