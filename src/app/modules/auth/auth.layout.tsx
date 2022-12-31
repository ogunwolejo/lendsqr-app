import { Outlet } from "react-router-dom";

// components and assets
import "../../styles/auth.scss";
import lendsqrLogo from '../../assets/lendsqr.svg';
import lendsqrNameLogo from '../../assets/Union.svg';
import mainImage from '../../assets/pablo-sign-in-1.svg';


const AuthLayout = () => {
    return (
        <section className="auth_wrapper p-0 d-md-flex flex-md-row justify-md-content-start ">
            <div className="auth_wrapper__left_side bg-light d-flex flex-column justify-content-evenly align-items-start p-2">
                <div className="d-flex flex-row align-items-center justify-content-start p-1 offset-md-3 offset-lg-1 gap-3">
                    <img src={lendsqrNameLogo} alt="lendsqr-logo" className="auth_wrapper__left_side_logo mb-2"/>
                    <img src={lendsqrLogo} alt="lendsqr-logo" className="img-fluid auth_wrapper__left_side_logo_text "/>
                </div>
                <div className="auth_wrapper__left_side_bottom ">
                    <img src={mainImage} alt="image" className="img-fluid col-12 left_image_on_auth"/>
                </div>
                <div></div>
            </div>
            <div className="auth_wrapper__right_side bg-white col-12">
                <Outlet/>
            </div>
        </section>
    )
}

export default AuthLayout;