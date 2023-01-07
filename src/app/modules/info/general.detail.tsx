import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

const MainComponent: React.FC<{ title: string; currentUser: any }> = ({
  title,
  currentUser,
}) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">full Name</div>
          <div className="component-result mt-1">{`${currentUser?.profile.firstName} ${currentUser?.profile.lastName}`}</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Phone Number</div>
          <div className="component-result mt-1">{`${currentUser?.profile.phoneNumber} `}</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Email Address</div>
          <div className="component-email text-break mt-1">{`${currentUser?.email} `}</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label ms-1">Bvn</div>
          <div className="component-result ms-1 mt-1">{`${currentUser?.profile.bvn} `}</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Gender</div>
          <div className="component-result mt-1">{`${currentUser?.profile.gender} `}</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Marital status</div>
          <div className="component-result mt-1">Single</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Children</div>
          <div className="component-result mt-1">None</div>
        </div>
        <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Type of residence</div>
          <div className="component-result mt-1">Parent’s Apartment</div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

const EducationComponent: React.FC<{ title: string; currentUser: any }> = ({
  title,
  currentUser,
}) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">level of education</div>
          <div className="component-result mt-1">{`${currentUser?.education.level}`}</div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">employment status</div>
          <div className="component-result mt-1">{`${currentUser?.education.employmentStatus} `}</div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">sector of employment</div>
          <div className="component-result mt-1">{`${currentUser?.education.sector} `}</div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Duration of employment</div>
          <div className="component-result mt-1">{`${currentUser?.education.duration} `}</div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">office email</div>
          <div className="component-result mt-1">{`${currentUser?.education.officeEmail} `}</div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Monthly income</div>
          <div className="component-result mt-1">
            <span>&#8358;</span>{new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              useGrouping: true,
            }).format(currentUser?.education.monthlyIncome[0])}{" "}
            -{" "}
            <span>&#8358;</span>{new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              useGrouping: true,
            }).format(currentUser?.education.monthlyIncome[1])}
          </div>
        </div>
        <div className="col-3  d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">loan repayment</div>
          <div className="component-result mt-1">
            {new Intl.NumberFormat().format(
              currentUser?.education.loanRepayment
            )}
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

const SocialComponent: React.FC<{ title: string; currentUser: any }> = ({
  title,
  currentUser,
}) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">
        <div className="col-4 col-md-4 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">Twitter</div>
          <div className="component-result mt-1">
            {currentUser?.socials.twitter}
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">facebook</div>
          <div className="component-result mt-1">
            {currentUser?.socials.facebook}
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
          <div className="component-label">instagram</div>
          <div className="component-result mt-1">
            {currentUser?.socials.instagram}
          </div>
        </div>
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export const FourthComponent: React.FC<{
  title: string;
  children: React.ReactNode;
  hideDivider?: boolean;
}> = ({ title, children, hideDivider = false }) => {
  return (
    <div>
      <div className="card-main-page-header">{title}</div>
      <div className="mt-3 row gx-0 py-1">{children}</div>
      {!hideDivider && <hr className="mt-4" />}
    </div>
  );
};

const GeneralDetailsPage: React.FC = () => {
  const { id } = useParams();

  let currentUser: any = useMemo(() => {
    const data: string | null = window.localStorage.getItem("data");
    const parseData: [] = data && JSON.parse(data);
    return parseData.find((e: any) => e.id === id);
  }, [id]);

  return (
    <div className="card outlet-card p-2 p-md-3">
      <div className="card-body ">
        <MainComponent title="Personal Information" currentUser={currentUser} />
        <EducationComponent
          title="Education and Employment"
          currentUser={currentUser}
        />
        <SocialComponent title="Socials" currentUser={currentUser} />
        <FourthComponent title="Guarantor" hideDivider={true}>
          <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
            <div className="component-label">full Name</div>
            <div className="component-result mt-1">{`${currentUser?.guarantor.firstName} ${currentUser?.guarantor.lastName}`}</div>
          </div>
          <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
            <div className="component-label">phone Number</div>
            <div className="component-result mt-1">
              {currentUser?.guarantor.phoneNumber}
            </div>
          </div>
          <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
            <div className="component-label">address</div>
            <div className="component-result mt-1">
              {currentUser?.guarantor.address}
            </div>
          </div>
          <div className="col-3 col-md-3 col-lg-2 d-flex flex-column justify-content-start gap-0 align-items-start my-1">
            <div className="component-label">gender</div>
            <div className="component-result mt-1">
              {currentUser?.guarantor.gender}
            </div>
          </div>
        </FourthComponent>
      </div>
    </div>
  );
};

export default GeneralDetailsPage;
