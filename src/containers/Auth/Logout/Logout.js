import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../../Store/requests/auth";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, [dispatch]);

  return <Redirect to="/" />;
};

export default Logout;
