import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import {Sidebar} from "../Layout/Sidebar";
import { getAccessToken } from "../utils/setAuthToken";
import MiniDrawer from "../components/SideBar";



export default function PrivateRoutes({ children, title }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.classList.toggle('fixed-navbar');
  }, []);
  const navigate = useNavigate();
 
  let token = getAccessToken()
  console.log(token);
  
  useEffect(() => {
    if (!token) {
      console.log("navigate to login")
      navigate('/login', { replace: true })
    }
  }, [token])

  return (
    <>
    <MiniDrawer curentIndex={currentIndex} setIndex={setCurrentIndex}/>
      <Navbar />
      <div className="container-fluid app-content content dashboard mb-5" style={{marginTop:"80px"}}>
        <div className="content-wrapper">
          <div className="content-body">
            {children}
          </div>
        </div>
      </div>
    </>

  );
}

PrivateRoutes.propTypes = {

}

