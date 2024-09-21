import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import {  updateStatus } from "../../../services/members";
import TableView from "../../../components/Table";
import {  StatusOptions } from "../../../fields/tabsFields";
import Filters from "../../../components/Filter";
import { ReactComponent as FilterC } from "../../../assets/mambers/FilterC.svg";
import ConfirmationModal from "../../../components/Popup/ConfirmPopup";
import Toasty from "../../../components/toasty";
import Dropdown from "../../../components/shareComponent/Dropdown";
import { ToggleComponent } from "../../../components/shareComponent/Toggle";
import { getAllBookings } from "../../../services/booking";
import { BookingFields } from "../../../fields/bookings";
import { MainHeader } from "../../../components/Header";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [statusValue, setStatusValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [userId, setUserId] = useState(null);
  // const handleOpen= () => setShow(true);

  const fetch = async (page = 1) => {
    setIsLoading(true);

    try {
      const { code, data } = await getAllBookings({
        page,
        limit: 10,
        ...filterValues,
      });

      console.log(data);

      if (data?.code === 200) {
        setIsLoading(false);
        setBookingData(data?.data);
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
  useEffect(() => {
    fetch();
  }, [filterValues?.search, filterValues?.status, filterValues?.is_suspended]);

  return (
    <>
      <div className="">
        <MainHeader btnText="Booking" heading="Booking"/>
        <Filters
          entries={10}
          total={totalCount}
          heading={"Booking"}
          btnText={"Reservation"}
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
            data={bookingData}
            fields={BookingFields}
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
    </>
  );
};

export default Bookings;
