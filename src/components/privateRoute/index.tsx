import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../../pages/login";

import { isLoginEd } from "../../utils/tools";

function PrivateRoute({ children }: any) {
  if (isLoginEd()) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
}

export default PrivateRoute;
