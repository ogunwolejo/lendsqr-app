import { createSlice } from "@reduxjs/toolkit";
import { MAIN_LIST, USER_STATUS_NUMBER, USER_DATA } from "../interface";

const _: MAIN_LIST = {
  data: 10,
  search:'',
  mainData: {
    error: null,
    loading: false,
    appData: [],
    usersData: [],
  },
  activeUser: 0,
  usersWithLoan: 0,
  usersWithSavings: 0,
  filter:{
  organizationName: "",
  userName: "",
  email: "",
  phoneNumber: "",
  dateJoined: "",
  status: 0,
  id:""

  }
};

const MainSlice = createSlice({
  initialState: _,
  name: "table-list",
  reducers: {
    updateTableList: (state, action) => {
      return { ...state, data: action.payload };
    },

    onSearch: (state, action) => {
      return {...state, search:action.payload}
    },

    //inserting the fetched data into the app
    fetchAppData: (state, action) => {
      return {
        ...state,
        mainData: { ...state.mainData, appData: action.payload },
      };
    },

    // this action creates an array thats maps the user data into the data that is required
    mapDataToFitUserTable: (state, action) => {
      const appMainData: [] = state.mainData.appData;
      let _userData: Array<USER_DATA> | [] = [];

      if (appMainData.length > 0) {
        _userData = appMainData.map((e: any) => ({
          organizationName: e.orgName,
          userName: e.userName,
          email: e.email,
          phoneNumber: e.phoneNumber,
          dateJoined: e.createdAt,
          status:
            new Date(e.lastActiveDate) > new Date(e.createdAt)
              ? USER_STATUS_NUMBER.PENDING
              : USER_STATUS_NUMBER.INACTIVE, // if the last active date of the user is greater than the date the account was created, status is set to be pending or els its set to be in active
          id: e.id,
        }));
      }

      return {
        ...state,
        mainData: { ...state.mainData, usersData: _userData },
      };
    },

    filterUserData:(state, action) => {
      return {...state, filter:action.payload}
    },

    calUsersWithLoans: (state, action) => {
      const appMainData: [] = state.mainData.appData;
      if (appMainData.length > 0) {
        //@ts-ignore
        const usersWithLoans = appMainData.reduce(
          (accumlator: any, currentValue: any) => {
            if (currentValue.education.loanRepayment) {
              accumlator = accumlator + 1;
              return accumlator;
            }
          },
          0
        );

        return { ...state, usersWithLoan: usersWithLoans };
      }
    },

    activeUserAccount: (state, action) => {
      const index: number = state.mainData.usersData.findIndex(
        (el: USER_DATA) => el.id === action.payload
      );
      const currentUserData: USER_DATA = state.mainData.usersData[index];
      state.mainData.usersData[index] = {
        dateJoined: currentUserData.dateJoined,
        email: currentUserData.email,
        id: currentUserData.id,
        organizationName: currentUserData.organizationName,
        phoneNumber: currentUserData.phoneNumber,
        userName: currentUserData.userName,
        status: USER_STATUS_NUMBER.ACTIVE,
      };
    },

    blackListUserAccount: (state, action) => {
      const index: number = state.mainData.usersData.findIndex(
        (el: USER_DATA) => el.id === action.payload
      );
      const currentUserData: USER_DATA = state.mainData.usersData[index];
      state.mainData.usersData[index] = {
        dateJoined: currentUserData.dateJoined,
        email: currentUserData.email,
        id: currentUserData.id,
        organizationName: currentUserData.organizationName,
        phoneNumber: currentUserData.phoneNumber,
        userName: currentUserData.userName,
        status: USER_STATUS_NUMBER.BLACKLIST,
      };
    },
  },
});

export const MainReducer = MainSlice.reducer;

export const {
  updateTableList,
  onSearch,
  fetchAppData,
  calUsersWithLoans,
  mapDataToFitUserTable,
  activeUserAccount,
  blackListUserAccount,
  filterUserData
} = MainSlice.actions;
