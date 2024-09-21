// import React, { useEffect, useState } from "react";
// import BellIcon from "../../../assets/mambers/bell.svg";

// import AvaterIcon from "../../../assets/mambers/Avatar.svg";

// import uploadIcon from "../../../assets/mambers/upload-cloud.svg";
// import exportIcon from "../../../assets/mambers/exportCld.svg";
// import plusIcon from "../../../assets/mambers/plus.svg";
// import searchIcon from "../../../assets/mambers/search.svg";
// import Itinerary from "../../../assets/mambers/Itinerary.svg";

// import FiltersIcons from "../../../assets/mambers/Filters.svg";

// import MamberIcon from "../../../assets/mambers/mamber.svg";
// import DownIcon from "../../../assets/mambers/dwon.svg";
// import MemberTable from "../../../components/MemberTable";

// import ArrowLeft from "../../../assets/mambers/arrow-left.svg";

// import ArrowRight from "../../../assets/mambers/arrow-right.svg";
// import SuppliersTable from "../../../components/SuppliesTable";
// import ServicesTable from "../../../components/ServicesTable";
// import ItinerariesTable from "../../../components/ItinerariesTable";
// import { useNavigate } from "react-router-dom";
// // import { CSVLink } from "react-csv";
// import { ItinerariesData } from "../../../DummyData";
// import ImportCSVModal from "../../../components/ImportCSVModal/inde";
// import axios from "axios";
// import { BASE_URL } from "../../../config/WebServices";
// import Loading from "../../../components/Loading";

// const Itineraries = () => {
//   const [curentIndex, setIndexC] = useState(1);
//   const [itinerary, setItinerary] = useState(0);
//   const [curentIndex2, setIndexC2] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const getUserData = JSON.parse(localStorage.getItem("adminData"));
//   const [isModal, setModal] = useState(false);

//   useEffect(() => {
//     getMemberData();
//   }, []);

//   const getMemberData = async () => {
//     setIsLoading(true);

//     try {
//       const res = await axios.get(BASE_URL + "/itinerary", {
//         headers: {
//           "x-sh-auth": getUserData?.token,
//         },
//       });

//       console.log("res............", res);

//       if (res?.status === 200) {
//         setIsLoading(false);

//         setItinerary(res.data);
//       } else {
//         setIsLoading(false);
//       }
//     } catch (error) {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* First Row */}
//       <div className="row flex-grow-1">
//         {/* Left side branding section */}
//         <div className="col-md-8"></div>

//         <div className="col-md-4 mt-4">
//           <div className="dFlex">
//             <div className="circle">EN</div>

//             <img src={BellIcon} className="marL" />

//             <div className="dropDownC">
//               <img src={AvaterIcon} />
//               <div>
//                 <div className="nameStyle">
//                   {getUserData?.user?.email?.split("@")[0]}
//                 </div>
//                 <div className="adminNameStyle">Admin</div>
//               </div>
//               <img src={DownIcon} style={{ width: 15, marginLeft: 20 }} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Second Row............................... */}

//       <div
//         className="row flex-grow-1 "
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* Left side branding section */}
//         <div className="col-md-8">
//           <div className="flexCls">
//             <div className="memBerCls">Itineraries</div>
//             <div className="colorStyle">
//               <img src={Itinerary} style={{}} />
//               <div className="memBerClsCopy">34</div>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mt-4">
//           <div className="dFlex">
//             <div
//               className="importDevStyle"
//               style={{ marginLeft: 113, marginRight: 10 }}
//               onClick={() => setModal(!isModal)}
//             >
//               <img src={uploadIcon} className="" />
//               <div className="importStyle">Import</div>
//             </div>

//             {/* <CSVLink
//               data={ItinerariesData}
//               className="csvLink"
//               filename={"Itineraries-List.csv"}
//             >
//               <div
//                 className="importDevStyle"
//                 style={{ marginLeft: 10, marginRight: 10 }}
//                 onClick={() => {}}
//               >
//                 <img src={exportIcon} className="" />
//                 <div className="importStyle">Export</div>
//               </div>
//             </CSVLink> */}
//           </div>
//         </div>
//       </div>

//       {/* Third Row........................ */}

//       <div
//         className="row flex-grow-1 "
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {/* Left side branding section */}
//         <div className="col-md-8">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <div className="flexClsCopy">
//               {["All", "Upcoming", "Past"].map((item, index) => (
//                 <div
//                   className={curentIndex === index ? "activeCls" : "itemCls"}
//                   onClick={() => setIndexC(index)}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>

//             <div
//               className="importDevStyle"
//               style={{ marginLeft: 10, marginRight: 10 }}
//             >
//               <img src={FiltersIcons} className="" />
//               <div className="importStyle">More filters</div>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-4 mt-4">
//           <div className="form-group form-groupCopy mb-4">
//             <img
//               src={searchIcon}
//               className="form-control-icon"
//               style={{ marginLeft: "5em" }}
//             />
//             <input
//               type="password"
//               className="form-controlCopy"
//               placeholder="Search"
//               required
//               style={{ width: "21.5em" }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="row flex-grow-1 " style={{}}>
//         {/* Left side branding section */}

//         <div className="col-md-11" style={{ marginLeft: "7em" }}>
//           <ItinerariesTable />
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               marginBottom: "3em",
//             }}
//           >
//             <div className="importDevStyle" style={{}}>
//               <img src={ArrowLeft} className="" />
//               <div className="importStyle">Previous</div>
//             </div>
//             <div>
//               <div className="flexClsCopy2">
//                 {[1, 2, 3, "...", 8, 9, 10].map((item, index) => (
//                   <div
//                     className={curentIndex2 === index ? "activeCls" : "itemCls"}
//                     onClick={() => setIndexC2(index)}
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="importDevStyle" style={{}}>
//               <div className="importStyle">Next </div>
//               <img src={ArrowRight} className="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {isLoading ? <Loading type={"bars"} /> : null}
//       <ImportCSVModal show={isModal} setModalClose={setModal} />
//     </>
//   );
// };

// export default Itineraries;

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

const Itineraries = () => {
  const [memberData, setMemberData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [statusValue, setStatusValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState(null);
  const [fileModal, setFileModal] = useState(false);
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
        <MainHeader
          total={totalCount}
          heading={"Itineraries"}
          fileModal={fileModal}
          setFileModal={setFileModal}
          setData={selectedDataFromCSV}
          formattedData={formattedData}
        />
        {/* <CsvData  setData={selectedDataFromCSV} setShow={setFileModal} show={fileModal}/> */}

        <Filters
          entries={10}
          total={totalCount}
          heading={"Members"}
          btnText={"Member"}
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

export default Itineraries;
