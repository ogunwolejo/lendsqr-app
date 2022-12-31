import {Link} from 'react-router-dom'

import { TextInput, PasswordTextInput } from "../../widgets/text.input";
import "../../../styles/auth.scss"

const LoginPage = () => {
  return (
    <div
      className="p-md-1 d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <form className="col-xs-12 col-md-10 col-lg-10 col-xl-8 ml-md-1 d-flex flex-column justify-content-md-between p-3 p-md-0" >
        <div className="mb-5">
            <h3 className="form-title">Welcome!</h3>
            <p className="form-subtitle">Enter details to login.</p>
        </div>
        <div className="my-md-2 mx-xs-3 px-md-0">
          <TextInput
            placeholder="Email"
            setValue={() => console.log(1)}
            value=""
            className="p-3"
          />
        </div>
        <div className="my-2">
          <PasswordTextInput
            placeholder="Password"
            setValue={() => console.log(1)}
            value=""
            className="p-3"
          />
        </div>
        <div className="mt-1 mb-3">
            <Link to="" className="forgot-password-link"> Forgot password </Link>
        </div>
        <div className="mt-1">
            <button className="btn btn-large login-btn col-12 py-md-3 py-3">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
