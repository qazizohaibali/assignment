import React, { useEffect, useState } from "react";
import { ReactComponent as FilterC } from "../../../assets/mambers/FilterC.svg";

import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import { BASE_URL } from "../../../config/WebServices";
import axios from "axios";
// import { CSVLink } from "react-csv";
import ImportCSVModal from "../../../components/ImportCSVModal/inde";
import { MainHeader } from "../../../components/Header";
import Filters from "../../../components/Filter";
import TableView from "../../../components/Table";
import Dropdown from "../../../components/shareComponent/Dropdown";
import { StatusOptions } from "../../../fields/tabsFields";
import { ToggleComponent } from "../../../components/shareComponent/Toggle";
import ConfirmationModal from "../../../components/Popup/ConfirmPopup";
import { AdminFields } from "../../../fields/admin";
import { getAllAdmin, updateStatus } from "../../../services/admin";
import Toasty from "../../../components/toasty";

const Admins = () => {
  const [adminData, setAdminData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getUserData = JSON.parse(localStorage.getItem("adminData"));
  const [csvData, setCsvData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [statusValue, setStatusValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState(null);
  const [fileModal, setFileModal] = useState(false);
  const [suspendValue, setSuspendValue] = useState(false);
  const [showToggleModal, setShowToggleModal] = useState(false);

  useEffect(() => {
    getMemberData();
  }, []);

  const getMemberData = async (page = 1) => {
    setIsLoading(true);

    try {
      const res = await getAllAdmin({ page, limit: 10, ...filterValues });

      console.log("res............", res);

      if (res?.status === 200) {
        setIsLoading(false);
        setTotalCount(res.data.totalCount);
        setAdminData(res?.data?.data);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };


  const selectedDataFromCSV = async (data) => {
    if (!data?.length) return;
    setIsLoading(true);

    for (let i = 0; i < data?.length; i++) {
      const element = data[i];
      try {
        const res = await axios.post(BASE_URL + "/admin/add", element, {
          headers: {
            "x-sh-auth": getUserData?.token,
          },
        });

        console.log("res............", res.data);

        if (res?.data?.code === 200) {
          setIsLoading(false);
          navigate("/dashboard");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  // const handleFileUpload = (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     Papa.parse(file, {
  //       header: true, // Treat the first row as the header
  //       skipEmptyLines: true, // Skip empty lines
  //       complete: (result) => {
  //         console.log("Parsed CSV:", result.data);
  //         setCsvData(result.data); // Set parsed data to state
  //       },
  //       error: (error) => {
  //         console.error("Error parsing CSV:", error);
  //       },
  //     });
  //   }
  // };


  const changeStatus = (id, value) => {
    setShow(true);
    setUserId(id);
    setStatusValue(value);
  };
  const changeSuspendStatus = (id, value) => {
    console.log("Supended fucntion");


    console.log({value});
    
    setShowToggleModal(true);
    setSuspendValue(value)
    setUserId(id);
  };

  const handleClick = async () => {
    handleClose();
    const filterValue = { status: statusValue };
    const { code, message } = await updateStatus(userId, filterValue);
    if (code === 200) {
      Toasty("success", message);
      getMemberData();
    }
  };

  const handleToggle = async () => {
    setShowToggleModal(false);
    const { code, message } = await updateStatus(userId, {
      is_suspended: suspendValue,
    });
    if (code === 200) {
      await getMemberData();
      Toasty("success", message);
    }
  };

  useEffect(() => {
    getMemberData();
  }, [filterValues?.search, filterValues?.status, filterValues?.is_suspended]);
  return (
    <div className="container-fluid">
      <div className="">
        <MainHeader
          total={totalCount}
          heading={"Admins"}
          btnText={"Admin"}
          fileModal={fileModal}
          setFileModal={setFileModal}
          setData={selectedDataFromCSV}
          formattedData={adminData}
          onClickBtnTxt={() => {
            navigate("/addAdmin");
          }}
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
            data={adminData}
            fields={AdminFields}
            hasPagination={true}
            extraHeads={() => (
              <>
                <th className="fixed-right-col">
                  Status
                  <FilterC
                    className="filter-icon"
                    onClick={() => setShowFilterModal("status")}
                  />
                </th>
                <th className="fixed-right-col">
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
                <td className={"tdCls fixed-right-col"}>
                  <Dropdown
                    onChange={(e) => changeStatus(user._id, e.target.value)}
                    options={StatusOptions}
                    value={user?.user_id?.status}
                  />
                </td>
                <td className={"tdCls fixed-right-col"}>
                <ToggleComponent
                    status={ user?.user_id?.is_suspended
                    }
                    onChange={
                      (checked) => changeSuspendStatus(user?._id,checked)
                      // Pass the updated boolean value
                    }/>
                                  </td>
                <ConfirmationModal
                  open={show}
                  onClose={()=>setShow(false)}
                  value={() => handleClick()}
                />
                 <ConfirmationModal
                  open={showToggleModal}
                  onClose={()=>setShowToggleModal(false)}
                  value={()=>handleToggle()}
                />
              </>
            )}
            pageChanged={(page)=>adminData(page)}
          />
        </div>
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
    </div>
  );
};

export default Admins;
