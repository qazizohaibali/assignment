import React, { useState } from "react";
import {
  Table,
  Form,
  Dropdown,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import { ReactComponent as ArrowDown } from "../../../../assets/mambers/arrow-down.svg";

import { ReactComponent as Trash } from "../../../../assets/mambers/trash-01.svg";

const usersData = [
  {
    services: "Madrid",
    Ss: "4 Sept 2023",
    Dst: "Madrid",
    time: "22-24 Sept, 2023",
    trv: "Family",
    nRooms: "2",
    Aprice: "300-700",
  },

  {
    services: "Madrid",
    Ss: "3 Sept 2023",
    Dst: "Madrid",
    time: "22-24 Sept, 2023",
    trv: "Family",
    nRooms: "1",
    Aprice: "400-600",
  },

  {
    services: "Madrid",
    Ss: "4 Sept 2023",
    Dst: "Madrid",
    time: "22-24 Sept, 2023",
    trv: "Family",
    nRooms: "1",
    Aprice: "300-700",
  },
];

const SearchDataTab = () => {
  return (
    <div className="row flex-grow-1 rowStyle1">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <Table responsive className="tblStyle">
          <thead>
            <tr className="thdCls">
              <th>
                <Form.Check type="checkbox" style={{ fontSize: 18 }} />
              </th>
              <th>
                Date
                <ArrowDown className="filter-icon" onClick={() => {}} />
              </th>
              <th>Destination</th>

              <th>Starting & return dates</th>

              <th>Traveling with</th>
              <th>Number of rooms </th>
              <th>Accomodation price range </th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer" }}>
            {usersData?.map((user, index) => (
              <tr key={index}>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  <Form.Check type="checkbox" style={{ fontSize: 18 }} />
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  {user.services}
                  <div className="divCls">{user.Ss}</div>
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  {user.Dst}
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  {user.time}
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  <Form.Select
                    value={user.trv}
                    onChange={(e) => {}}
                    className="status-select"
                  >
                    <option value="Family">Family</option>
                    <option value="Family">Family</option>
                    <option value="Family">Family</option>
                  </Form.Select>
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  {user.nRooms}
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  {user.Aprice}
                </td>
                <td className={usersData?.length - 1 == index && "tdCls"}>
                  <Trash className="delete-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="col-md-1"></div>
    </div>
  );
};

export default SearchDataTab;
