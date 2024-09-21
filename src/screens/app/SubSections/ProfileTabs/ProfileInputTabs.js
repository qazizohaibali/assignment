import React, { useState } from "react";
import banner from "../../../../assets/profile/Image.svg";
import uploadIcon from "../../../../assets/profile/upload.svg";
import { useLocation, useNavigate } from "react-router-dom";
import EmailIcon from "../../../../assets/profile/mail.svg";
import ArrowDownIcon from "../../../../assets/profile/chevron-down.svg";
import CalanderIcon from "../../../../assets/profile/calendar.svg";
import { Form } from "react-bootstrap";
import { Divider } from "@mui/material";
import plusIcon from "../../../../assets/mambers/plus.svg";
import axios from "axios";
import { BASE_URL } from "../../../../config/WebServices";
import Loading from "../../../../components/Loading";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ProfileInputTabs = () => {
  const { state } = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState(null);
  const [rel, setRel] = useState(null);
  const [kids, setKids] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const getUserData = JSON.parse(localStorage.getItem("adminData"));
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    first_name: state?.data?.first_name,
    last_name: state?.data?.last_name,
    email: state?.data?.user_id?.email || "",
    address: state?.data?.address || "",
    city: state?.data?.city || "",
    country: state?.data?.country || "",
    nationality: state?.data?.nationality || "",
    password: state?.data?.password || "",
    date_of_birth: state?.data?.date_of_birth || "",
    occupation: state?.data?.occupation || "",
    gender: state?.data?.gender || "",
    id_passport_number: state?.data?.id_passport_number || "",
    relationship_status: state?.data?.relationship_status || "",
    profile_image: state?.data?.profile_image || "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name) newErrors.first_name = "First Name is required";
    if (!formData.last_name) newErrors.last_name = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone_number = "Phone number is required";
    if (!formData.date_of_birth)
      newErrors.date_of_birth = "Date of birth is required";
    if (!formData.occupation) newErrors.occupation = "Occupation is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.nationality)
      newErrors.nationality = "Nationality is required";

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.id_passport_number)
      newErrors.id_passport_number = "ID/Passport is required";
    if (!formData.relationship_status)
      newErrors.relationship_status = "Relationship Status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  const onSubmit = async (data) => {
    console.log("data customer/add", data);

    setIsLoading(true);

    try {
      const res = state?.data?.user_id?.email
        ? await axios.put(
            BASE_URL + `/customer/edit/${state?.data?.id}`,
            { ...data, phone_number: phone },
            {
              headers: {
                "x-sh-auth": getUserData?.token,
              },
            }
          )
        : await axios.post(
            BASE_URL + "/customer/add",
            { ...data, phone_number: phone },
            {
              headers: {
                "x-sh-auth": getUserData?.token,
              },
            }
          );

      console.log("res............", res.data);

      if (res?.data?.code === 201) {
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      alert(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  const handleStatusChange = (newStatus) => {
    setUsers(newStatus);
  };

  const handleStatusChangeRel = (newStatus) => {
    setRel(newStatus);
  };

  const handleStatusChangeKids = (newStatus) => {
    setKids(newStatus);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <>
      <div className="row rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Personal info</div>
              <div className="emailStyle">
                Update your photo and personal details.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="d-flex">
            {selectedImage ? (
              <div style={{ marginTop: "10px" }}>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ width: "100px", height: "auto" }}
                  className="imageStyleCopy"
                />
              </div>
            ) : (
              <img src={state?.data?.avatar} className="imageStyleCopy" />
            )}

            <div className="d-flex addShedow">
              <div className="dFlexCls">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="d-flex">
            {["First Name", "Last Name"].map((label, ind) => {
              const name = ind === 0 ? "first_name" : "last_name";
              return (
                <div className="inputDevStyle" key={name}>
                  <div className="iStyle">{label}</div>
                  <input
                    type="text"
                    name={name}
                    className="form-controlCopy1"
                    placeholder={label}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    style={{ width: "32em" }}
                  />
                  {errors[name] && <div className="error">{errors[name]}</div>}
                </div>
              );
            })}
          </div>

          <div>
            <div className="iStyle" style={{ marginLeft: 17 }}>
              Email
            </div>
            <div className="form-group form-groupCopy mb-4">
              <img
                src={EmailIcon}
                className="form-control-icon"
                style={{ marginLeft: "1em" }}
              />
              <input
                type="email"
                name="email"
                className="form-controlCopy2"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{ width: "96.8%" }}
              />
            </div>
          </div>

          <div>
            <div className="iStyle" style={{ marginLeft: 17 }}>
              Phone number
            </div>
            <div className="form-group form-groupCopy mb-4">
              <div style={{}}>
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  className="form-controlCopyCustomCopy"
                  containerStyle={{
                    outline: "none",
                  }}
                  dropdownStyle={{
                    outline: "none",
                  }}
                />
              </div>

              {/* <div className="usStyle">
                US
                <img
                  src={ArrowDownIcon}
                  className="form-control-icon"
                  style={{ marginLeft: "0.5em", marginTop: 3 }} 
                />
              </div>
              <input
                type="text"
                name="phone_number"
                className="form-controlCopyCustom"
                placeholder="+1 (555) 000-0000" 
                value={formData.phone_number} 
                onChange={handleInputChange}
                required
                style={{ width: "96.8%" }}
              /> */}
              {errors.phone_number && (
                <div className="error">{errors.phone_number}</div>
              )}
            </div>
          </div>

          <div>
            <div className="iStyle" style={{ marginLeft: 17 }}>
              Date of birth
            </div>
            <div className="form-group form-groupCopy mb-4">
              <input
                type="date"
                name="date_of_birth"
                className="form-controlCopy3"
                value={formData.date_of_birth}
                onChange={handleInputChange}
                required
                style={{ width: "96.8%" }}
              />
              {errors.date_of_birth && (
                <div className="error">{errors.date_of_birth}</div>
              )}
            </div>
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Occupation</div>
            <input
              type="text"
              name="occupation"
              className="form-controlCopy1"
              placeholder={"Occupation"}
              value={formData.occupation}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.occupation && (
              <div className="error">{errors.occupation}</div>
            )}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Address</div>
            <input
              type="text"
              name="address"
              className="form-controlCopy1"
              placeholder={"address"}
              value={formData.address}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.address && <div className="error">{errors.address}</div>}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">City</div>
            <input
              type="text"
              name="city"
              className="form-controlCopy1"
              placeholder={"city"}
              value={formData.city}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.city && <div className="error">{errors.city}</div>}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Country</div>
            <input
              type="text"
              name="country"
              className="form-controlCopy1"
              placeholder={"Country"}
              value={formData.country}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.country && <div className="error">{errors.country}</div>}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Nationality</div>
            <input
              type="text"
              name="nationality"
              className="form-controlCopy1"
              placeholder={"Country"}
              value={formData.nationality}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.nationality && (
              <div className="error">{errors.nationality}</div>
            )}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Gender</div>
            <Form.Select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="form-controlCopy1"
              style={{ width: "100%" }}
            >
              <option value="">Select</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">ID/Passport</div>
            <input
              type="text"
              name="id_passport_number"
              className="form-controlCopy1"
              placeholder={"0029000009090"}
              value={formData.id_passport_number}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.id_passport_number && (
              <div className="error">{errors.id_passport_number}</div>
            )}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Relationship Status</div>
            <Form.Select
              name="relationship_status"
              value={formData.relationship_status}
              onChange={handleInputChange}
              className="form-controlCopy1"
              style={{ width: "100%" }}
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
            </Form.Select>
            {errors.relationship_status && (
              <div className="error">{errors.relationship_status}</div>
            )}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">Password</div>
            <input
              type="password"
              name="password"
              className="form-controlCopy1"
              placeholder={"Password"}
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{ width: "100%" }}
            />
            {errors.password && <div className="error">{errors.password}</div>}
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
              style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
              onClick={() => {
                // handle cancel logic
              }}
            >
              <div className="importStyle">Cancel</div>
            </div>

            <div
              className="importDevStyle copyMem"
              style={{ cursor: "pointer" }}
              onClick={handleSubmit}
            >
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
              <div className="personalSytle">Partner info</div>
              <div className="emailStyle">
                Update your partner’s personal details.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="d-flex">
            {["First Name", "Last Name"].map((i, ind) => {
              return (
                <div className="inputDevStyle">
                  <div className="iStyle">{i}</div>
                  <input
                    type="text"
                    className="form-controlCopy1"
                    placeholder={i}
                    required
                    defaultValue={state.data?.name}
                    style={{ width: "32em" }}
                  />
                </div>
              );
            })}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">ID/Passport</div>
            <input
              type="text"
              className="form-controlCopy1"
              placeholder={"0029000009090"}
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

      {/* ------------------------------Kids Info--- */}

      <div className="row flex-grow-1 rowStyle">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Kids info</div>
              <div className="emailStyle">
                Update your kids’ personal details.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 ">
          <div className="inputDevStyle">
            <div className="iStyle">Kids Name</div>
            <Form.Select
              value={kids}
              onChange={(e) => handleStatusChangeKids(e.target.value)}
              className="form-controlCopy1"
              style={{ width: "100%" }}
            >
              <option value="">Select Kids Name</option>
              <option value="John">John</option>
              <option value="John">John</option>
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
            <div className="importDevStyle copyMem">
              <img src={plusIcon} className="" />
              <div className="importStyle colorWhite">Add More</div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------Companion Info--- */}

      {/* <div className="row flex-grow-1 rowStyle1">
        <div className="col-md-3">
          <div className="d-flex">
            <div className="flexTwoDev">
              <div className="personalSytle">Companion info</div>
              <div className="emailStyle">
                Update your companions’ personal details.
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-9 colStyle">
          <div className="d-flex">
            {["First Name", "Last Name"].map((i, ind) => {
              return (
                <div className="inputDevStyle">
                  <div className="iStyle">{i}</div>
                  <input
                    type="text"
                    className="form-controlCopy1"
                    placeholder={i}
                    required
                    defaultValue={state.data?.name}
                    style={{ width: "32em" }}
                  />
                </div>
              );
            })}
          </div>

          <div className="inputDevStyle">
            <div className="iStyle">ID/Passport</div>
            <input
              type="text"
              className="form-controlCopy1"
              placeholder={"0029000009090"}
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
      </div> */}
      {isLoading ? <Loading type={"bars"} /> : null}
    </>
  );
};

export default ProfileInputTabs;
