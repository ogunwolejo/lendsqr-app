import {Suspense , lazy} from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../modules/auth/auth.layout";
import DashboardLayout from "../pages/dashboard/dashboard";

import OtherPages from "../modules/other/other.pages";
import UserPage from "../modules/users/user";
import UserDetailPage from "../modules/users/user.detail";
import GeneralDetailsPage from "../modules/info/general.detail";
import AlternativePage from "../modules/info/alternative";


const UserComponent = lazy(() => import ("../modules/users/user"));



const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="users" element={<UserPage />} />
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

        <Route path="user-detail" element={<UserDetailPage />}>
          <Route path="general" element={<GeneralDetailsPage />} />
          <Route path="document" element={<AlternativePage />} />
          <Route path="bank" element={<AlternativePage />} />
          <Route path="loans" element={<AlternativePage />} />
          <Route path="savings" element={<AlternativePage />} />
          <Route path="system" element={<AlternativePage />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}></Route>
    </Routes>
  );
};

export { PrivateRoutes };
