import "../../styles/style.scss";
import { useMemo } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import personIcon from "../../assets/Vector.svg";
import { Rating } from "react-simple-star-rating";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  activeUserAccount,
  blackListUserAccount,
} from "../../../store/main.slice";
import {useDispatch} from "react-redux";

const UserDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const path: string = window.location.pathname;
  const pageName: Array<string> = path.split("/");
  const mainPageName: string = useMemo(() => {
    if (pageName[1].toLowerCase() === "user-detail") {
      return "User Details";
    }
    return "";
  }, []);

  let { id } = useParams();

  let currentUser: any = useMemo(() => {
    const data: string | null = window.localStorage.getItem("data");
    const parseData: [] = data && JSON.parse(data);
    return parseData.find((e: any) => e.id === id);
  }, [id]);
  

  const blacklistUserHandler = (id: string): void => {
    dispatch(blackListUserAccount(id))
  };

  const activeUserHandler = (id: string): void => {
    dispatch(activeUserAccount(id));
  }


  return (
    <div className="d-flex flex-column ms-md-5 mt-md-5 mx-2  mt-2 me-md-5 justify-content-start py-1 ">
      <div className="d-flex flex-row justify-content-start align-items-center gap-2">
        <BsArrowLeft
          color="#545f7d"
          className="arrow-back"
          onClick={() => navigate(-1)}
        />
        <div className="arrow-back-text">Back to Users</div>
      </div>
      <div className="mt-3 d-flex flex-row justify-content-between align-items-center ">
        <div className="page-name">{mainPageName}</div>

        <div className="d-flex flex-row justify-content-start align-items-center gap-md-3 gap-1">
          <button className="btn btn-blacklist" onClick={() => id && blacklistUserHandler(id)}>Blacklist User</button>
          <button className="btn btn-activate" onClick={() => id && activeUserHandler(id)}>Activate User</button>
        </div>
      </div>

      <div className="card card-user-header col-12 mt-md-5 mt-3 pt-3 px-1">
        <div className="card-body pt-2 px-1 d-flex flex-column justify-content-between align-items-start position-relative">
          <div className="user-details-summary mt-2 d-flex flex-row justify-content-start align-items-stretch gap-lg-4 gap-2">
            <div className="user-profile d-flex flex-row justify-content-start align-items-center gap-2">
              <div className="user-profile-bg d-flex flex-row justify-content-center align-items-center ">
                <img
                  src={personIcon}
                  alt="vector-img"
                  className="user-profile-img"
                />
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className="user-profile-name">{`${currentUser?.profile.firstName} ${currentUser?.profile.lastName}`}</div>
                <div className="user-profile-num">LSQFf587g{id}</div>
              </div>
            </div>

            <div className="user-tier px-md-4 px-1 d-flex flex-column justify-content-center">
              <div className="user-tier-title">User’s Tier</div>
              <div className="mt-0">
                <Rating
                  iconsCount={3}
                  readonly={true}
                  initialValue={1}
                  size={14}
                />
              </div>
            </div>
            <div className="user-bal ps-2 d-flex flex-column justify-content-center">
              <div className="user-bal-amount">
                <span>&#8358;</span>
                {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  useGrouping: true,
                }).format(currentUser?.accountBalance)}
              </div>
              <div className="user-bal-bank">
                {currentUser?.accountNumber}/{currentUser?.profile.address}
              </div>
            </div>
          </div>
          <div className="col-12 mb-0 row gx-0 mt-3">
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`general`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                General Details
              </NavLink>
            </div>
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`document`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                Documents
              </NavLink>
            </div>
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`bank`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                Bank Details
              </NavLink>
            </div>
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`loans`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                Loans
              </NavLink>
            </div>
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`savings`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                Savings
              </NavLink>
            </div>
            <div className="col-2  d-flex flex-row justify-content-center align-items-center pt-2">
              <NavLink
                to={`system`}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "user-details-pill-active w-100"
                      : "user-details-pill"
                  }`
                }
              >
                App and System
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetailPage;
