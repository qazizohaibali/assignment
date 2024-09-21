import React, { useEffect, useState } from "react";
import BellIcon from "../../../assets/mambers/bell.svg";

import AvaterIcon from "../../../assets/mambers/Avatar.svg";

import uploadIcon from "../../../assets/mambers/upload-cloud.svg";
import exportIcon from "../../../assets/mambers/exportCld.svg";
import plusIcon from "../../../assets/mambers/plus.svg";
import searchIcon from "../../../assets/mambers/search.svg";
import Portraits from "../../../assets/mambers/Portraits.svg";

import FiltersIcons from "../../../assets/mambers/Filters.svg";

import MamberIcon from "../../../assets/mambers/mamber.svg";
import DownIcon from "../../../assets/mambers/dwon.svg";
import MemberTable from "../../../components/MemberTable";

import ArrowLeft from "../../../assets/mambers/arrow-left.svg";

import ArrowRight from "../../../assets/mambers/arrow-right.svg";
import SuppliersTable from "../../../components/SuppliesTable";
import ServicesTable from "../../../components/ServicesTable";
import { useNavigate } from "react-router-dom";
import { ServicesData } from "../../../DummyData";
import { CSVLink } from "react-csv";
import ImportCSVModal from "../../../components/ImportCSVModal/inde";
import { MainHeader } from "../../../components/Header";
import Filters from "../../../components/Filter";
import { StatusOptions } from "../../../fields/tabsFields";
import TableView from "../../../components/Table";
import { ServiceFields } from "../../../fields/service";

const Services = () => {
  const [curentIndex, setIndexC] = useState(1);
  const [curentIndex1, setIndexC1] = useState(0);
  const [curentIndex2, setIndexC2] = useState(0);
  const [isModal, setModal] = useState(false);
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState([]);
  const getUserData = JSON.parse(localStorage.getItem("adminData"));

  useEffect(() => {}, [filterValues]);
  return (
    <>
      <MainHeader
        total={4}
        heading={"Services"}
        btnText={"Service"}
        // fileModal={fileModal}
        // setFileModal={setFileModal}
        // setData={selectedDataFromCSV}
        // formattedData={formattedData}
      />

      <Filters
        entries={10}
        onSearch={(searchString) =>
          setFilterValues({ ...filterValues, ...searchString })
        }
        onStatusChange={(status) =>
          setFilterValues({ ...filterValues, ...status })
        }
        onFilterChange={(isSuspended) =>
          setFilterValues({ ...filterValues, ...isSuspended })
        }
      />

      <div className="row flex-grow-1 " style={{}}>
        {/* Left side branding section */}

        <div className="col-md-11" style={{ marginLeft: "7em" }}>
          <TableView data={[]} fields={ServiceFields} hasPagination={true} 
           extraHeads={() => (
            <>
              <th className="fixed-right-col">
                Active
                {/* <FilterC
                  className="filter-icon"
                  onClick={() => setShowFilterModal("status")}
                /> */}
              </th>
              <th className="fixed-right-col">
                {/* <FilterC
                  className="filter-icon"
                  onClick={() => setShowFilterModal("active")}
                /> */}
              </th>
            </>
          )}/>
        </div>
      </div>
      <ImportCSVModal show={isModal} setModalClose={setModal} />
    </>
  );
};

export default Services;
