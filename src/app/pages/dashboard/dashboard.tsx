import { Outlet, NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import DashboardHeader from "../../modules/widgets/dashboard.header";
import { SIDE_BAR_MENU } from "../../../interface";
import "../../styles/style.scss";
import brieftCase from "../../assets/icons/briefcase 1.svg";
import SideBabrMenu from "../../modules/widgets/side.menu";

import homeIcon from "../../assets/icons/home 1.svg";
import usersIcon from "../../assets/icons/user-friends 1.svg";
import gurantorIcon from "../../assets/icons/guarantors.svg";
import loanIcon from "../../assets/icons/loan.svg";
import decisionModeIcon from "../../assets/icons/decison-model.svg";
import savingsIcon from "../../assets/icons/savings.svg";
import loanRequestIcon from "../../assets/icons/loan-request.svg";
import whitelistIcon from "../../assets/icons/whitelist.svg";
import karmaIcon from "../../assets/icons/karma.svg";
import preferencesIcon from "../../assets/icons/preference.svg";
import feesAndPricingIcon from "../../assets/icons/fees-pricing.svg"
import auditLogsIcons from "../../assets/icons/audit.svg";
import { useMemo } from "react";


const DashboardLayout: React.FC = () => {
  let currentPath:string = window.location.pathname;
  
  // main sidebar content 
  const SideBarCustomersSection: Array<SIDE_BAR_MENU> = useMemo(() => [
    {
      to: "/users",
      image: usersIcon,
      title: "Users",
    },
    {
      to: "/guarantors",
      image: gurantorIcon,
      title: "Guarantors",
    },
    {
      to: "/loans",
      image: loanIcon,
      title: "Loans",
    },
    {
      to: "/decision-model",
      image: decisionModeIcon,
      title: "Decision Models",
    },
    {
      to: "/savings",
      image: savingsIcon,
      title: "Savings",
    },
    {
      to: "/loan-requests",
      image: loanRequestIcon,
      title: "loan requests",
    },
    {
      to: "/whitelist",
      image: whitelistIcon,
      title: "whitelist",
    }
  ], []);

  // the sidebar settings
  const SideBarSettingSection: Array<SIDE_BAR_MENU> = useMemo(() => [
    {
      to: "/preferences",
      image: preferencesIcon,
      title: "Preferences",
    },
    {
      to: "/pricing",
      image: feesAndPricingIcon,
      title: "fees and Pricing",
    },
    {
      to: "/audit",
      image: auditLogsIcons,
      title: "Audit Logs",
    },
  ], []);

  return (
    <>
      <DashboardHeader />
      <div className="d-flex flex-row  justify-content-start body-wrapper ">
        <div className="side_bar card border border-0 py-2 bg-white">
          <SwitchOrganization />
          <DashboardContent />
          <div className="mt-md-4 mt-lg-4 mt-1">
            <ListSectionName title="customers" />
            <ul className="m-0">
              {SideBarCustomersSection.map((el: SIDE_BAR_MENU, i: number) => (
                <li className="" key={i}>
                  <NavLink
                    to={el.to}
                    className={({ isActive }) =>
                      `${
                        isActive ? "nav-link-active" : ""
                      } nav-link  ps-1 ps-md-2 ps-lg-1`
                    }
                  >
                    <SideBabrMenu image={el.image} title={el.title} route={el.to}  key={i} currentPath={currentPath}/>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        
          <div className="mt-md-3 mt-lg-3 mb-1 mt-1">
              <ListSectionName title="SETTINGS" />
              <ul className="m-0">
                {SideBarSettingSection.map((el: SIDE_BAR_MENU, i: number) => (
                  <li className="" key={i}>
                    <NavLink
                      to={el.to}
                      className={({ isActive }) =>
                        `${
                          isActive ? "nav-link-active" : ""
                        } nav-link  ps-1 ps-md-2 ps-lg-1`
                      }
                    >
                      <SideBabrMenu image={el.image} title={el.title} route={el.to}  key={i} currentPath={currentPath}/>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="side_bar_content">
            <Outlet />
          </div>
      </div>
    </>
  );
};

export default DashboardLayout;

const SwitchOrganization = () => (
  <div className="p-2 mx-lg-4 mx-md-1 mt-md-4 d-flex flex-row justify-content-start gap-1 gap-md-2 align-items-center brief-case">
    <img src={brieftCase} alt="briefcase" className="brief-case-img" />
    <div className="brief-case-title">Switch Organization</div>
    <BsChevronDown color="#213F7D" className="brief-case-icon" />
  </div>
);

const DashboardContent = () => (
  <div className="p-2 mx-md-2  mx-lg-4 mt-md-4 d-flex flex-row justify-content-start align-items-center dashboard-content gap-2">
    <img src={homeIcon} alt="dashboard" className="dashboard-content-img" />
    <div className="dashboard-content-title">Dashboard</div>
  </div>
);

const ListSectionName: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => (
  <div className={`p-2 mx-lg-4 mx-md-2  ${className} list-section-name `}>
    {title}
  </div>
);

