import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../screens/auth/Login";
import SignUpPage from "../screens/auth/SignUp";
import ForgotPage from "../screens/auth/Forgot";
import OtpScreen from "../screens/auth/OtpScreen";
import DashboardCus from "../screens/app/Dashboard";
import ProfilesTabs from "../screens/app/SubSections/ProfileTabs";
import SubServicesTabs from "../screens/app/SubSections/SuppliesTabs/SubServices";
import PrivateRoutes from "./PrivateRoutes";
import AuthGuard from "./AuthGuard";
import ProfileInputTabs from "../screens/app/SubSections/ProfileTabs/ProfileInputTabs";
import NotFoundPage from "../components/NotFound";
import Members from "../screens/app/Members";
import Suppliers from "../screens/app/Supplies";
import Services from "../screens/app/Services";
import Itineraries from "../screens/app/Itineraries";
import Bookings from "../screens/app/Bookings";
import Revenue from "../screens/app/Revenue";
import Admins from "../screens/app/Admins";
import Clouds from "../screens/app/Clouds";
import NetworkError from "../components/NetworkError";

function Router() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          }
        />
        <Route path="/addAdmin" element={<SignUpPage />} />
        <Route
          path="/forgot"
          element={
            <AuthGuard>
              <ForgotPage />
            </AuthGuard>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <AuthGuard>
              <OtpScreen />
            </AuthGuard>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Members />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/suppliers"
          element={
            <PrivateRoutes>
              <Suppliers />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/services"
          element={
            <PrivateRoutes>
              <Services />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/itineraries"
          element={
            <PrivateRoutes>
              <Itineraries />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/bookings"
          element={
            <PrivateRoutes>
              <Bookings />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/revenue"
          element={
            <PrivateRoutes>
              <Revenue />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/admins"
          element={
            <PrivateRoutes>
              <Admins />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/cloud"
          element={
            <PrivateRoutes>
              <Clouds />
            </PrivateRoutes>
          }
        ></Route>

        <Route path="/profile" element={<ProfilesTabs />} />
        <Route path="/Supplies" element={<SubServicesTabs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/add-user"
          element={
            <PrivateRoutes>
              <ProfileInputTabs />
            </PrivateRoutes>
          }
        />

        {/* <Route path="*" element={<PrivateRoutes><NotFoundPage /></PrivateRoutes>} /> */}
      </Routes>
    </>
  );
}

export default Router;
