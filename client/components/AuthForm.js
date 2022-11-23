import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/auth";

/**
 * COMPONENT
 */
const AuthForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const submitForm = {
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value, 
      username: evt.target.username.value,
      password: evt.target.password.value,
      email: evt.target.email.value,
    };
    await dispatch(authenticate(submitForm));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center m-3"> 
        <h1 className="text-4xl"> Login </h1>
      </div>
      <form className="h-[20rem] flex flex-col justify-evenly" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">
                <small className="text-[1rem]">First Name:</small>
              </label>
              <input name="firstName" type="text" />
            </div>
            <div>
              <label htmlFor="lastName">
                <small className="text-[1rem]">Last Name:</small>
              </label>
              <input name="lastName" type="text" />
            </div>
            <div>
              <label htmlFor="email">
                <small className="text-[1rem]">Email:</small>
              </label>
              <input name="email" type="text" />
            </div>
            <div>
              <label htmlFor="username">
                <small className="text-[1rem]">Username</small>
              </label>
              <input name="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">
                <small className="text-[1rem]">Password</small>
              </label>
              <input name="password" type="password" />
            </div>
            <div>
              <button type="submit"></button>
            </div>
            <div className="flex flex-col items-center">
              <button type="button" className="border-2 p-4 rounded-md text-xl">
                {" "}
                CREATE A NEW ACCOUNT{" "}
              </button>
            </div>
      </form>
    </div>
  );
};

export default AuthForm;