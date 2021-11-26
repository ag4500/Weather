export const LogIn = "LogIn";
export const SetUsers = "SetUsers";
export const ShowHide = "ShowHide";
export const Location = "Location";
export const Index = "Index";
export const Weather = "Weather";
export const Search = "Search";
export const Count = "Count";
export const Permission = "Permission";
export const SearchByCity = "SearchByCity";
export const HistoryUser="HistoryUser"
export const login = (payload) => ({
  type: LogIn,
  payload,
});
export const setuser = (payload) => ({
  type: SetUsers,
  payload,
});
export const showHide = (payload) => ({
  type: ShowHide,
  payload,
});
export const location = (payload) => ({
  type: Location,
  payload,
});
export const index = (payload) => ({
  type: Index,
  payload,
});
export const weather = (payload) => ({
  type: Weather,
  payload,
});
export const search = (payload) => ({
  type: Search,
  payload,
});
export const searchByCity = (payload) => ({
  type: SearchByCity,
  payload,
});
export const count = (payload) => ({
  type: Count,
  payload,
});
export const permission = (payload) => ({
  type: Permission,
  payload,
});
export const historyUser =(payload)=>({
  type:HistoryUser,
  payload,
})
