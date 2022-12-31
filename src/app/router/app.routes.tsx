import React from "react";
import App from "../../App";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../modules/auth/auth.layout";
import LoginPage from "../modules/auth/component/login";

const Router: React.FC = () => {
  return (
    <>
      {/*<Routes>
      <Route path="/auth" element={<AuthLayout />} />
      <Route path="/login" element={<LoginPage />} />
  </Routes>*/}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
      </Routes>
    </>
  );
};

export { Router };
