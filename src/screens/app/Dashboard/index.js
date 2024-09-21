import React, { useEffect, useState } from "react";
import MiniDrawer from "../../../components/SideBar";
import Members from "../Members";
import Supplies from "../Supplies";
import Services from "../Services";
import Itineraries from "../Itineraries";
import Bookings from "../Bookings";
import Revenue from "../Revenue";
import Admins from "../Admins";
import Clouds from "../Clouds";
import { useNavigate } from "react-router-dom";

const DashboardCus = () => {
  const [curentIndex, setCurrentIndex] = useState(0);
  const [memberData, setMemberData] = useState({});
  const navigate = useNavigate();

  const getUserData = JSON.parse(localStorage.getItem("adminData"));

  // useEffect(() => {
  //   if (localStorage.getItem("ForceRestart")) {
  //     localStorage.setItem("ForceRestart", false);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000);
  //   }
  // }, []);

  useEffect(() => {
    if (!getUserData?.token) {
      navigate("/");
    }
  }, [getUserData?.token]);

  const swtichScreen = () => {
    switch (curentIndex) {
      case 0:
        return <Members />;
        break;
      case 1:
        return <Supplies />;
        break;
      case 2:
        return <Services />;
        break;
      case 3:
        return <Itineraries />;
        break;
      case 4:
        return <Bookings />;
        break;
      case 5:
        return <Revenue />;
        break;
      case 6:
        return <Admins />;
        break;
      case 7:
        return <Clouds />;
        break;

      default:
        break;
    }
  };
  return (
    <div className="container-fluid vh-100 ">
      <MiniDrawer curentIndex={curentIndex} setIndex={setCurrentIndex} />

      {swtichScreen()}
    </div>
  );
};

export default DashboardCus;
