import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import {
  addCustomer,
  getAllCustomer,
  updateStatus,
} from "../../../services/members";
import TableView from "../../../components/Table";
import { MemberFields } from "../../../fields/memebers";
import { StatusOptions } from "../../../fields/tabsFields";
import Filters from "../../../components/Filter";
import { ReactComponent as FilterC } from "../../../assets/mambers/FilterC.svg";
import ConfirmationModal from "../../../components/Popup/ConfirmPopup";
import Toasty from "../../../components/toasty";
import Dropdown from "../../../components/shareComponent/Dropdown";
import { ToggleComponent } from "../../../components/shareComponent/Toggle";
import { MainHeader } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Trash } from "../../../assets/mambers/trash-01.svg";

const Members = () => {
  const [memberData, setMemberData] = useState([]);
  const [, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [statusValue, setStatusValue] = useState("");
  const [suspendValue, setSuspendValue] = useState();
  const [newSuspendValue, setNewSuspendValue] = useState(false);

  const [showToggleModal, setShowToggleModal] = useState(false);

  const [totalCount, setTotalCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState(null);
  const [fileModal, setFileModal] = useState(false);
  const navigate = useNavigate();

  const getMemberData = async (page = 1) => {
    setIsLoading(true);

    try {
      const { code, data } = await getAllCustomer({
        page,
        limit: 100,
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
      // window.location.reload();
    }
  };

  const changeStatus = (id, value) => {
    setShow(true);
    setUserId(id);
    setStatusValue(value);
  };
  const changeSuspendStatus = (id, value) => {
    console.log({ value });
    setShowToggleModal(true);
    setSuspendValue(value);
    setUserId(id);
  };

  const handleClick = async () => {
    handleClose();
    const filterValue = { status: statusValue };
    const { code, message } = await updateStatus(userId, filterValue);
    if (code === 200) {
      Toasty("success", message);
      getMemberData();
    } else {
      Toasty("error", message);
    }
  };

  const handleToggle = async () => {
    setShowToggleModal(false);
    const { code, message } = await updateStatus(userId, {
      is_suspended: suspendValue,
    });
    if (code === 200) {
      // setIsLoading(true);
      await getMemberData();
      Toasty("success", message);
    } else {
      Toasty("error", message);
    }
  };

  const selectedDataFromCSV = async (fileData) => {
    console.log("fileData", fileData);
    if (fileData.length < 1) return;
    for (let i = 0; i < fileData.length; i++) {
      const element = fileData[i];
      try {
        setIsLoading(true);
        const data = await addCustomer(element);
        if (data?.code === 200) {
          setIsLoading(false);
          // navigate("/dashboard");
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log("ererr", error);
        // alert(error?.response?.data?.message);
        setIsLoading(false);
      }
    }
  };

  const formattedData = memberData?.length
    ? memberData?.map((item) => ({
        first_name: item.first_name,
        last_name: item.last_name,
        phone_number: item.phone_number,
        date_of_birth: item.date_of_birth,
        address: item.address,
        city: item.city,
        country: item.country,
        gender: item.gender,
        nationality: item.nationality,
        email: item?.email,
        profile_image: "profile_image",
        relationship_status: "relationship_status",
        id_passport_number: "id_passport_number",
        occupation: "password",
        // Add any other fields you need
      }))
    : [];

  useEffect(() => {
    getMemberData();
  }, [filterValues?.status, filterValues?.search, filterValues?.is_suspended]);


  const deleteMember = (id) => {
    const updatedMemberData = memberData.filter((member) => member._id !== id);
    setMemberData(updatedMemberData); // Update the state with the filtered members
    console.log("memberData", memberData);
  };

  return (
    <div className="">
      <div className="">
        <MainHeader
          total={totalCount}
          heading={"Members"}
          btnText={"Member"}
          fileModal={fileModal}
          setFileModal={setFileModal}
          setData={selectedDataFromCSV}
          formattedData={formattedData}
          onClickBtnTxt={() => {
            navigate("/add-user", {
              state: {
                data: {},
              },
            });
          }}
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
        <div
          className="col-md-12 mob-table-styles"
          style={{ margin: "auto", paddingLeft: "90px", paddingRight: "30px" }}
        >
          <TableView
            data={memberData}
            fields={MemberFields}
            hasPagination={true}
            pageChanged={(page) => getMemberData(page)}
            extraHeads={() => (
              <>
                <th className="right-fixed-first-cell mx-2">
                  Status
                  <FilterC
                    className="filter-icon"
                    onClick={() => setShowFilterModal("status")}
                  />
                </th>
                <th className="right-fixed-sec-cell">
                  Active
                  <FilterC
                    className="filter-icon"
                    onClick={() => setShowFilterModal("active")}
                  />
                </th>
                <th className="right-fixed-third-cell"></th>
              </>
            )}
            extraCells={(user) => (
              <>
                <td className="right-fixed-first-cell">
                  <Dropdown
                    onChange={(e) => changeStatus(user?._id, e.target.value)}
                    options={StatusOptions}
                    value={user?.user_id?.status}
                  />
                </td>
                <td className="right-fixed-sec-cell">
                  <ToggleComponent
                    status={user?.user_id?.is_suspended}
                    onChange={(checked) =>
                      changeSuspendStatus(user?._id, checked)
                    }
                  />
                </td>
                <td className="right-fixed-third-cell">
                  <Trash
                    className="delete-icon"
                    type="button"
                    onClick={() => deleteMember(user?._id)}
                  />
                </td>
                <ConfirmationModal
                  open={show}
                  onClose={handleClose}
                  value={() => handleClick()}
                />
                <ConfirmationModal
                  open={showToggleModal}
                  onClose={() => {
                    setShowToggleModal(false);
                    setSuspendValue(!suspendValue);
                  }}
                  value={() => handleToggle()}
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

export default Members;
