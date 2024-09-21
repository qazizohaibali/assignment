import React, { useState } from "react";
import banner from "../../../../assets/profile/Image.svg";
import { useLocation } from "react-router-dom";
import ProfileInputTabs from "./ProfileInputTabs";
import TravelerDataTab from "./TravelerData";
import InterestsTab from "./Interests";
import SettingDatatab from "./SettingsData";
import SearchDataTab from "./SearchData";
import BookingsTab from "./Bookings";
import Savedtab from "./Saved";

const ProfileTabs = () => {
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const switchTabs = () => {
    switch (currentIndex) {
      case 0:
        return <ProfileInputTabs />;
        break;

      case 1:
        return <TravelerDataTab />;
        break;
      case 2:
        return <InterestsTab />;
        break;
      case 3:
        return <SettingDatatab />;
        break;

      case 4:
        return <SearchDataTab />;
        break;

      case 5:
        return <BookingsTab />;
        break;

      case 6:
        return <Savedtab />;
        break;

      default:
        break;
    }
  };

  return (
    <>
      <img src={banner} className="bannerCls" />
      <div className="container-fluid colCls">
        <div className="row flex-grow-1">
          <div className="col-md-12">
            <div className="d-flex">
              <img
                src={
                  state?.data?.profile_image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"
                }
                className="imageStyle"
                alt="add image"
              />
              <div className="flexTwoDev">
                <div className="nameStyle">{state.data?.first_name}</div>
                <div className="emailStyle">{state.data?.last_name}</div>
                <div className="marTop">
                  <div className="d-flex addLine">
                    {[
                      "Personal data",
                      "Traveler data",
                      "Interests",
                      "Settings data",
                      "Search data",
                      "Bookings",
                      "Saved",
                    ].map((i, ind) => {
                      return (
                        <div
                          onClick={() => {
                            setCurrentIndex(ind);
                          }}
                          className={
                            currentIndex == ind ? "ActiveCls" : " itemClsCopy"
                          }
                        >
                          {i}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ........................................ */}

        {switchTabs()}
      </div>
    </>
  );
};

export default ProfileTabs;
