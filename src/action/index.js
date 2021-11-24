export const LogIn = "LogIn";
export const SetUsers = "SetUsers";
export const ShowHide = "ShowHide";
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
