import "./styles/widget.scss";
import { BsSearch, BsBell, BsCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import lendsqrLogo from "../../assets/lendsqr.svg";
import lendsqrBadge from "../../assets/Union.svg";
import profilePic from "../../assets/image-4.png";

const DashboardHeader = () => {
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
          <input className="ps-2" placeholder="Search for anything" />
          <i className="d-flex flex-row justify-content-center align-items-center">
            <BsSearch color="#FFFFFF" height={"14px"} width="14px" />
          </i>
        </div>
      </div>
      <div className="dashboard-header-wrapper-profile d-flex flex-row justify-content-between align-items-center py-1 px-3">
        <Link to="" className="link">
          Docs
        </Link>
        <BsBell height="23px" width="20px" color="#213F7D" className="bell_i"/>

        <div className="d-flex flex-row align-items-center gap-2">
          <img
            src={profilePic}
            alt="lendsqr-logo"
            className="img-fluid profile-img"
          />
          <div className="d-flex flex-row align-items-center gap-2">
            <div className="profile-name">Adedeji</div>
            <BsCaretDownFill
              color="213F7D"
              height="4px"
              width="4px"
              className="caret_i"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
