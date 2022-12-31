import {Routes, Route} from 'react-router-dom';
import AuthLayout from "../modules/auth/auth.layout";
import LoginPage from "../modules/auth/component/login";
import DashboardLayout from "../pages/dashboard/dashboard";

const PrivateRoutes = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout/>}></Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
            </Route>
      </Routes>
    )
}


export {PrivateRoutes} 