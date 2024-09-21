import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";

const MemberTable = ({
  data,
  handleStatusChange,
  handleStatusChangeCheck,
  deletePress,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [users, setUsers] = useState(data?.data);
  const [filters, setFilters] = useState({
    city: "",
    address: "",
    status: "",
    active: "",
  });
  const navigate = useNavigate();
  const getUserData = JSON.parse(localStorage.getItem("adminData"));
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  console.log("ddd", data?.data);

  const handleToggleActive = (index) => {
    const updatedUsers = [...data?.data];
    console.log("updatedUsers", updatedUsers);
    // data?.data[index]?.user_id?.is_suspended = !data?.data[index]?.user_id?.is_suspended;
    // setUsers(updatedUsers);
  };

  const filteredUsers = data?.data?.filter(
    (user) =>
      (filters.city === "" ||
        user.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.address === "" ||
        user.address.toLowerCase().includes(filters.address.toLowerCase())) &&
      (filters.status === "" || user.user_id?.status === filters?.status) &&
      (filters.active === "" ||
        String(user.user_id?.is_suspended) === filters.active)
  );

  console.log("filteredUsers", filteredUsers);

  return (
    <Table responsive className="tblStyle ">
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
            Street Address
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            City
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("city")}
            />
          </th>
          <th>Country</th>

          <th>Country Code</th>
          <th>Phone Number</th>
          <th>Occupation</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Marital Status</th>

          <th>
            Status
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("status")}
            />
          </th>
          <th>
            Active
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("active")}
            />
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {filteredUsers?.map((user, index) => (
          <tr key={index}>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Form.Check type="checkbox" style={{ fontSize: 18 }} />
            </td>
            <td
              className={
                filteredUsers?.length - 1 == index ? "tblCls tdCls" : "tblCls"
              }
              onClick={() => {
                navigate("/profile", {
                  state: {
                    data: user,
                  },
                });
              }}
            >
              <img
                src={user?.profile_image}
                alt="avatar"
                className="avatar-img"
              />
              <div>
                <div>{user?.first_name + user?.last_name}</div>
                <div className="divCls">{user?.user_id?.email}</div>
              </div>
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user?.user_id?.email}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user?.address}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.city}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.country}
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.country_code}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.phone_number}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.occupation}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {new Date(user.date_of_birth).toLocaleDateString()}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.gender}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.relationship_status || "-"}
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Form.Select
                value={user?.user_id?.status}
                onChange={(e) => handleStatusChange(user, e.target.value)}
                className="status-select"
              >
                <option value="pending">Pending</option>
                <option value="accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </Form.Select>
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {/* <Form.Check
                type="switch"
                id={`active-switch-${index}`}
                checked={user.active}
                onChange={() => handleToggleActive(index)}
              /> */}
              <Switch
                onChange={() => handleStatusChangeCheck(user)}
                id={`active-switch-${index}`}
                checked={!user?.user_id?.is_suspended}
                offColor="#E6D5B1"
                onColor="#C1963B"
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={35}
                handleDiameter={12}
              />
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Trash
                className="delete-icon"
                onClick={() => deletePress(user)}
              />
            </td>
          </tr>
        ))}
      </tbody>{" "}
      {showFilterModal && (
        <div className="filter-modal">
          <div className="filter-content">
            <h4>Filter by {showFilterModal}</h4>
            <InputGroup className="mb-3">
              <FormControl
                placeholder={`Filter by ${showFilterModal}`}
                name={showFilterModal}
                value={filters[showFilterModal]}
                onChange={handleFilterChange}
              />
              <Button
                variant="primary"
                onClick={() => setShowFilterModal(false)}
              >
                Apply
              </Button>
            </InputGroup>
          </div>
        </div>
      )}
    </Table>
  );
};

export default MemberTable;
