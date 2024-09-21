import React from "react";
import Filters from "../../../components/Filter";
import { MainHeader } from "../../../components/Header";
import TableView from "../../../components/Table";

const Clouds = () => {
  return (
    <>
      <div className="" style={{marginRight:"20px"}}>
        <MainHeader heading={"Cloud Operation"} />
        </div>
        <Filters
          onSearch={() => {}}
          onStatusChange={() => {}}
          onFilterChange={() => {}}
        />
      <div className="col-md-11" style={{ marginLeft: "7em" }}>
        <TableView
          data={[]}
          fields={[{ label: "Name", key: "data" }]}
          hasPagination={true}
          extraHeads={() => {}}
          extraCells={() => {}}
        />
      </div>
    </>
  );
};

export default Clouds;
