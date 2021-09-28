import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useMediaQuery } from "./utilities/MediaQuery";
import Home from "./screens/Home/Home";
import Admin from "./screens/Admin/Admin";
import Dashboard from "./screens/Dashboard/index";
import AdminDashboard from "./screens/Admin/AdminDashboard";
import Form from "./components/Auth/SignUp/Form";
import LogIn from "./components/Auth/LogIn/LogIn";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Success from "./components/Success/Success";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import RecoverPassword from "./components/Auth/RecoverPassword";
import Chat from "./components/Conversations/Chat/Chat";
import Layout from "./components/AuthorisedLayout/AuthLayout";
import Account from "./components/Account/Account";
import NeedHelp from "./components/NeedHelp/NeedHelp";
// import { AuthRoute } from "./utilities/AuthRoute";
import Profile from "./components/MobileUI/Profile/Profile";
import Settings from "./components/MobileUI/Settings/Settings";
import Conversations from "./components/MobileUI/Conversations/Convo";
import "./App.css";
import Video from "./components/Video/Video";

function App() {
  const { user } = useContext(AuthContext);
  const web = useMediaQuery("(min-width : 776px)");

  let routes = (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Form} />
      <Route path="/login" component={LogIn} />
      <Route path="/success" component={Success} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/admin" component={Admin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/video" component={Video} />
    </>
  );

  if (user && web) {
    routes = (
      <div>
        <Layout>
          <Route exact path="/chat" component={Dashboard} />
          <Route path="/account" component={Account} />
          <Route path="/help" component={NeedHelp} />
          <Route path="/chat/:id" component={Chat} />
          <Route path="/image-upload" component={ImageUpload} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Layout>
      </div>
    );
  } else if (user && !web) {
    routes = (
      <div>
        <Route exact path="/chat" component={Conversations} />
        <Route path="/account" component={Profile} />
        <Route path="/help" component={Settings} />
        <Route path="/chat/:id" component={Chat} />
        <Route path="/image-upload" component={ImageUpload} />
        {/* <Route path="*" component={NotFound} /> */}
      </div>
    );
  }

  return <Router>{routes}</Router>;
}

export default App;
