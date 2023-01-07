import "./styles/widget.scss";
import { BsSearch, BsBell, BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import lendsqrLogo from "../../assets/lendsqr.svg";
import lendsqrBadge from "../../assets/Union.svg";
import profilePic from "../../assets/image-4.png";
import { useDispatch, useSelector } from "react-redux";
import { onSearch } from "../../../store/main.slice";
import { setCurrentUser } from "../../../store/auth.slice";

const DashboardHeader = () => {
  const dispatch = useDispatch();

  const search  = useSelector((store: any) => store?.data.search);

  const onSearchHandler = (s: string): void => {
    //console.log(s);
    dispatch(onSearch(s));
  };

  return (
    <div className="dashboard-header-wrapper d-flex flex-row justify-content-between align-items-center px-2 py-1">
      <div className="dashboard-header-wrapper-logo d-flex flex-row justify-content-start align-items-start gap-1 gap-md-2">
        <img
          src={lendsqrBadge}
          alt="lendsqr-badge"
          className="img-fluid dashboard-header-wrapper-logo-badge"
        />
        <img
          src={lendsqrLogo}
          alt="lendsqr-logo"
          className="img-fluid dashboard-header-wrapper-logo-text"
        />
      </div>
      <div className="dashboard-header-wrapper-search-wrapper ">
        <div className="dashboard-header-wrapper-search-wrapper-input-wrapper d-flex flex-row justify-content-start align-items-center p-0">
          <input
            className="ps-2"
            placeholder="Search for anything"
            value={search}
            onChange={(e: any) => onSearchHandler(e.target.value)}
          />
          <i className="d-flex flex-row justify-content-center align-items-center">
            <BsSearch color="#FFFFFF" height={"14px"} width="14px" />
          </i>
        </div>
      </div>
      <div className="dashboard-header-wrapper-profile d-flex flex-row justify-content-between align-items-center py-1 px-3">
        <Link to="" className="link">
          Docs
        </Link>
        <BsBell height="23px" width="20px" color="#213F7D" className="bell_i" />

        <div className="d-flex flex-row align-items-center gap-2">
          <img
            src={profilePic}
            alt="lendsqr-logo"
            className="img-fluid profile-img"
          />
          <div className="d-flex flex-row align-items-center gap-2">
            <div className="profile-name">Adedeji</div>
            <LogoutHandlerComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

const LogoutHandlerComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const logoutHandler = ():void => {
    dispatch(setCurrentUser({ payload: null }));
    navigate('/');
  }
  return (
    <div className="dropdown">
      <BsCaretDownFill
        color="213F7D"
        height="4px"
        width="4px"
        className="caret_i"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul className="dropdown-menu dropdown-menu-start p-md-3 p-1 dropdown-status">
        <li className="my-1" onClick={logoutHandler}>
          <div className="d-flex flex-row justify-content-start align-items-center gap-2">
            <div className="dropdown-status-text text-end float-right">Logout</div>
          </div>
        </li>
      </ul>
    </div>
  );
};
