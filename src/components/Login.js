import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMesssage, setErrorMesssage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMesssage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMesssage(errorCode + "=" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMesssage(errorCode + "=" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/LK-en-20240916-TRIFECTA-perspective_2706a64e-d42e-4ed1-9b84-d208b33ff86e_large.jpg"
          alr="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute mx-auto my-36 right-0 left-0 p-16 w-3/12 bg-black bg-opacity-80 rounded-md text-white "
      >
        <h1 className="text-4xl mb-7 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div className="relative min-w-50 z-0 w-full group my-4 ">
            <input
              type="text"
              id="full name"
              placeholder=""
              className=" block px-2 pt-4 w-full  text-sm  bg-transparent border-2  border-gray-600 h-16 focus:outline-none focus:ring-0 focus:border-red-500 peer"
            />

            <label
              htmlFor="full name"
              className="absolute text-sm transform -translate-y-8 duration-300 scale-75 top-8 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Full Name
            </label>
          </div>
        )}

        <div className="relative min-w-50 z-0 w-full group my-4 ">
          <input
            ref={email}
            type="text"
            id="email"
            placeholder=""
            className=" block px-2 pt-4 w-full  text-sm  bg-transparent border-2  border-gray-600 h-16 focus:outline-none focus:ring-0 focus:border-red-500 peer"
          />

          <label
            htmlFor="email"
            className="absolute text-sm transform -translate-y-8 duration-300 scale-75 top-8 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            Email address
          </label>
        </div>

        <div className="relative min-w-50 z-0 w-full group my-4">
          <input
            ref={password}
            type="password"
            id="password"
            placeholder=""
            className=" block px-2 pt-4 w-full  text-sm  bg-transparent border-2  border-gray-600 h-16 focus:outline-none focus:ring-0 focus:border-red-500 peer"
          />

          <label
            htmlFor="password"
            className="absolute text-sm transform -translate-y-8 duration-300 scale-75 top-8 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
          >
            Password
          </label>
        </div>
        <p className="text-red-600 my-3 ">{errorMesssage}</p>
        <button
          onClick={handleButton}
          className="w-full py-2  bg-red-600 rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 text-slate-500">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            onClick={toggleSignInForm}
            className="text-white cursor-pointer font-semibold"
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
