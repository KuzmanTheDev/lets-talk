import React, { useReducer, createContext } from "react";

const initialState = {
  role: "",
};

const RoleContext = createContext({
  role: "",
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "STUDENT":
      return {
        ...state,
        role: action.payload,
      };
    case "LECTURER":
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

const RoleProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const studentRole = (role) => {
    dispatch({
      type: "STUDENT",
      payload: role,
    });
  };
  const lecturerRole = (role) => {
    dispatch({
      type: "LECTURER",
      payload: role,
    });
  };
  return (
    <RoleContext.Provider
      value={{ role: state.role, studentRole, lecturerRole }}
      {...props}
    />
  );
};

export { RoleContext, RoleProvider };
