// this is the page for the various routes
import { useState, useEffect } from "react";
import CustomizeCard from "../widgets/cards/customize.card";
import userIcon from "../../assets/card-icons/users.svg";
import activeUserIcon from "../../assets/card-icons/active-users.svg";
import userWithLoanIcons from "../../assets/card-icons/user-with-loans.svg";
import usersWithSaving from "../../assets/card-icons/users-with-savings.svg";
import { CgSortAz } from "react-icons/cg";
import {
  BsThreeDotsVertical,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTableList,
  fetchAppData,
  mapDataToFitUserTable,
  calUsersWithLoans,
  activeUserAccount,
  blackListUserAccount,
} from "../../../store/main.slice";
import ReactPaginate from "react-paginate";
import "../../styles/style.scss";
import FilterComponent from "../widgets/filter";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { USER_DATA, USER_STATUS_NUMBER } from "../../../interface";

//status-icons
import activateUserIcon from "../../assets/status-icons/active-user.svg";
import blacklistUserIcon from "../../assets/status-icons/black-list.svg";
import viewUserDetailIcon from "../../assets/status-icons/view-detail.svg";

const tableListValues: Array<number> = [5, 10, 20, 50, 75, 100];

const UserPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path: string = window.location.pathname;
  const pageName: Array<string> = path.split("/");

  useEffect(() => {
    const makeRequestForData = async () => {
      try {
        const response = await Axios.get(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );

        // inserting the fetched data into the reducers
        dispatch(fetchAppData(response.data));

        //mapping the data action call
        //@ts-ignore
        dispatch(mapDataToFitUserTable());
        //@ts-ignore
        dispatch(calUsersWithLoans());

        //adding data into the local storage
        window.localStorage.setItem("data", JSON.stringify(response.data));
        return response;
      } catch (err) {
        return err;
      }
    };
    makeRequestForData();
  }, []);

  const { tableList, search, mainData, usersWithLoan } = useSelector(
    (store: any) => ({
      tableList: store?.data.data,
      search: store?.data.search,
      mainData: store?.data.mainData,
      usersWithLoan: store?.data.usersWithLoan,
    })
  );

  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangeTableNumberDataToShowHandler = (e: number) => {
    dispatch(updateTableList(e));
  };

  const viewUserDetailsHandler = (id: string): void => {
    navigate(`/user-detail/${id}/general`);
  };

  const blacklistUserHandler = (id: string): void => {
    dispatch(blackListUserAccount(id))
  };

  const activeUserHandler = (id: string): void => {
    dispatch(activeUserAccount(id));
  };

  //pagination
  const indexOfLastData: number = currentPage * tableList;
  const indexOfFirstData: number = indexOfLastData - tableList;
  const currentTableData: Array<USER_DATA> =
    mainData.usersData &&
    mainData.usersData.slice(indexOfFirstData, indexOfLastData);
  const pageCount = mainData.usersData
    ? Math.ceil(mainData.usersData.length / tableList)
    : 0;

  const changePageHandler = (event: any) => {
    const pageNumber: number = parseInt(event.selected) + 1;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="d-flex flex-column ms-md-4 mt-md-5 mx-2 mt-2 me-md-5 justify-content-start py-1 ">
      <div className="page-name col-12 ">{pageName[1]}</div>

      <div className="mt-md-5 mt-lg-5 mt-3 d-flex flex-row justify-content-between ">
        <CustomizeCard
          backgroundColor="rgba(223, 24, 255, .1)"
          image={userIcon}
          title="users"
          data={mainData.appData.length}
        />
        <CustomizeCard
          backgroundColor="rgba(87, 24, 255, .1)"
          image={activeUserIcon}
          title="active users"
          data={2453}
        />
        <CustomizeCard
          backgroundColor="rgba(245, 95, 68, .1)"
          image={userWithLoanIcons}
          title="users with loans"
          data={usersWithLoan}
        />
        <CustomizeCard
          backgroundColor="rgba(255, 51, 102, .1)"
          image={usersWithSaving}
          title="users with savings"
          data={102453}
        />
      </div>
      <div className="mt-2 mt-md-4 card-table col-12">
        <div className="card-body ps-2 py-3">
          <div className="table-responsive main-table-wrapper">
            <table className="table">
              <thead className="mt-1 mb-3 ">
                <tr>
                  <th scope="col" className="table-col">
                    <div className="table-head-organization">
                      <FilterComponent />
                    </div>
                  </th>
                  <th scope="col" className="table-col-2">
                    <div className="table-head-username">
                      <div className="table-head-username-name me-1">
                        Username
                      </div>
                      <CgSortAz color="#000" className="table-icon" />
                    </div>
                  </th>
                  <th scope="col" className="table-col-3">
                    <div className="table-head-email">
                      <div className="table-head-email-name me-1">Email</div>
                      <CgSortAz
                        color="#000"
                        className="table-head-email-icon-icon"
                      />
                    </div>
                  </th>
                  <th scope="col" className="table-col-4">
                    <div className="table-head-phone">
                      <div className="table-head-phone-name me-1">
                        Phone number
                      </div>
                      <CgSortAz color="#000" className="table-icon" />
                    </div>
                  </th>
                  <th scope="col" className="table-col-5">
                    <div className="table-head-date">
                      <div className="table-head-date-name me-1">
                        Date Joined
                      </div>
                      <CgSortAz color="#000" className="table-icon" />
                    </div>
                  </th>
                  <th scope="col" className="table-col-6">
                    <div className="table-head-status">
                      <div className="table-head-status-name me-1">Status</div>
                      <CgSortAz color="#000" className="table-icon" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTableData.map((el: USER_DATA) => {
                  return (
                    <tr key={el.id}>
                      <td className=" py-xs-2 py-md-4">
                        {el.organizationName}
                      </td>
                      <td className="py-xs-2 py-md-4">{el.userName}</td>
                      <td className="py-xs-2 py-md-4">{el.email}</td>
                      <td className="py-xs-2 py-md-4">{el.phoneNumber}</td>
                      <td className="py-xs-2 py-md-4">
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "medium",
                          timeStyle: "medium" /*timeZone: 'Australia/Sydney'*/,
                        }).format(new Date(el.dateJoined))}
                      </td>
                      <td className="py-xs-2 py-md-4 ">
                        <div className="d-flex flex-row justify-content-start gap-3 align-items-center">
                          <StatusWrapper status={el.status} />
                          {/**  */}
                          <div className="dropdown">
                            <BsThreeDotsVertical
                              color="#545F7D"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            />
                            <ul className="dropdown-menu dropdown-menu-start p-md-4 p-2 dropdown-status">
                              <li
                                className="my-1"
                                onClick={() => viewUserDetailsHandler(el.id)}
                              >
                                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                                  <img
                                    src={viewUserDetailIcon}
                                    className=""
                                    alt="status-img"
                                  />
                                  <div className="dropdown-status-text">
                                    View Details
                                  </div>
                                </div>
                              </li>

                              <li
                                className="my-1"
                                onClick={() => blacklistUserHandler(el.id)}
                              >
                                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                                  <img
                                    src={blacklistUserIcon}
                                    className=""
                                    alt="status-img"
                                  />
                                  <div className="dropdown-status-text">
                                    Blacklist User
                                  </div>
                                </div>
                              </li>

                              <li
                                className="my-1"
                                onClick={() => activeUserHandler(el.id)}
                              >
                                <div className="d-flex flex-row justify-content-start align-items-center gap-2">
                                  <img
                                    src={activateUserIcon}
                                    className=""
                                    alt="status-img"
                                  />
                                  <div className="dropdown-status-text">
                                    Activate User
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/** */}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="table-data-list-and-pagination d-flex flex-row justify-content-between align-items-center mt-3">
        <div className="table-data-list d-flex flex-row justify-content-start align-items-center gap-2">
          <div className="data-list-text">Showing</div>
          <div className="dropdown-center">
            <div
              className=" dropdown-toggle dropdown-wrapper  d-flex flex-row justify-content-center align-items-center gap-2"
              //type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {tableList}
            </div>
            <ul className="dropdown-menu py-0">
              {tableListValues.map((el: number, index: number) => {
                return (
                  <li key={index}>
                    <div
                      className="dropdown-item table-list-item"
                      onClick={() => onChangeTableNumberDataToShowHandler(el)}
                    >
                      {el}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="data-list-text">
            out of {mainData.usersData.length}
          </div>
        </div>
        <div className="table-pagination">
          <ReactPaginate
            pageRangeDisplayed={pageCount}
            pageCount={pageCount}
            nextLabel={
              <BsChevronRight
                color="rgba(33, 63, 125, 1)"
                width="6.5"
                className="next-pagination-icon mb-1 mb-md-0"
              />
            }
            previousLabel={
              <BsChevronLeft
                color="rgba(33, 63, 125, 1)"
                width="6.5"
                className="previous-pagination-icon mb-1 mb-md-0"
              />
            }
            onPageChange={changePageHandler}
            pageClassName="pagination-text px-1"
            //pageLinkClassName="page-link "
            previousClassName="previous-label-pagination me-md-2 d-flex flex-row justify-content-center align-items-center"
            //previousLinkClassName="previous-link-paginate"
            nextClassName="next-label-pagination ms-md-2 d-flex flex-row justify-content-center align-items-center"
            //nextLinkClassName="next-link-paginate"
            containerClassName="pagination px-md-2 py-md-2 p-0"
            activeClassName="active-pagination-page active"
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;

const StatusWrapper: React.FC<{ status: number }> = ({ status }) => {
  let backgroundColor = "";
  let color = "";
  let text: string = "";

  switch (status) {
    case USER_STATUS_NUMBER.ACTIVE: {
      backgroundColor = "rgba(57, 205, 98, .06)";
      color = "#39CD62";
      text = "active";
      break;
    }
    case USER_STATUS_NUMBER.INACTIVE: {
      backgroundColor = "rgba(84, 95, 125, .06)";
      color = "#545F7D";
      text = "inactive";
      break;
    }
    case USER_STATUS_NUMBER.PENDING: {
      backgroundColor = "rgba(233, 178, 0, .1)";
      color = "#E9B200";
      text = "pending";
      break;
    }

    case USER_STATUS_NUMBER.BLACKLIST: {
      backgroundColor = "rgba(228, 3, 59, .1)";
      color = "#E4033B";
      text = "blacklist";
      break;
    }
  }
  return (
    <div
      className="status-wrapper px-1 py-1 d-flex flex-row align-items-center justify-content-center"
      style={{ color: color, backgroundColor }}
    >
      {text}
    </div>
  );
};
