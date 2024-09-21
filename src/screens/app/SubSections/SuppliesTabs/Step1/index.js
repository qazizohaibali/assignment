import React, { useState } from "react";
import banner from "../../../../../assets/profile/Image.svg";
import uploadIcon from "../../../../../assets/profile/upload.svg";
import { useLocation } from "react-router-dom";
import EmailIcon from "../../../../../assets/profile/mail.svg";
import ArrowDownIcon from "../../../../../assets/profile/chevron-down.svg";
import CalanderIcon from "../../../../../assets/profile/calendar.svg";
import { Form } from "react-bootstrap";
import { Divider } from "@mui/material";
import plusIcon from "../../../../../assets/mambers/plus.svg";

const Step1 = () => {
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
      <div className="row  rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Photos</div>
              <div className="emailStyle">Update photos.</div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div>
            <div className="d-flexCus" style={{ marginTop: 30 }}>
              {[1, 2, 3].map(({ item, index }) => {
                return (
                  <div>
                    <img
                      src="https://i.pinimg.com/originals/6f/72/35/6f7235447ca2c37edf7df110269d363b.jpg"
                      width={300}
                      height={280}
                      style={{ margin: 5 }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="selectedCls">3 of 20 selected</div>
            <div className="d-flexCus">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                ({ item, index }) => {
                  return (
                    <div>
                      <img
                        src="https://i.pinimg.com/originals/6f/72/35/6f7235447ca2c37edf7df110269d363b.jpg"
                        width={90}
                        height={80}
                        style={{ margin: 5 }}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="addShedowCopy">
            {/* Images Dev///////////// */}

            <div className="dFlexClsCopy">
              <img src={uploadIcon} width={50} height={50} />
              <div className="">
                <span className="spnCls">Click to upload </span>
                <span className="dragCls">or drag and drop</span>
              </div>

              <div className="svgCls">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </div>
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
              <div className="importStyle">Undo</div>
            </div>

            <div className="importDevStyle copyMem">
              <div className="importStyle colorWhite">Save changes</div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------Partner Info--- */}

      <div className="row flex-grow-1 rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Information</div>
              <div className="emailStyle">Updatdvfsfv</div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="inputDevStyle">
            <div className="iStyle">Title</div>
            <input
              type="text"
              className="form-controlCopy1"
              placeholder={"0029000009090"}
              required
              // defaultValue={state.data?.name}
              style={{ width: "100%" }}
            />
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Description</div>
            <textarea
              type="text"
              className="form-controlCopy1"
              placeholder={"Description..."}
              required
              // defaultValue={state.data?.name}
              style={{ width: "100%", height: 150 }}
            />
          </div>

          <div className="d-flex">
            {["Street address", "City"].map((i, ind) => {
              return (
                <div className="inputDevStyle">
                  <div className="iStyle">{i}</div>
                  <input
                    type="text"
                    className="form-controlCopy1"
                    placeholder={i}
                    required
                    defaultValue={
                      ind == 0 ? state?.data?.address : state?.data?.city
                    }
                    style={{ width: "32em" }}
                  />
                </div>
              );
            })}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Website</div>
            <input
              type="text"
              className="form-controlCopy1"
              placeholder={"https://abc.com"}
              required
              // defaultValue={state.data?.name}
              style={{ width: "100%" }}
            />
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

      {/* ------------------------------Companion Info--- */}

      {state?.title === "Restaurant" && (
        <div className="row flex-grow-1 rowStyle1">
          <div className="col-md-3">
            <div className="d-flex">
              <div className="flexTwoDev">
                <div className="personalSytle">Extra data</div>
                <div className="emailStyle">
                  Update your companions’ personal details.
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9 colStyle">
            <div className="d-flex">
              {["Street address", "City"].map((i, ind) => {
                return (
                  <div className="inputDevStyle">
                    <div className="iStyle">{i}</div>
                    <input
                      type="text"
                      className="form-controlCopy1"
                      placeholder={i}
                      required
                      defaultValue={
                        ind == 0 ? state?.data?.address : state?.data?.city
                      }
                      style={{ width: "32em" }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="inputDevStyle">
              <div className="iStyle">Description</div>
              <textarea
                type="text"
                className="form-controlCopy1"
                placeholder={"Description..."}
                required
                // defaultValue={state.data?.name}
                style={{ width: "100%", height: 150 }}
              />
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
      )}
    </>
  );
};

export default Step1;
