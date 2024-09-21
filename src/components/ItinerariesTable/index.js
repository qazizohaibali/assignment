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

import { ReactComponent as Trash1 } from "../../assets/mambers/Button.svg";

import H1 from "../../assets/mambers/h1.svg";
import H2 from "../../assets/mambers/h2.svg";
import H3 from "../../assets/mambers/h3.svg";
import H4 from "../../assets/mambers/h4.svg";

const usersData = [
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Javier",
    city: "Madrid ",
    country: "Spain",
    status: "González",
    Email1: "Marta Ruiz",
    active: true,
    avatar: "10/06/2024",
  },

  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Javier",
    city: "Madrid",
    country: "Spain",
    status: "González",
    Email1: "Ana Martínez",
    active: true,
    avatar: "10/06/2024",
  },

  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Javier",
    city: "Madrid",
    country: "Spain",
    status: "González",
    Email1: "Lea Dubois",
    active: true,
    avatar: "10/06/2024",
  },
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Javier",
    city: "Madrid ",
    country: "Spain",
    status: "González",
    Email1: "Martin López",
    active: true,
    avatar: "10/06/2024",
  },
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Drew",
    city: "Madrid",
    country: "Spain",
    status: "González",
    Email1: "Sonia Reyes",
    active: true,
    avatar: "10/06/2024",
  },
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Drew",
    city: "Madrid ",
    country: "Spain",
    status: "González",
    Email1: "Alejandro Blanco",
    active: true,
    avatar: "10/06/2024",
  },
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Drew",
    city: "Madrid",
    country: "Spain",
    status: "González",
    Email1: "Sonia Reyes",
    active: true,
    avatar: "10/06/2024",
  },
  {
    services: "12032024001",
    Ss: "Madrid",
    name: "Marta Ruiz",
    email: "marta.ruiz@email.com",
    address: "Adcs",
    city: "Madrid",
    country: "Spain",
    status: "González",
    Email1: "Sonia Reyes",
    active: true,
    avatar: "10/06/2024",
  },
];

const ItinerariesTable = () => {
  const [users, setUsers] = useState(usersData);
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
    <Table responsive className="tblStyle">
      <thead>
        <tr className="thdCls">
          <th>
            <Form.Check type="checkbox" style={{ fontSize: 18 }} />
          </th>
          <th>Itinerary request</th>
          <th>Created by</th>

          <th>Name</th>

          <th>Last Name</th>
          <th>
            Nationality{" "}
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            City{" "}
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Country{" "}
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>
            Been there before{" "}
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>

          <th>Trip Dates</th>
          <th></th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {filteredUsers.map((user, index) => (
          <tr key={index}>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Form.Check type="checkbox" style={{ fontSize: 18 }} />
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.services}
              <div className="divCls">{user.Ss}</div>
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
              {user.address}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.status}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              ES
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.country}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.Email1}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              true
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.avatar}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Trash className="delete-icon" />
              <Trash1 className="delete-icon" />
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

export default ItinerariesTable;
