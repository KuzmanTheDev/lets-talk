import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import Form from "./components/Auth/SignUp/Form";
import LogIn from "./components/Auth/LogIn/LogIn";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Success from "./components/Success/Success";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import RecoverPassword from "./components/Auth/RecoverPassword";
import Dashboard from "./screens/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Form} />
      <Route path="/login" component={LogIn} />
      <Route path="/success" component={Success} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/image-upload" component={ImageUpload} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
    </Router>
  );
}

export default App;
