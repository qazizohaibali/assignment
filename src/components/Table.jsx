import React, { useState } from "react";
import { Table } from "react-bootstrap";
import propTypes from "prop-types";
import { ReactComponent as FilterC } from "../assets/mambers/FilterC.svg";
import { ReactComponent as ArrowDown } from "../assets/mambers/arrow-down.svg";
import Avatar1  from "../assets/mambers/avatars/Avatar1.svg";
import Avatar2  from "../assets/mambers/avatars/Avatar2.svg";
import Avatar3  from "../assets/mambers/avatars/Avatar3.svg";
import Avatar4  from "../assets/mambers/avatars/Avatar4.svg";
import Avatar5  from "../assets/mambers/avatars/Avatar5.svg";
import Avatar6  from "../assets/mambers/avatars/Avatar6.svg";
import Avatar7  from "../assets/mambers/avatars/Avatar7.svg";
import Avatar8  from "../assets/mambers/avatars/Avatar8.svg";
import Avatar9  from "../assets/mambers/avatars/Avatar9.svg";
import Checkbox from "./Checkbox";
import "../assets/css/table.css";
import Pagination from "./Pagination/Pagination";

const TableView = ({
  data,
  fields,
  pageChanged,
  hasPagination,
  isChecked,
  extraCells,
  isMemeber,
  extraHeads,
  navigate,
}) => {
  const colspanFields = () => {
    return Object.keys(fields).length + 1;
  };

  // return (
  //   <div className="table-container">
  //     <Table
  //       responsive
  //       className={`tblStyle m-auto table table table-responsive "tblStyleWithWidth`}
  //     >
  //       <thead>
  //         <tr className="thdCls">
  //           <th className="fixed-col">
  //             <Checkbox id={data?._id} />
  //           </th>
  //           {fields?.map((field, fieldIndex) => (
  //             <th key={fieldIndex}>
  //               {field.label === "Full Name" ? (
  //                 <div className="mb-2">
  //                   {field.label}
  //                   <ArrowDown className="filter-icon" />
  //                 </div>
  //               ) : (
  //                 <div className="m-1">
  //                   <span style={{ marginRight: "8px" }}>
  //                     {field.label}
  //                   </span>
  //                   <FilterC className="filter-icon" />
  //                 </div>
  //               )}
  //             </th>
  //           ))}
  //           {extraHeads()}
  //         </tr>
  //       </thead>
  //       <tbody className="p-3">
  //         {hasPagination ? (
  //           <>
  //             {data?.length > 1 &&
  //               data?.map((item, itemIndex) => (
  //                 <tr key={itemIndex} className="tableRow">
  //                   <td className="fixed-col">
  //                     <Checkbox key={itemIndex} />
  //                   </td>
  //                   {fields?.map((field, fieldIndex) => (
  //                     <td className="scrollable-col" key={fieldIndex}>
  //                       {field.format
  //                         ? field.format(data[itemIndex][field.key])
  //                         : data[itemIndex][field.key]}
  //                     </td>
  //                   ))}
  //                   {extraCells(item)}
  //                 </tr>
  //               ))}
  //           </>
  //         ) : (
  //           <>
  //             {data?.map((item, itemIndex) => (
  //               <tr key={itemIndex}>
  //                 {fields?.map((field, fieldIndex) => (
  //                   <td key={fieldIndex}>
  //                     {field.format
  //                       ? field.format(data?.data[itemIndex][field.key])
  //                       : data?.data[itemIndex][field?.key]}
  //                   </td>
  //                 ))}
  //               </tr>
  //             ))}
  //           </>
  //         )}
  //       </tbody>
  //     </Table>
  //     <PaginationComponent />
  //   </div>
  // );

  console.log("data", data);
  console.log("fields", fields);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / 9);

  // Get the current items to render based on the current page
  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const avatars = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
  ];

  return (
    <>
      <div className="w-full overflow-hidden sticky-table mob-table d-block d-lg-none">
        <Table responsive className={`m-auto table table-responsive`}>
          <thead>
            <tr className="thdCls">
              <th className="first-table-firstRow ">
                <div className="d-flex align-items-center gap-3 mx-2">
                  <div>
                    <Checkbox
                      id={data?._id}
                      style={{ fontSize: "16px", marginLeft: "10px" }}
                    />
                  </div>
                  <div>
                    <span>{fields[0]?.label}</span>
                    <ArrowDown className="filter-icon" />
                  </div>
                </div>
              </th>
              {fields?.map(
                (field, fieldIndex) =>
                  field.label !== fields[0].label && (
                    <th key={fieldIndex} className=" flex">
                      <div className="d-flex gap-2 mx-2">
                        {field.label}
                        <FilterC className="filter-icon" />
                      </div>
                    </th>
                  )
              )}
              {extraHeads()}
            </tr>
          </thead>
          <tbody className="p-3">
            {hasPagination && (
              <>
                {currentItems?.length > 0 &&
                  currentItems?.map((item, itemIndex) => {
                    const Avatar = avatars[itemIndex % avatars.length];
                    return (
                      <tr key={itemIndex} className="tableRow">
                        <td className="table-body-cell">
                          <div className="d-flex align-items-center gap-3">
                            <Checkbox
                              id={data?._id}
                              style={{ fontSize: "16px", marginLeft: "10px" }}
                            />
                            <div className="d-flex align-items-center">
                            <img src={Avatar} className="" />
                              <div className="d-flex me-2 flex-column text-start ms-3">
                                <span>
                                  {item.first_name ? item.first_name : ""}
                                </span>
                                <span>{item?.user_id?.email}</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        {fields?.map(
                          (field, fieldIndex) =>
                            field.label !== "Full Name" && (
                              <td key={fieldIndex}>
                                <div className="table-body-cell ">
                                  {field.format
                                    ? field.format(data[itemIndex][field.key])
                                    : data[itemIndex][field.key]}
                                </div>
                              </td>
                            )
                        )}
                        {extraCells(item)}
                      </tr>
                    );
                  })}
              </>
            )}
          </tbody>
        </Table>
      </div>

      <div className="d-none d-lg-block">
        <div className="main-container ">
          <table>
            <thead>
              <tr className="">
                <th className="first-table-firstRow">
                  <div className="table-head-cell d-flex align-items-center gap-3">
                    <div>
                      <Checkbox
                        id={data?._id}
                        style={{ fontSize: "16px", marginLeft: "10px" }}
                      />
                    </div>
                    <div>
                      <span>{fields[0]?.label}</span>
                      <ArrowDown className="filter-icon" />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems?.length > 0 &&
                currentItems.map((item, itemIndex) => {
                  const Avatar = avatars[itemIndex % avatars.length];
                  return (
                    <tr key={itemIndex}>
                      <td className="table-row-border table-body-cell">
                        <div className="d-flex align-items-center gap-3">
                          <Checkbox
                            id={data?._id}
                            style={{ fontSize: "16px", marginLeft: "10px" }}
                          />
                          <div className="d-flex align-items-center">
                            {/* <AvatarComponent /> */}
                            <img src={Avatar} className="" />
                            <div className="d-flex me-2 flex-column text-start ms-3">
                              <span>
                                {item.first_name ? item.first_name : ""}
                              </span>
                              <span>{item?.user_id?.email}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="table-mid-part">
            <table>
              <thead>
                <tr>
                  {fields?.map(
                    (field, fieldIndex) =>
                      field.label !== fields[0].label && (
                        <th
                          key={fieldIndex}
                          className="table-head-cell sec-table-head-cell flex"
                        >
                          <div className="d-flex gap-2">
                            {field.label}
                            <FilterC className="filter-icon" />
                          </div>
                        </th>
                      )
                  )}
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((item, itemIndex) => {
                  return (
                    <tr className="table-row-border">
                      {fields?.map(
                        (field, fieldIndex) =>
                          field.label !== "Full Name" && (
                            <td key={fieldIndex}>
                              <div className="table-body-cell ">
                                {field.format
                                  ? field.format(data[itemIndex][field.key])
                                  : data[itemIndex][field.key]}
                              </div>
                            </td>
                          )
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="second">
            <table>
              <thead>
                <tr className="right-fixed-head">{extraHeads()}</tr>
              </thead>
              <tbody>
                {currentItems?.map((item, itemIndex) => {
                  return (
                    <tr className="table-row-border ">{extraCells(item)}</tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

TableView.propTypes = {
  fields: propTypes.array,
  hasPagination: propTypes.bool,
  extraCells: propTypes.func,
  pageChanged: propTypes.func,
  extraHeads: propTypes.func,
};

TableView.defaultProps = {
  data: {},
  fields: [],
  hasPagination: true,
  extraCells: (item) => {},
  extraHeads: (item) => {},
  pageChanged: (item) => {},
};

export default TableView;

// import React from 'react';
// import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
// import '../assets/table.css'; // Custom CSS for styling

// const TableView = ({ data ,columns}) => {

//   const { getHeaderGroups, getRowModel } = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <div className="table-container">
//       <table className="fixed-columns-table">
//         <thead>
//           {getHeaderGroups().map(headerGroup => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header, index) => (
//                 <th
//                   key={header.id}
//                   style={{
//                     position: index === 0 ? 'sticky' : index >= columns.length - 2 ? 'sticky' : undefined,
//                     left: index === 0 ? 0 : undefined,
//                     right: index >= columns.length - 2 ? 0 : undefined,
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                   }}
//                 >
//                   {header.column.columnDef.header} {/* Use header.column.columnDef.header */}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {getRowModel().rows.map(row => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell, index) => (
//                 <td
//                   key={cell.id}
//                   style={{
//                     position: index === 0 ? 'sticky' : index >= columns.length - 2 ? 'sticky' : undefined,
//                     left: index === 0 ? 0 : undefined,
//                     right: index >= columns.length - 2 ? 0 : undefined,
//                     zIndex: 1,
//                     backgroundColor: 'white',
//                   }}
//                 >
//                   {cell.getValue()} {/* Use cell.getValue() */}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableView;
