import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);


 const handleSignOut = () => {
  signOut(auth).then(() => {
  navigate("/")
  }).catch((error) => {
  navigate("/error")
    // An error happened.
  });
 };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex items-center justify-between ">
      <div className=" relative z-10 h-20 w-48">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "
          alr="logo"
        />
      </div>
      {user && <div className="flex mr-10 items-center gap-3">
      <img
          src={user.photoURL}
          alr="usericon"
          className="h-8 w-8 rounded-full"
        />
        <botton onClick={handleSignOut} className="bg-red-500 my-3 rounded-sm px-2 py-1 text-white font-semibold">Sign Out</botton>
      </div>}
    </div>
  );
};

export default Header;
