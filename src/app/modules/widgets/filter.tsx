import React from "react";
import { CgSortAz } from "react-icons/cg";
import "./styles/widget.scss";

const FilterComponent: React.FC = () => {
  return (
    <div className="dropdown d-flex flex-row  justify-content-start gap-lg-1">
      <div
        className="table-head-organization-name"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Organization
      </div>
      <CgSortAz
        color="#000"
        className="table-icon"
        //data-bs-toggle="dropdown"
        //aria-expanded="false"
      />
      <ul className="dropdown-menu dropdown-menu-start p-2 p-md-3 dropdown-filter">
        <li className="my-2">
          <div className="d-flex flex-column justify-content-end align-items-start">
            <h3 className="filter-label">Organization</h3>
            <select className="filter-select mt-0 px-3 py-2">
              <option selected>Select</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Inactive</option>
            </select>
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">User</h3>
            <input
              type="text"
              className="filter-input mt-0 px-2 py-2"
              placeholder="User"
            />
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">Email</h3>
            <input
              type="email"
              className="filter-input mt-0 px-2 py-2"
              placeholder="Email"
            />
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">date</h3>
            <input
              type="date"
              className="filter-input mt-0 px-2 py-2"
              placeholder="Date"
            />
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">Phone Number</h3>
            <input
              type="tel"
              className="filter-input mt-0 px-2 py-2"
              placeholder="Phone Number"
            />
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">Status</h3>
            <select className="filter-input mt-0 px-2 py-2 w-100">
              <option>Status</option>
              <option>Pending</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Blacklisted</option>
            </select>
          </div>
        </li>
        <li className="mt-3">
          <div className="d-flex flex-row justify-content-between gap-2 align-items-center">
            <button className="btn filter-reset-btn ">Reset</button>
            <button className="btn filter-filter-btn">Filter</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
