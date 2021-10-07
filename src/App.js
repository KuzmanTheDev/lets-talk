import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home/Home";
import Admin from "./screens/Admin/Admin";
import Dashboard from "./screens/Dashboard/index";
import AdminDashboard from "./screens/Admin/AdminDashboard";
import Form from "./components/Auth/SignUp/Form";
import LogIn from "./components/Auth/LogIn/LogIn";
import Success from "./components/Success/Success";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import RecoverPassword from "./components/Auth/RecoverPassword";
import Chat from "./components/Conversations/Chat/Chat";
import Account from "./components/Account/Account";
import NeedHelp from "./components/NeedHelp/NeedHelp";
import { AuthRoute, ProtectRoute } from "./utilities/Route";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Video from "./components/Video/Video";
import "./App.css";


function App() {
  let routes = (
    <>
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute path="/signup" component={Form} />
      <AuthRoute path="/login" component={LogIn} />
      <ProtectRoute exact path="/chat" component={Dashboard} />
      <ProtectRoute exact path="/admin" component={Admin} />
      <ProtectRoute path="/chat/:id" component={Chat} />
      <ProtectRoute path="/admin/dashboard" component={AdminDashboard} />
      <ProtectRoute path="/success" component={Success} />
      <ProtectRoute path="/recover-password" component={RecoverPassword} />
      <ProtectRoute path="/privacy-policy" component={PrivacyPolicy} />
      <ProtectRoute path="/video" component={Video} />
      <ProtectRoute path="/account" component={Account} />
      <ProtectRoute path="/help" component={NeedHelp} />
      <ProtectRoute path="/image-upload" component={ImageUpload} />
    </>
  );
  return <Router>{routes}</Router>;
}

export default App;
