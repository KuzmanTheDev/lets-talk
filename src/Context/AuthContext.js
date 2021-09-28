import React, { useReducer, createContext } from "react";
import SecureLS from "secure-ls";

const ls = new SecureLS();
const initialState = {
  user: null,
};

const userData = ls.get("userData");
if (userData) {
  initialState.user = userData;
  // const expiration = 20 * 60 * 60 * 1000;
} else {
  initialState.user = null;
}

const AuthContext = createContext({
  user: null,
  login: (data) => {},
  logout: () => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(data) {
    const ls = new SecureLS();
    ls.set("userData", data);
    dispatch({
      type: "LOGIN",
      payload: data,
    });
    // setTimeout(() => {
    //   logout();
    // }, 6000);
  }
  function logout() {
    const ls = new SecureLS();
    ls.remove("userData");
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
