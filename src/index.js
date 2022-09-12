import ReactDOM from "react-dom/client";
import React, {Suspense} from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/JWTContext";
import NotistackProvider from "./component/NotistackProvider";
import Router from "./routes";
import reportWebVitals from "./reportWebVitals";
import { CircularProgress } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Suspense fallback={<CircularProgress />}>
    <AuthProvider>
      <NotistackProvider>
        <Router />
      </NotistackProvider>
    </AuthProvider>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
