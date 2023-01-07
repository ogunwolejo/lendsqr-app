import React from "react";
import App from "../../App";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import { PrivateRoutes } from "./private.routes";
import AuthLayout from "../modules/auth/auth.layout";
import LoginPage from "../modules/auth/component/login";

const Router: React.FC = () => {
  console.log(1);
  const { currentUser } = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }));

  return (
    <>
      {currentUser ? (
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      ) : (
        <>
          <PrivateRoutes />
          {/*<Navigate to="/" />*/}
        </>
      )}
    </>
  );
};

export { Router };
