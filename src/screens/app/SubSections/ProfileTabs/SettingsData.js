import React, { useState } from "react";
import banner from "../../../../assets/profile/Image.svg";
import uploadIcon from "../../../../assets/profile/upload.svg";
import { useLocation } from "react-router-dom";
import VisaIcon from "../../../../assets/profile/visa.svg";
import ArrowDownIcon from "../../../../assets/profile/chevron-down.svg";
import ClockIcon from "../../../../assets/profile/clock.svg";
import { Form } from "react-bootstrap";
import { Divider } from "@mui/material";
import plusIcon from "../../../../assets/mambers/plus.svg";
import Switch from "react-switch";

const SettingDatatab = () => {
  const { state } = useLocation();
  const [isBool, setBool] = useState(false);
  const [isBoolNoti, setBoolNoti] = useState(false);
  const [isBoolPro, setBoolPro] = useState(false);
  const [users, setUsers] = useState(null);
  const [rel, setRel] = useState(null);
  const [kids, setKids] = useState(null);
  const [usersSw, setUsersSw] = useState(null);

  const handleStatusChange = (newStatus) => {
    setUsers(newStatus);
  };

  const handleStatusChangeRel = (newStatus) => {
    setRel(newStatus);
  };

  const handleStatusChangeKids = (newStatus) => {
    setKids(newStatus);
  };

  const handleToggleActive = (index) => {
    setUsersSw(index);
  };
  return (
    <>
      <div className="row  rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Payment Settings</div>
              <div className="emailStyle"></div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle" style={{ paddingTop: 30 }}>
          <div className="inputDevStyle">
            <div className="iStyle">Payment Card</div>
            <img
              src={VisaIcon}
              className="form-control-icon"
              style={{ position: "absolute", marginTop: 7, marginLeft: 10 }}
            />
            <Form.Select
              value={users}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="form-controlCopy10"
              style={{ width: "100%" }}
            >
              <option value="">Select</option>
              <option value="Visa ending in 1234 (Expiry 06/2024)">
                <div className="visaStyle">
                  Visa ending in 1234 (Expiry 06/2024)
                </div>
              </option>
              <option value="Visa ending in 1234 (Expiry 06/2024)">
                Visa ending in 1234 (Expiry 06/2024)
              </option>
            </Form.Select>
          </div>

          <div className="dFlexSw">
            <Switch
              onChange={() => setBool(!isBool)}
              id={`active-switch-${isBool}`}
              checked={isBool}
              offColor="#E6D5B1"
              onColor="#1E3D00"
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={35}
              handleDiameter={15}
            />
            <div className="iStyleCopy" style={{ marginLeft: 17 }}>
              Loyalty Card
            </div>
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Currency</div>
            <Form.Select
              value={users}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="form-controlCopy1"
              style={{ width: "100%" }}
            >
              <option value="">Select</option>
              <option value="USD">United States Dollar</option>
              <option value="USD">United States Dollar</option>
            </Form.Select>
          </div>
          <Divider style={{ color: "darkgray" }} />
          <div
            className="d-flex"
            style={{
              float: "right",
              marginTop: 50,
              marginRight: 40,
              marginBottom: 50,
            }}
          >
            <div
              className="importDevStyle"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <div className="importStyle">Cancel</div>
            </div>

            <div className="importDevStyle copyMem">
              <div className="importStyle colorWhite">Save changes</div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------Country & Language Info--- */}

      <div className="row flex-grow-1 rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Country & Language</div>
              <div className="emailStyle"> </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div>
            {["Country", "Tmezone", "Language"].map((item, index) => {
              return (
                <div className="inputDevStyle">
                  <div className="iStyle">{item}</div>
                  {index != 2 ? (
                    <img
                      src={
                        index == 1
                          ? ClockIcon
                          : index == 0
                          ? "https://t4.ftcdn.net/jpg/05/22/35/01/360_F_522350125_mPLuK4cNT6RNN6bvpuKZpLGjqbJr5EiL.jpg"
                          : null
                      }
                      className="form-control-icon"
                      style={{
                        position: "absolute",
                        marginTop: 12,
                        marginLeft: 10,
                        width: 25,
                        height: 25,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        marginTop: 12,
                        marginLeft: 10,
                        width: 25,
                        height: 25,
                      }}
                    >
                      EN
                    </div>
                  )}
                  <Form.Select
                    value={users}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className="form-controlCopy11"
                    style={{ width: "100%" }}
                  >
                    <option value="">Select</option>
                    <option value={item}>{item}</option>
                    <option value={item}>{item}</option>
                  </Form.Select>
                </div>
              );
            })}
          </div>
          <Divider style={{ color: "darkgray" }} />
          <div
            className="d-flex"
            style={{
              float: "right",
              marginTop: 50,
              marginRight: 40,
              marginBottom: 50,
            }}
          >
            <div
              className="importDevStyle"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <div className="importStyle">Cancel</div>
            </div>

            <div className="importDevStyle copyMem">
              <div className="importStyle colorWhite">Save changes</div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------Kids Info--- */}

      {/* ------------------------------Companion Info--- */}

      <div className="row flex-grow-1 rowStyle1">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Notification Settings</div>
              <div className="emailStyle"></div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="dFlexSw">
            <Switch
              onChange={() => setBoolNoti(!isBoolNoti)}
              id={`active-switch-${isBoolNoti}`}
              checked={isBoolNoti}
              offColor="#E6D5B1"
              onColor="#1E3D00"
              checkedIcon={false}
              uncheckedIcon={false}
              height={20}
              width={35}
              handleDiameter={15}
            />
            <div className="iStyleCopy" style={{ marginLeft: 17 }}>
              Newsletter on emails
            </div>
          </div>
          <div className="dFlexSw">
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
              Promos & Offers
            </div>
          </div>

          <Divider style={{ color: "darkgray" }} />
          <div
            className="d-flex"
            style={{
              float: "right",
              marginTop: 50,
              marginRight: 40,
              marginBottom: 50,
            }}
          >
            <div
              className="importDevStyle"
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <div className="importStyle">Cancel</div>
            </div>

            <div className="importDevStyle copyMem">
              <div className="importStyle colorWhite">Save changes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingDatatab;
