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
import { ReactComponent as Trash } from "../../assets/mambers/Button.svg";

import H1 from "../../assets/mambers/h1.svg";
import H2 from "../../assets/mambers/h2.svg";
import H3 from "../../assets/mambers/h3.svg";
import H4 from "../../assets/mambers/h4.svg";
import { useNavigate } from "react-router-dom";
import SuppliesServies from "../SuppliesServices";

const usersData = [
  {
    name: "Hotelston",
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Diego Canto ",
    country: "-",
    status: "93 012 3456",
    Email1: "diego.canto@email.com",
    active: true,
    avatar: H1,
  },
  {
    name: "Viator",
    email: "Experience",
    address: "456 Avenida Principal",
    city: "Marta Ruiz",
    country: "Carmen Nuñez",
    status: "93 012 3456",
    Email1: "marta.ruiz@email.com",
    active: true,
    avatar: H2,
  },
  {
    name: "CoverManager",
    email: "Restaurant",
    address: "789 Calle Granada",
    city: "Ana Martínez",
    country: "-",
    status: "93 012 3456",
    Email1: "marta.ruiz@email.com",
    active: true,
    avatar: H3,
  },
  {
    name: "Redsys",
    email: "Payments",
    address: "789 Rue Principale",
    city: "Lea Dubois",
    country: "Eloise Lamarc",
    status: "93 012 3456",
    Email1: "marta.ruiz@email.com",
    active: true,
    avatar: H4,
  },
];

const SuppliersTable = () => {
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
    <Table responsive className="tblStyle">
      <thead>
        <tr className="thdCls">
          <th>
            <Form.Check type="checkbox" style={{ fontSize: 18 }} />
          </th>
          <th>
            Supplier
            <ArrowDown
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
          <th>
            Account Manager
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("city")}
            />
          </th>
          <th>Account Manager #2</th>
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
                if (currentIndex === index) {
                  setCurentIndex(null);
                } else {
                  setCurentIndex(index);
                }
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
                {user.status}
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                {user.Email1}
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
                  className={
                    (currentIndex || currentIndex == 0) && "react-switch-bg1"
                  }
                />
              </td>
              <td className={filteredUsers?.length - 1 == index && "tdCls"}>
                <Trash className="delete-icon" />
              </td>
            </tr>
            {currentIndex === index && <SuppliesServies title={user.email} />}
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

export default SuppliersTable;
