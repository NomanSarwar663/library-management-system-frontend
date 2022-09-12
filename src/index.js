import ReactDOM from "react-dom/client";
import React, {Suspense} from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/JWTContext";
import NotistackProvider from "./component/NotistackProvider";
import Router from "./routes";
import reportWebVitals from "./reportWebVitals";
import { CircularProgress } from "@mui/material";
import moment from "moment-business-days";

const root = ReactDOM.createRoot(document.getElementById("root"));

// put the holidays (MM-DD) in this array so they can be exclude while calculating the late penalty
const holidays = [
  "02/05", // Kashmir day
  "03/23", // Pakistan Day
  "04/04", // Death of Zulfiqar Ali Bhutto
  "05/01", // Labour Day
  "08/14", // Independence day
  "12/25", // Quaid-e-Azam day
  "12/27"  // Anniversary of Benazir Bhutto's Death
];

moment.updateLocale("us", {
  holidays,
  holidayFormat: "MM/DD",
});

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
