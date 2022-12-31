import {Link, useNavigate} from 'react-router-dom'
import { useReducer, useState } from 'react';
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../../../../store/auth.slice";

import { TextInput, PasswordTextInput } from "../../widgets/text.input";
import "../../../styles/auth.scss"
import { AUTHSTATE } from '../../../../interface';

const ACTIONS = {
  EMAIL_ENTRY: "EMAIL_ENTRY",
  PASSWORD_ENTRY: "PASSWORD_ENTRY",
  TOOGLE_SHOWING_PASSWORD:"TOOGLE_SHOWING_PASSWORD"
}


const authState:AUTHSTATE = {
  email:"",
  password:"",
  showPassword:false
}

const AuthReducer = (state:AUTHSTATE, action:any) => {
  switch(action.type) {
    case ACTIONS.EMAIL_ENTRY: {
      return {...state, email:action.payload}
    }
    case ACTIONS.PASSWORD_ENTRY: {
      return {...state, password:action.payload}
    }
    case ACTIONS.TOOGLE_SHOWING_PASSWORD: {
      return {...state, showPassword:action.payload}
    }
  }
}

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatchAction = useDispatch();
  //@ts-ignore
  const [state, dispatch] = useReducer(AuthReducer, authState);

  const submithandler = (e:any):void => {
    e.preventDefault();
    const payloadData = {
      email:state.email, passowrd:state.password
    }
    dispatchAction(setCurrentUser({payload:payloadData}))
  }

  return (
    <div
      className="p-md-1 d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <form className="col-xs-12 col-md-10 col-lg-10 col-xl-8 ml-md-1 d-flex flex-column justify-content-md-between p-3 p-md-0" onSubmit={(e:any) => submithandler(e)}>
        <div className="mb-5">
            <h3 className="form-title">Welcome!</h3>
            <p className="form-subtitle">Enter details to login.</p>
        </div>
        <div className="my-md-2 mx-xs-3 px-md-0">
          <TextInput
            placeholder="Email"
            setValue={dispatch}
            value={state.email}
            className="p-3"
          />
        </div>
        <div className="my-2">
          <PasswordTextInput
            placeholder="Password"
            setValue={dispatch}
            value={state.password}
            className="p-3"
            showPassword={state.showPassword}
            setShowPassword={dispatch}
          />
        </div>
        <div className="mt-1 mb-3">
            <Link to="" className="forgot-password-link"> Forgot password </Link>
        </div>
        <div className="mt-1">
            <button type="submit" className="btn btn-large login-btn col-12 py-md-3 py-3">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
