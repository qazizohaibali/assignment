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
import Imp from "../../assets/mambers/imp.svg";
import Exp from "../../assets/mambers/export.svg";
import Impo from "../../assets/mambers/import.svg";
import Serv from "../../assets/mambers/serv.svg";
import File from "../../assets/mambers/Fileicon.svg";
import { ReactComponent as Trash } from "../../assets/mambers/trash-01.svg";

const usersData = [
  {
    services: "Members Import",
    Ss: "0001A",
    icon: Impo,
    name: "María Moreno",
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Marta Ruiz",

    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },

  {
    services: "Services Export",
    Ss: "0001A",
    name: "Diego López",
    icon: Exp,
    email: "Payments",
    address: "789 Rue Principale",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Ana Martínez",

    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },

  {
    services: "Services Export",
    Ss: "0001A",
    name: "Viator",
    icon: Serv,
    email: "Experience",
    address: "456 Avenida Principal",
    city: "Madrid",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Lea Dubois",

    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    services: "Bookings Export",
    Ss: "0001A",
    name: "Hotelston",
    icon: Imp,
    email: "Hotel",
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Martin López",

    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    services: "Itineraries Import",
    Ss: "0001A",
    name: "Redsys",
    email: "Payments",
    address: "789 Rue Principale",
    city: "Madrid",
    country: "Spain",
    icon: Imp,
    status: "93 012 3456",
    Email1: "Sonia Reyes",

    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    services: "Services Import",
    Ss: "0001A",
    name: "Hotelston",
    email: "Hotel",
    icon: Imp,
    address: "23 Calle Mayor",
    city: "Madrid ",
    country: "Spain",
    status: "93 012 3456",
    Email1: "Alejandro Blanco",

    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const CloudsTable = () => {
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
          <th>Operation type</th>
          <th>
            Request by
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>Request time</th>
          <th>
            Request time and date
            <FilterC
              className="filter-icon"
              onClick={() => setShowFilterModal("address")}
            />
          </th>
          <th>File </th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {filteredUsers.map((user, index) => (
          <tr key={index}>
            <td className={filteredUsers?.length - 1 == index && "tdCls"}>
              <Form.Check type="checkbox" style={{ fontSize: 18 }} />
            </td>

            <td className={filteredUsers?.length - 1 == index ? "tdCls" : ""}>
              <img
                src={index == 0 ? Impo : index === 2 ? Serv : Exp}
                alt="icon"
                className="tblClsCopy"
              />
              <div style={{ marginLeft: 40 }}>
                <div>{user.services}</div>
                <div className="divCls">{user.Ss}</div>
              </div>
            </td>
            <td
              className={
                filteredUsers?.length - 1 == index ? "tblCls tdCls" : "tblCls"
              }
            >
              <img src={user.avatar} alt="avatar" className="avatar-img" />
              <div>
                <div>{user.name}</div>
                <div className="divCls">{user.Ss}</div>
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

export default CloudsTable;
