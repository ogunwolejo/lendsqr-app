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
        <div className="card-body px-3 py-3">
          <div className="table-responsive-xs table-responsive-sm table-responsive-md">
            <table className="table">
              <thead className="mt-1 mb-3">
                <tr>
                  <th className="">
                    <div>organization</div>
                    <div>
                      <CgSortAz color="#000" height="16px" width="16px" />
                    </div>
                  </th>
                  <th scope="col" className="">
                    <div>
                      username{" "}
                      <span>
                        <CgSortAz color="#000" height="16px" width="16px" />
                      </span>
                    </div>
                  </th>
                  <th scope="col" className=" w-25">
                    <div>Email</div>
                    <div>
                      <CgSortAz color="#000" height="16px" width="16px" />
                    </div>
                  </th>
                  <th scope="col" className=" w-25">
                    <div>Phone number</div>
                    <div>
                      <CgSortAz color="#000" height="16px" width="16px" />
                    </div>
                  </th>
                  <th scope="col" className=" w-25">
                    <div>date joined</div>
                    <div>
                      <CgSortAz color="#000" height="16px" width="16px" />
                    </div>
                  </th>
                  <th scope="col" className=" w-25">
                    <div>status</div>
                    <div>
                      <CgSortAz color="#000" height="16px" width="16px" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
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
