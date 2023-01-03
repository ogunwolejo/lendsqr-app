// this is the page for the various routes
import CustomizeCard from "../widgets/cards/customize.card";
import userIcon from "../../assets/card-icons/users.svg";
import activeUserIcon from "../../assets/card-icons/active-users.svg";
import userWithLoanIcons from "../../assets/card-icons/user-with-loans.svg";
import usersWithSaving from "../../assets/card-icons/users-with-savings.svg";
import { CgSortAz } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";

const UserPage: React.FC = () => {
  const path: string = window.location.pathname;
  const pageName: Array<string> = path.split("/");
  console.log(pageName[1]);

  return (
    <div className="d-flex flex-column ms-md-5 mt-md-5 ms-3  me-3 mt-3 me-md-5 justify-content-start py-1">
      <div className="page-name col-12 ">{pageName[1]}</div>

      <div className="mt-md-5 mt-lg-5 mt-3 d-flex flex-row justify-content-between ">
        <CustomizeCard
          backgroundColor="rgba(223, 24, 255, .1)"
          image={userIcon}
          title="users"
          data={2453}
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
          data={12453}
        />
        <CustomizeCard
          backgroundColor="rgba(255, 51, 102, .1)"
          image={usersWithSaving}
          title="users with savings"
          data={102453}
        />
      </div>
      <div className="mt-2 mt-md-4 card-table col-12">
        <div className="card-body px-2 py-3">
          <div className="table-responsive">
            <table className="table">
              <thead className="mt-1 mb-3 ">
                <tr>
                  <th scope="col" className="table-col">
                    <div className="table-head-organization">
                      <div className="table-head-organization-name me-1">
                        Organization
                      </div>
                      <CgSortAz color="#000" className="table-icon" />
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
                <tr>
                  <td className=" py-xs-2 py-md-4">Lendsqr</td>
                  <td className="py-xs-2 py-md-4">Debby Ogana</td>
                  <td className="py-xs-2 py-md-4">adedeji@lendsqr.com</td>
                  <td className="py-xs-2 py-md-4">08078903721</td>
                  <td className="py-xs-2 py-md-4">May 15, 2020 10:00 AM</td>
                  <td className="py-xs-2 py-md-4 ">
                    <div className="d-flex flex-row justify-content-start gap-3 align-items-center">
                      <StatusWrapper status="pending" />
                      <BsThreeDotsVertical color="#545F7D" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

const StatusWrapper: React.FC<{ status: string }> = ({ status }) => {
  let backgroundColor =
    status.toLowerCase() === "active"
      ? "rgba(57, 205, 98, .06)"
      : status.toLowerCase() === "inactive"
      ? "rgba(84, 95, 125, .06)"
      : status.toLowerCase() === "pending"
      ? "rgba(233, 178, 0, .1)"
      : "rgba(228, 3, 59, .1)";

  let color =
    status.toLowerCase() === "active"
      ? "#39CD62"
      : status.toLowerCase() === "inactive"
      ? "#545F7D"
      : status.toLowerCase() === "pending"
      ? "#E9B200"
      : "#E4033B";
  return (
    <div
      className="status-wrapper px-1 py-1 d-flex flex-row align-items-center justify-content-center"
      style={{ color: color, backgroundColor }}
    >
      {status}
    </div>
  );
};
