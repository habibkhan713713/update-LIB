import React from "react";

export default function Signup() {
  return (
    <div>
      <form className="form form_hidden" id="createaccount">
        <h1 className="form_title">Create account</h1>
        <div className="formmsg formmsgerror" />
        <div className="formmsg formmsgsuccess" />
        <div className="form_input_group">
          <input
            type="text"
            id="createUsername"
            className="form_input"
            autofocus=""
            placeholder="Username"
          />
          <div className="forminputerrormsg" />
        </div>
        <div className="form_input_group">
          <input
            type="text"
            id="createPassword"
            className="form_input"
            autofocus=""
            placeholder="Password"
          />
          <div className="forminputerrormsg" />
        </div>
        <div className="form_input_group">
          <input
            type="text"
            id="confirmPassword"
            className="form_input"
            autofocus=""
            placeholder="Confirm password"
          />
          <div className="forminputerrormsg" />
        </div>
        <button className="form_btn" type="submit">
          Submit
        </button>
        <p className="form_text">
          <a className="form_link" href="/login" id="linkLogin">
            Already have an account? Sign in.
          </a>
        </p>
      </form>
    </div>
  );
}
