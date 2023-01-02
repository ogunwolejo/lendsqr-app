import { Routes, Route } from "react-router-dom";
import AuthLayout from "../modules/auth/auth.layout";
import DashboardLayout from "../pages/dashboard/dashboard";

import OtherPages from "../modules/other/other.pages";
import UserPage from "../modules/users/user";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="users"  element={<UserPage/>}/>
        <Route path="guarantors" element={<OtherPages/>}/>
        <Route path="loans" element={<OtherPages/>}/>
        <Route path="decision-model" element={<OtherPages/>}/>
        <Route path="savings" element={<OtherPages/>}/>
        <Route path="loan-requests" element={<OtherPages/>}/>
        <Route path="whitelist" element={<OtherPages/>}/>
        <Route path="karma" element={<OtherPages/>}/>

        <Route path="organization" element={<OtherPages/>}/>
        <Route path="loan-product" element={<OtherPages/>}/>
        <Route path="saving-product" element={<OtherPages/>}/>
        <Route path="fees-charges" element={<OtherPages/>}/>
        <Route path="transactions" element={<OtherPages/>}/>
        <Route path="services" element={<OtherPages/>}/>
        <Route path="account" element={<OtherPages/>}/>
        <Route path="settlements" element={<OtherPages/>}/>
        <Route path="reports" element={<OtherPages/>}/>


        <Route path="preferences" element={<OtherPages/>}/>
        <Route path="pricing" element={<OtherPages/>}/>
        <Route path="audit" element={<OtherPages/>}/>
      </Route>
      <Route path="/auth" element={<AuthLayout />}></Route>
    </Routes>
  );
};

export { PrivateRoutes };
