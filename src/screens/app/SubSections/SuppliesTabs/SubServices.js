import React, { useState } from "react";
import banner from "../../../../assets/profile/Image.svg";
import { useLocation } from "react-router-dom";
import Step1 from "./Step1";
import Switch from "react-switch";

const SubServicesTabs = () => {
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBoolPro, setBoolPro] = useState(false);

  const switchTabs = () => {
    switch (currentIndex) {
      case 0:
        return <Step1 />;
        break;

      //   case 1:
      //     return <TravelerDataTab />;
      //     break;
      //   case 2:
      //     return <InterestsTab />;
      //     break;
      //   case 3:
      //     return <SettingDatatab />;
      //     break;

      //   case 4:
      //     return <SearchDataTab />;
      //     break;

      //   case 5:
      //     return <BookingsTab />;
      //     break;

      //   case 6:
      //     return <Savedtab />;
      //     break;

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
              <div className="flexTwoDev">
                <div className="nameStyle">{state.data?.name}</div>
                <div className="emailStyle">{state?.title}</div>
                <div className="marTop">
                  <div className="d-flex addLineCopy">
                    {["Content", "Commissions"].map((i, ind) => {
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
              <div className="dFlexSwCopy">
                <Switch
                  onChange={() => setBoolPro(!isBoolPro)}
                  id={`active-switch-${isBoolPro}`}
                  checked={isBoolPro}
                  offColor="#E6D5B1"
                  onColor="#1E3D00"
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={20}
                  width={35}
                  handleDiameter={15}
                />
                <div className="iStyleCopy" style={{ marginLeft: 17 }}>
                  Active
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

export default SubServicesTabs;
