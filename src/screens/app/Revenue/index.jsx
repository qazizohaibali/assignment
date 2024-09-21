
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import {
  addCustomer,
  getAllCustomer,
  updateStatus,
} from "../../../services/members";
import TableView from "../../../components/Table";
import { MemberFields,  } from "../../../fields/memebers";

import { StatusOptions } from "../../../fields/tabsFields";
import Filters from "../../../components/Filter";
import { ReactComponent as FilterC } from "../../../assets/mambers/FilterC.svg";
import ConfirmationModal from "../../../components/Popup/ConfirmPopup";
import Toasty from "../../../components/toasty";
import Dropdown from "../../../components/shareComponent/Dropdown";
import { ToggleComponent } from "../../../components/shareComponent/Toggle";
import { CSVLink, CSVDownload } from "react-csv";
import { CsvData } from "../../../components/CsvData";
import { MainHeader } from "../../../components/Header";

const Revenue = () => {
  const [memberData, setMemberData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [statusValue, setStatusValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState(null);
  const [fileModal,setFileModal]=useState(false)
  // const handleOpen= () => setShow(true);

  const getMemberData = async (page = 1) => {
    setIsLoading(true);

    try {
      const { code, data } = await getAllCustomer({
        page,
        limit: 10,
        ...filterValues,
      });
      if (data?.code === 200) {
        setIsLoading(false);
        setMemberData(data?.data);
        setTotalCount(data?.totalCount);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const changeStatus = async (id, value) => {
    setShow(true);
    setUserId(id);
    setStatusValue(value);
  };

  const handleClick = async () => {
    const { code, message } = await updateStatus(userId, {
      status: statusValue,
    });
    if (code === 200) {
      handleClose();
      Toasty("success", message);
    }
  };
  const selectedDataFromCSV = async (fileData) => {
    try {
      if (fileData.length < 1) return;
      setIsLoading(true);
      const data = await addCustomer(fileData);
      if (data?.code === 200) {
        setIsLoading(false);
        // navigate("/dashboard");
      } else {
        setIsLoading(false);
      }
    } catch (error) {}
  };

  const formattedData = memberData?.data?.length
    ? memberData?.data?.map((item) => ({
        _id: item._id,
        first_name: item.first_name,
        last_name: item.last_name,
        phone_number: item.phone_number,
        date_of_birth: item.date_of_birth,
        address: item.address,
        city: item.city,
        country: item.country,
        gender: item.gender,
        nationality: item.nationality,
        // Add any other fields you need
      }))
    : [];

  useEffect(() => {
    getMemberData();
  }, [filterValues?.search, filterValues?.status, filterValues?.is_suspended]);

  console.log(memberData?.totalCount);

  return (
    <div className="container-fluid">
      <div className="">
        <MainHeader total={totalCount} heading={"Revenue"} btnText={""} 
        fileModal={fileModal}
        setFileModal={setFileModal}
        setData={selectedDataFromCSV}
        formattedData={formattedData}
        />
        {/* <CsvData  setData={selectedDataFromCSV} setShow={setFileModal} show={fileModal}/> */}

        <Filters
          entries={10}
          total={totalCount}
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
        <div className="col-md-11" style={{ marginLeft: "7em" }}>
          <TableView
            data={[]}
            fields={[]}
            hasPagination={false}
            isChecked={true}
            extraHeads={() => (
              <>
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
              </>
            )}
            extraCells={(user) => (
              <>
                <td className={"tdCls"}>
                  <Dropdown
                    onChange={(e) => changeStatus(user._id, e.target.value)}
                    options={StatusOptions}
                    value={user.status}
                  />
                </td>
                <td className={"tdCls"}>
                  <ToggleComponent value={user?.is_suspended} />
                </td>
                <ConfirmationModal
                  open={show}
                  onClose={handleClose}
                  value={() => handleClick()}
                />
              </>
            )}
          />
        </div>
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default Revenue;
