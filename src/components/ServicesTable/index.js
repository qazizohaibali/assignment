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

import H1 from "../../assets/mambers/h1.svg";
import H2 from "../../assets/mambers/h2.svg";
import H3 from "../../assets/mambers/h3.svg";
import H4 from "../../assets/mambers/h4.svg";

const usersData = [
  {
    services: "Lhardy",
    Ss: "Local",
    name: "Hotelston",
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Marta Ruiz",
    active: true,
    avatar: H1,
  },

  {
    services: "Palacio Real",
    Ss: "Private Tour",
    name: "Redsys",
    email: "Payments",
    address: "789 Rue Principale",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Ana Martínez",
    active: true,
    avatar: H4,
  },

  {
    services: "Teatro Real",
    Ss: "Turandot Opera",
    name: "Viator",
    email: "Experience",
    address: "456 Avenida Principal",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Lea Dubois",
    active: true,
    avatar: H2,
  },
  {
    services: "Saddle",
    Ss: "Michelin star",
    name: "Hotelston",
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Martin López",
    active: true,
    avatar: H1,
  },
  {
    services: "Santo Mauro",
    Ss: "City Center",
    name: "Redsys",
    email: "Payments",
    address: "789 Rue Principale",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Sonia Reyes",
    active: true,
    avatar: H4,
  },
  {
    services: "Orfila",
    Ss: "City Center",
    name: "Hotelston",
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Alejandro Blanco",
    active: true,
    avatar: H1,
  },
  {
    services: "Madrid Edition",
    Ss: "City Center",
    name: "CoverManager",
    email: "Restaurant",
    address: "789 Calle Granada",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Sonia Reyes",
    active: true,
    avatar: H3,
  },
  {
    services: "Casa Lucio",
    Ss: "Local",
    name: "Redsys",
    email: "Payments",
    address: "789 Rue Principale",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Sonia Reyes",
    active: true,
    avatar: H4,
  },
];

const ServicesTable = () => {
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
          <th>Service</th>
          <th>
            Supplier
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>Category</th>
          <th>
            Address
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>City</th>
          <th>Company</th>
          <th>Account manager name</th>
          <th>Phone Number</th>

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
              <img src={user.avatar} alt="avatar" className="avatar-img" />
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
              {user.Email1}
            </td>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {user.status}
            </td>

            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              {/* <Form.Check
                type="switch"
                id={`active-switch-${index}`}
                checked={user.active}
                onChange={() => handleToggleActive(index)}
              /> */}
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

export default ServicesTable;
