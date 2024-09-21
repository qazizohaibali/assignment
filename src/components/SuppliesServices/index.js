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
import { ReactComponent as Trash1 } from "../../assets/mambers/Button.svg";
import { ReactComponent as Trash } from "../../assets/mambers/trash-01.svg";

import H1 from "../../assets/mambers/h1.svg";
import H2 from "../../assets/mambers/h2.svg";
import H3 from "../../assets/mambers/h3.svg";
import H4 from "../../assets/mambers/h4.svg";
import { useNavigate } from "react-router-dom";

const usersData = [
  {
    name: "Santo Mauro",
    email: "City Center",
    address: "23 Calle Mayor",
    city: "Madrid",
    country: "Spain",
    status: "Alejandro Blanco",
    pNo: "93 012 3456",
    Email1: "diego.canto@email.com",
    active: true,
    avatar: H1,
  },
  {
    name: "Orfila",
    email: "City Center",
    address: "456 Avenida Principal",
    city: "Madrid",
    country: "Spain",
    status: "Sonia Reyes",
    pNo: "93 012 3456",
    Email1: "marta.ruiz@email.com",
    active: true,
    avatar: H2,
  },
  {
    name: "Madrid Edition",
    email: "City Center",
    address: "789 Calle Granada",
    city: "Madrid",
    country: "Spain",
    status: "Diego Canto",
    pNo: "93 012 3456",
    Email1: "marta.ruiz@email.com",
    active: true,
    avatar: H3,
  },
];

const SuppliesServies = ({ title }) => {
  const [users, setUsers] = useState(usersData);
  const [currentIndex, setCurentIndex] = useState(null);
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    city: "",
    address: "",
    status: "",
    active: "",
  });

  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleToggleActive = (index) => {
    const updatedUsers = [...users];
    updatedUsers[index].active = !updatedUsers[index].active;
    setUsers(updatedUsers);
  };

  const handleStatusChange = (index, newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[index].status = newStatus;
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter(
    (user) =>
      (filters.city === "" ||
        user.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.address === "" ||
        user.address.toLowerCase().includes(filters.address.toLowerCase())) &&
      (filters.status === "" || user.status === filters.status) &&
      (filters.active === "" || String(user.active) === filters.active)
  );

  return (
    <Table responsive className="tblStyleCopySup">
      <thead>
        <tr className="thdCls">
          <th>
            <Form.Check type="checkbox" style={{ fontSize: 18 }} />
          </th>
          <th>Services</th>
          <th>
            subCategory{" "}
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Account Manager name</th>
          <th>Phone Number</th>
          <th>Email</th>
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
        {filteredUsers.map((user, index) => (
          <>
            <tr
              key={index}
              onClick={() => {
                navigate("/Supplies", {
                  state: {
                    data: user,
                    title: title,
                  },
                });
              }}
            >
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                <Form.Check type="checkbox" style={{ fontSize: 18 }} />
              </td>
              <td
                className={
                  filteredUsers?.length - 1 == index ? "tblCls tdCls" : "tblCls"
                }
              >
                <div>
                  <div>{user.name}</div>
                  <div className="divCls">{user.email}</div>
                </div>
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.email}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.address}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.city}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.country}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.status}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                93 012 3456
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                diego.canto@email.com
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                <Switch
                  onChange={() => handleToggleActive(index)}
                  id={`active-switch-${index}`}
                  checked={user.active}
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
                <Trash className="delete-icon" />
                <Trash1 className="delete-icon" />
              </td>
            </tr>
            {currentIndex === index && <SuppliesServies />}
          </>
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

export default SuppliesServies;
