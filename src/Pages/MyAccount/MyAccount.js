import React from "react";
import useAuth from "../Hooks/useAuth";

const MyAccount = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="container px-5 my-5">
      <div className="d-flex align-items-center checkout_form border ">
        <div className="col-lg-5">
          <img className="rounded-circle w-50" src={user?.photoURL} alt="" />
        </div>

        <div className="col-lg-7 ">
          <h1 style={{ color: "red" }}>{user?.displayName}</h1>
          <h2>{user?.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
