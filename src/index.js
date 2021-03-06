import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersProvider } from "./Context/UsersContext";
import { AuthProvider } from "./Context/AuthContext";
import { ReactQueryDevtools } from "react-query/devtools";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UsersProvider>
          <App />
          <ReactQueryDevtools />
        </UsersProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
