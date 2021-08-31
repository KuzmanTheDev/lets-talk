import { BrowserRouter as Router, Route } from "react-router-dom";
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
import Conversations from "./components/Conversations/Conversations";
import { useMediaQuery } from "./helpers/MediaQuery";
import "./App.css";

function App() {
  const web = useMediaQuery("(min-width : 930px)");
  const authorisedUser = true;
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
    </>
  );

  if (authorisedUser && web) {
    routes = (
      <div>
        <Layout>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/account" component={Account} />
          <Route path="/help" component={NeedHelp} />
          <Route path="/dashboard/chat/:id" component={Chat} />
          <Route path="/image-upload" component={ImageUpload} />
        </Layout>
      </div>
    );
  } else if (authorisedUser && !web) {
    routes = (
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/help" component={NeedHelp} />
        <Route path="/dashboard/chat/:id" component={Chat} />
        <Route path="/image-upload" component={ImageUpload} />
      </div>
    );
  }

  return <Router>{routes}</Router>;
}

export default App;
