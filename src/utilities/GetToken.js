import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export function GetToken() {
  const { user: token } = useContext(AuthContext);
  return token;
}
