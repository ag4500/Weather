import { LogIn ,SetUsers,ShowHide} from "../action";
const initialState = {
  toggle: false,
  data: {
    username: "",
    password: "",
  },
  record: {},
  loggedIn: false,
};
const login = (state = initialState, action) => {
  switch (action.type) {
    case ShowHide:
      return {
        ...state,
        toggle: action.payload,
      };
    case SetUsers:
      return {
        ...state,
        data: action.payload,
        record: initialState.data,
      };
    case LogIn:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};
export default login;
