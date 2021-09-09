import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// import {useHistory}
// import not_found from "../../assets/images/404.png";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Sorry, Page not found...";
  }, []);

  const history = useHistory();

  return (
    <section className="not-found">
      <div className="number">404</div>
      <div>There's nothing here...</div>
      <button
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Go home
      </button>
    </section>
  );
}
