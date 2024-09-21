import React, { useState } from "react";
import {
  Table,
  Form,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaTrash, FaFilter } from "react-icons/fa";
import { ReactComponent as FilterC } from "../../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../../assets/mambers/arrow-down.svg";
import Switch from "react-switch";
import { ReactComponent as Trash } from "../../assets/mambers/trash-01.svg";
import Loading from "../Loading";
import axios from "axios";
import { BASE_URL } from "../../config/WebServices";
import { useLocation } from "react-router-dom";

const usersData = [
  {
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "123 Calle Mayor",
    city: "Barcelona",
    country: "France",
    status: "Pending",
    dType: "ID",
    dNo: "SL345678",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Javier González",
    email: "javier.gonzalez@email.com",
    address: "456 Avenida Principal",
    city: "New York",
    country: "Spain",
    status: "Approved",
    dType: "Passport",
    dNo: "SL345678",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lana Steiner",
    email: "lana.steiner@email.com",
    address: "789 Calle Granada",
    city: "Los Angeles",
    country: "Spain",
    dType: "Passport",
    dNo: "SL345678",
    status: "Approved",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Sofía López",
    email: "sofia.lopez@email.com",
    address: "789 Rue Principale",
    city: "Madrid",
    dType: "ID",
    dNo: "SL345678",
    country: "United Kingdom",
    status: "Approved",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Candice Wu",
    email: "candice.wu@email.com",
    address: "555 Plaza España",
    city: "Moscow",
    country: "Spain",
    status: "Pending",
    dType: "Passport",
    dNo: "SL345678",
    active: false,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const AdminsTable = ({ adminData, deletAdmin }) => {
  const [users, setUsers] = useState(usersData);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const navigate = useLocation();

  const handleToggleActive = (index) => {
    const updatedUsers = [...users];
    // updatedUsers[index].active = !updatedUsers[index].active;
    setUsers(updatedUsers);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedUsers = [...users];
    // updatedUsers[index].status = newStatus;
    setUsers(updatedUsers);
  };

  console.log("adminData?.data", adminData);

  return (
    <Table responsive className="tblStyle">
      <thead>
        <tr className="thdCls">
          <th>
            <Form.Check type="checkbox" style={{ fontSize: 18 }} />
          </th>
          <th>
            Full Name{" "}
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>Email Address</th>

          <th>
            Status
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("status")}
            />
          </th>
          <th>
            Active
            <ArrowDown
              className="filter-icon"
              onClick={() => setShowFilterModal("active")}
            />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {adminData?.data?.map((user, index) => (
          <tr key={index}>
            <td
              className={adminData?.data?.length - 1 == index && "tdCls"}
              onClick={() => {
                navigate("/addAdmin", {
                  state: {
                    data: user,
                  },
                });
              }}
            >
              <Form.Check type="checkbox" style={{ fontSize: 18 }} />
            </td>
            <td
              className={
                adminData?.data?.length - 1 == index ? "tblCls tdCls" : "tblCls"
              }
            >
              <img
                src={user.profile_image}
                alt="avatar"
                className="avatar-img"
              />
              <div>
                <div>{user.first_name + user?.last_name}</div>
                <div className="divCls">{user?.email}</div>
              </div>
            </td>
            <td className={adminData?.data?.length - 1 == index && "tdCls"}>
              {user.email}
            </td>

            <td className={adminData?.data?.length - 1 == index && "tdCls"}>
              <Form.Select
                value={user.user_id?.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
            </td>
            <td className={adminData?.data?.length - 1 == index && "tdCls"}>
              {/* <Form.Check
                type="switch"
                id={`active-switch-${index}`}
                checked={user.active}
                onChange={() => handleToggleActive(index)}
              /> */}
              <Switch
                onChange={() => handleToggleActive(index)}
                id={`active-switch-${index}`}
                checked={!user.user_id?.is_suspended}
                offColor="#E6D5B1"
                onColor="#C1963B"
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={35}
                handleDiameter={12}
              />
            </td>
            <td className={adminData?.data?.length - 1 == index && "tdCls"}>
              <Trash className="delete-icon" onClick={() => deletAdmin(user)} />
            </td>
          </tr>
        ))}
      </tbody>{" "}
      {isLoading ? <Loading type={"bars"} /> : null}
    </Table>
  );
};

export default AdminsTable;
