import React, { useState } from "react";
import banner from "../../../../assets/profile/Image.svg";
import uploadIcon from "../../../../assets/profile/upload.svg";
import { useLocation } from "react-router-dom";
import EmailIcon from "../../../../assets/profile/mail.svg";
import ArrowDownIcon from "../../../../assets/profile/chevron-down.svg";
import CalanderIcon from "../../../../assets/profile/calendar.svg";
import { Form } from "react-bootstrap";
import { Divider } from "@mui/material";
import plusIcon from "../../../../assets/mambers/plus.svg";

const TravelerDataTab = () => {
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState(null);
  const [rel, setRel] = useState(null);
  const [kids, setKids] = useState(null);

  const handleStatusChange = (newStatus) => {
    setUsers(newStatus);
  };

  const handleStatusChangeRel = (newStatus) => {
    setRel(newStatus);
  };

  const handleStatusChangeKids = (newStatus) => {
    setKids(newStatus);
  };

  return (
    <>
      <div className="row flex-grow-1 rowStyle1">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Traveler info</div>
              <div className="emailStyle">Update your traveler details.</div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="inputDevStyle">
            {[
              "Number of trips per year",
              "Ranges of countries visited",
              "Trip style",
              "Personal style",
              "Ranges of countries visited",
              "Accommodation's preferences",
              "Travel destinations",
              "Dietary guidelines",
              "Traveler´s companions",
            ].map((item, index) => {
              return (
                <div style={{ marginTop: 20, marginBottom: 20 }}>
                  <div className="iStyle">{item}</div>
                  <Form.Select
                    value={rel}
                    onChange={(e) => handleStatusChangeRel(e.target.value)}
                    className="form-controlCopy1"
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
    </>
  );
};

export default TravelerDataTab;
