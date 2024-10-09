import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice.js";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import caret_icon from "../assets/caret_icon.svg";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  const handleSearch = () => navigate("/browse/gptsearch")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 w-full  bg-gradient-to-b from-black z-10 flex items-center justify-between text-white">
      <div className=" flex items-center gap-9 ">
        <img className=" w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png "
          alr="logo"
        />
        <ul className="flex gap-5  cursor-pointer">
          <Link to="/browse/home"><li>Home</li></Link>
          <Link to="/browse/tvshows"><li>TV Shows</li></Link>
          <Link to=""><li>Movies</li></Link>
          <Link to=""><li>New & Popular</li></Link>
          <Link to=""><li>My List</li></Link>
        </ul>
      </div>
      <div className="flex-row items-center gap-5 inline-flex">
        <img  onClick={handleSearch} alt="search" src={search_icon} />
        <p>Kids</p>
        <img alt="search" src={bell_icon} />
        {user && (
          <div className="flex mr-10 items-center gap-3">
            <img
              src={user.photoURL}
              alr="usericon"
              className="h-8 w-8 rounded-full"
            />
            <button
              onClick={handleSignOut}
              className="bg-red-500 my-3 rounded-sm px-2 py-1 text-white font-semibold"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
