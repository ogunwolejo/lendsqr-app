import App from "../../App";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { Suspense, lazy } from "react";

import DashboardLayout from "../pages/dashboard/dashboard";

// components
import AuthLayout from "../modules/auth/auth.layout";
import LoginPage from "../modules/auth/component/login";

import OtherPages from "../modules/other/other.pages";
import UserDetailPage from "../modules/users/user.detail";
import AlternativePage from "../modules/info/alternative";
import UserPage from "../modules/users/user";

import { DotLoader } from "react-spinners";

const UserComponent = lazy(() => import("../modules/users/user"));
const UserDetailsComponent = lazy(
  () => import("../modules/info/general.detail")
);

const AuthComponent = lazy(() => import("../modules/auth/auth.layout"));

const Router: React.FC = () => {
  let { currentUser } = useSelector((store: any) => ({
    currentUser: store.auth.currentUser,
  }));

  return (
    <>
      <Routes>
          {!currentUser ? (
            <>
              <Route
                path="auth"
                element={
                  <Suspense
                    fallback={
                      <div className="d-flex flex-column justify-content-center align-items-center col-12 loader">
                        <DotLoader color="rgba(33, 63, 125, 1)" />
                      </div>
                    }
                  >
                    <AuthComponent />
                  </Suspense>
                }
              >
                <Route path="" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          ) : (
            <>
              <Route element={<DashboardLayout />}>
                <Route
                  path="users"
                  element={
                    <UserPage/>
                    
                  }
                />

                <Route path="guarantors" element={<OtherPages />} />
                <Route path="loans" element={<OtherPages />} />
                <Route path="decision-model" element={<OtherPages />} />
                <Route path="savings" element={<OtherPages />} />
                <Route path="loan-requests" element={<OtherPages />} />
                <Route path="whitelist" element={<OtherPages />} />
                <Route path="karma" element={<OtherPages />} />

                <Route path="organization" element={<OtherPages />} />
                <Route path="loan-product" element={<OtherPages />} />
                <Route path="saving-product" element={<OtherPages />} />
                <Route path="fees-charges" element={<OtherPages />} />
                <Route path="transactions" element={<OtherPages />} />
                <Route path="services" element={<OtherPages />} />
                <Route path="account" element={<OtherPages />} />
                <Route path="settlements" element={<OtherPages />} />
                <Route path="reports" element={<OtherPages />} />

                <Route path="preferences" element={<OtherPages />} />
                <Route path="pricing" element={<OtherPages />} />
                <Route path="audit" element={<OtherPages />} />

                <Route path="user-detail/:id" element={<UserDetailPage />}>
                  <Route
                    path="general"
                    element={
                      <Suspense
                        fallback={
                          <div className="d-flex flex-column justify-content-center align-items-center col-12 loader">
                            <DotLoader color="rgba(33, 63, 125, 1)" />
                          </div>
                        }
                      >
                        <UserDetailsComponent />
                      </Suspense>
                    }
                  />
                  <Route path="document" element={<AlternativePage />} />
                  <Route path="bank" element={<AlternativePage />} />
                  <Route path="loans" element={<AlternativePage />} />
                  <Route path="savings" element={<AlternativePage />} />
                  <Route path="system" element={<AlternativePage />} />
                </Route>
              </Route>
              
            </>
          )}
      </Routes>
    </>
  );
};

export { Router };
