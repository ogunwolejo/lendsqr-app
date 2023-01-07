import React, {useState} from "react";
import { CgSortAz } from "react-icons/cg";
import "./styles/widget.scss";
import {useDispatch, useSelector} from 'react-redux';
import { filterUserData } from "../../../store/main.slice";
import {USER_STATUS_NUMBER, USER_STATUS_ENGLISH} from "../../../interface";


interface filterData {
  organizationName: string,
  userName: string,
  email: string,
  phoneNumber: string,
  dateJoined: string,
  status: number,
  id?:string
}

const options:Array<{data:number; label:string}> =  [{data:USER_STATUS_NUMBER.PENDING, label:USER_STATUS_ENGLISH.PENDING}, {data:USER_STATUS_NUMBER.ACTIVE, label:USER_STATUS_ENGLISH.ACTIVE}, {data:USER_STATUS_NUMBER.INACTIVE, label:USER_STATUS_ENGLISH.INACTIVE}, {data:USER_STATUS_NUMBER.BLACKLIST, label:USER_STATUS_ENGLISH.BLACKLIST}];

const FilterComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<filterData>({organizationName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  dateJoined: "",
  status: 0,
  });

  //const filter = useSelector((store: any) => store?.data.filter);

  const inputFilterHandler = (filterName:string, data:string | number):void => {
    setFilter((prev:filterData) => ({...prev, [filterName]:data}))
  }

  const submitFilter = ():void => {
    dispatch(filterUserData(filter))
  }

  const clearFilter = ():void => {

  const emptyState = {
    organizationName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: 0,
  }
    
  dispatch(filterUserData(emptyState));
  setFilter(emptyState);
    
  }


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
      />
      <ul className="dropdown-menu dropdown-menu-start p-2 p-md-3 dropdown-filter">
        <li className="my-2">
          <div className="d-flex flex-column justify-content-end align-items-start">
            <h3 className="filter-label">Organization</h3>
            <input
              type="tel"
              className="filter-input mt-0 px-2 py-2"
              placeholder="organization Name"
              value={filter.organizationName}
               onChange={(e:any) => inputFilterHandler('organizationName', e.target.value)}
            />
            
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">User</h3>
            <input
              type="text"
              className="filter-input mt-0 px-2 py-2"
              placeholder="User"
              value={filter.userName}
              onChange={(e:any) => inputFilterHandler('userName', e.target.value)}
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
              value={filter.email}
              onChange={(e:any) => inputFilterHandler('email', e.target.value)}
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
              value={filter.dateJoined}
              onChange={(e:any) => inputFilterHandler('dateJoined', e.target.value)}
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
              value={filter.phoneNumber}
               onChange={(e:any) => inputFilterHandler('phoneNumber', e.target.value)}
            />
          </div>
        </li>
        <li className="my-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h3 className="filter-label">Status</h3>
            <select className="filter-select mt-0 px-3 py-2" onChange={(e:any) => inputFilterHandler("status", +e.target.value)} value={filter.status}>
              {options.map((el:{data:number; label:string}, i:number) => <option value={el.data} key={i}>{el.label}</option>)}
            </select>
          </div>
        </li>
        <li className="mt-3">
          <div className="d-flex flex-row justify-content-between gap-2 align-items-center">
            <button className="btn filter-reset-btn " onClick={clearFilter}>Reset</button>
            <button className="btn filter-filter-btn" onClick={submitFilter}>Filter</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FilterComponent;
