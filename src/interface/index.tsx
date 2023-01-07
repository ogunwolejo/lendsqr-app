export interface AUTHSTATE {
  email: string;
  password: string;
  showPassword: boolean;
}

export interface SIDE_BAR_MENU {
  image: string;
  title: string;
  to: string;
}

export interface MAIN_LIST {
  data: number;
  search:string;
  filter:USER_DATA;
  mainData: {
    error: any;
    loading: boolean;
    appData: [];
    usersData: [] | Array<USER_DATA>;
  };
  activeUser:number;
  usersWithLoan:number;
  usersWithSavings:number;
}

export enum USER_STATUS_NUMBER {
  BLACKLIST = 0,
  PENDING = 1,
  INACTIVE = 2,
  ACTIVE = 3,
}

export enum USER_STATUS_ENGLISH {
  BLACKLIST = "Blacklist",
  PENDING = "Pending",
  INACTIVE ="Inactive",
  ACTIVE = "Active",
}

export interface USER_DATA {
  organizationName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: USER_STATUS_NUMBER;
  id:string;
}
