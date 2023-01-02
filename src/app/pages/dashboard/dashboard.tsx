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

import savingProductsIcon from "../../assets/icons/saving.svg"
import feeAndChargesIcon from "../../assets/icons/coins-solid 1.svg";
import transactionsIcon from "../../assets/icons/transaction.svg";
import servicesIcon from "../../assets/icons/services.svg";
import serviceAccountIcon from "../../assets/icons/service-account.svg";
import settlementsIcon from "../../assets/icons/settlements.svg";
import reportsIcon from "../../assets/icons/reports.svg"

import preferencesIcon from "../../assets/icons/preference.svg";
import feesAndPricingIcon from "../../assets/icons/fees-pricing.svg"
import auditLogsIcons from "../../assets/icons/audit.svg";


console.log(window.location.pathname);

const DashboardLayout: React.FC = () => {
    let currentPath:string = window.location.pathname;
  return (
    <>
      <DashboardHeader />
      <div className="d-flex flex-row  justify-content-start body-wrapper">
        <div className="side_bar card border border-0 py-2">
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

          <div className="mt-md-3 mt-lg-3 mt-1">
            <ListSectionName title="BUSINESSES" />
            <ul className="m-0">
              {SideBarBusinessSection.map((el: SIDE_BAR_MENU, i: number) => (
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
  <div className="p-2 mx-lg-4 mx-md-1 mt-md-4 d-flex flex-row justify-content-between align-items-center brief-case">
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

const SideBarCustomersSection: Array<SIDE_BAR_MENU> = [
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
  },
  {
    to: "/karma",
    image: karmaIcon,
    title: "karma",
  },
];

const SideBarBusinessSection: Array<SIDE_BAR_MENU> = [
  {
    to: "/organization",
    image: brieftCase,
    title: "organization",
  },
  {
    to: "/loan-product",
    image: loanRequestIcon,
    title: "loan products",
  },
  {
    to: "/saving-product",
    image: savingProductsIcon,
    title: "savings products",
  },
  {
    to: "/fees-charges",
    image: feeAndChargesIcon,
    title: "fees and charges",
  },
  {
    to: "/transactions",
    image: transactionsIcon,
    title: "Transactions",
  },
  {
    to: "/services",
    image: servicesIcon,
    title: "Services",
  },
  {
    to: "/account",
    image: serviceAccountIcon,
    title: "Service Account",
  },
  {
    to: "/settlements",
    image: settlementsIcon,
    title: "settlements",
  },
  {
    to: "/reports",
    image: reportsIcon,
    title: "reports",
  },
   
];


const SideBarSettingSection: Array<SIDE_BAR_MENU> = [
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
];