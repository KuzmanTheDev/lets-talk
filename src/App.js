import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import { useMediaQuery } from "./utilities/MediaQuery";
import Home from "./screens/Home/Home";
import Admin from "./screens/Admin/Admin";
import Dashboard from "./screens/Dashboard";
import AdminDashboard from "./screens/Admin/AdminDashboard";
import Form from "./components/Auth/SignUp/Form";
import LogIn from "./components/Auth/LogIn/LogIn";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Success from "./components/Success/Success";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import RecoverPassword from "./components/Auth/RecoverPassword";
import GetStarted from "./components/GetStarted/GetStarted";
import Chat from "./components/Conversations/Chat/Chat";
import Layout from "./components/AuthorisedLayout/AuthLayout";
import Account from "./components/Account/Account";
import NeedHelp from "./components/NeedHelp/NeedHelp";
// import NotFound from "./components/NotFoundPage/NotFound";
// import { AuthRoute } from "./utilities/AuthRoute";
import "./App.css";
//TODO: uninstall jwtdeode

function App() {
  const { user } = useContext(AuthContext);
  const web = useMediaQuery("(min-width : 930px)");
  // console.log(user);
  let routes = (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Form} />
      <Route path="/login" component={LogIn} />
      <Route path="/success" component={Success} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/get-started" component={GetStarted} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route exact path="/admin" component={Admin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      {/* <Route path="*" component={NotFound} /> */}
    </>
  );

  if (user && web) {
    routes = (
      <div>
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/account" component={Account} />
          <Route path="/help" component={NeedHelp} />
          <Route path="/chat/:id" component={Chat} />
          <Route path="/image-upload" component={ImageUpload} />
          {/* <Route path="*" component={NotFound} /> */}
        </Layout>
      </div>
    );
  } else if (user && !web) {
    routes = (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route path="/account" component={Account} />
        <Route path="/help" component={NeedHelp} />
        <Route path="/chat/:id" component={Chat} />
        <Route path="/image-upload" component={ImageUpload} />
        {/* <Route path="*" component={NotFound} /> */}
      </div>
    );
  }

  return <Router>{routes}</Router>;
}

export default App;
