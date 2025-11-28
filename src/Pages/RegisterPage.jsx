import React from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center my-8 py-5 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm  shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            {/* for name  */}

            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            {/* photo url */}

            <label className="label">Photo url</label>
            <input type="text" className="input" placeholder="photo url" />

            {/* for email */}

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* for password */}

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover flex items-center justify-center">
                <strong>Already have an account?</strong>
                <Link to="/auth/login" className="text-blue-500">
                  <strong> log in</strong>
                </Link>
              </a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
