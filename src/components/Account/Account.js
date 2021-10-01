import React from "react";
import userImage from "../../assets/images/account-photo.png";
import { useMediaQuery } from "../../utilities/MediaQuery";
import Layout from "../AuthorisedLayout/AuthLayout";
import Profile from "../MobileUI/Profile/Profile";

import "./Account.css";

export default function Account() {
  const web = useMediaQuery("(min-width : 776px)");

  return (
    <div>
      {web ? (
        <Layout>
          <div className="account">
            <div className="user-image-block">
              <img src={userImage} alt="User" />
              <h5>Okemati Lanre</h5>
              <p>+ Add photo</p>
            </div>

            <div className="user-info-block">
              <h4>User Profile</h4>
              <p>
                Email : <span>okematilanray@gmail.com</span>
              </p>
              <p>
                Date of Birth : <span>23rd October, 1998</span>
              </p>
              <p>
                Matric No : <span>150402107</span>
              </p>
              <p>
                Faculty : <span>Engineering</span>
              </p>
              <p>
                Department : <span>Mechanical</span>
              </p>
            </div>
          </div>
        </Layout>
      ) : (
        <Profile />
      )}
    </div>
  );
}
