import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../firebase/firebase.config";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("password 6 characters min");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("1 uppercase char");
      return;
    } else if (!accepted) {
      setRegisterError("accept terms");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result);
      setSuccess("user created successfully");

      // update profile
      updateProfile(result.user, {
        displayName: name,
        photoURL: "example.com",
      })
        .then(() => console.log("profile updated"))
        .catch();

      // send verification email
      sendEmailVerification(result.user)
        .then(() => {
          alert("check email");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
    });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-10">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <span
                  className="absolute top-14 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <div className="mb-2">
                  <input type="checkbox" name="terms" id="terms" />
                  <label className="ml-2" htmlFor="terms">
                    Accept our terms and conditions
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {registerError && (
              <p className="text-red-600 p-5">{registerError}</p>
            )}
            {success && <p className="text-green-500 p-5">{success}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
