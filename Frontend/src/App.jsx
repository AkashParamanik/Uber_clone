import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./Pages/UserLogin";
import UserSignup from "./Pages/UserSignup";
import CaptainLogin from "./Pages/CaptainLogin";
import CaptainSignup from "./Pages/CaptainSignup";
import Start from "./Pages/Start";
import UserProtectedWrapper from "./Pages/UserProtectedWrapper";
import UserLogout from "./Pages/UserLogout";
import CapatainHome from "./Pages/CapatainHome";
import CaptainProtectedWrapper from "./Pages/CaptainProtectedWrapper";
import CaptainLogout from "./Pages/CaptainLogout";
import Riding from "./Pages/Riding";
import CaptainRiding from "./Pages/CaptainRiding";
import Home from "./Pages/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/captain-riding" element={<CaptainRiding />} />

        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CapatainHome />
            </CaptainProtectedWrapper>
          }
        />

        <Route
          path="/Home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout />
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
