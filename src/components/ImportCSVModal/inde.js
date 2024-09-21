import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Papa from "papaparse";

const ImportCSVModal = ({ show, setModalClose, selectedData }) => {
  //   const [show, setShow] = useState(false);
  const [csvData, setCsvData] = useState([]);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true, // Treat the first row as the header
        skipEmptyLines: true, // Skip empty lines
        complete: (result) => {
          console.log("Parsed CSV:", result.data);
          setCsvData(result.data); // Set parsed data to state
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
        },
      });
    }
  };

  return (
    <div >
      <Modal className="mt-5" show={show} onHide={setModalClose} size="lg" >
        <Modal.Header closeButton>
          <Modal.Title>Import Data from CSV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="importDevStyle">
            <img
              src="/path/to/uploadIcon.svg"
              className="uploadIcon"
              alt="Upload"
            />
            <label className="importStyle">
              Import
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="fileInput"
              />
            </label>
          </div>

          {csvData.length > 0 && (
            <table className="table mt-3">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Date of Birth</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {csvData.map((item, index) => (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.phone_number}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.city}</td>
                    <td>{item.country}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div
            className="importDevStyle copyMem"
            onClick={() => {
              selectedData(csvData);
              setCsvData([]);
              setModalClose();
            }}
          >
            <div className="importStyle colorWhite">Add data</div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImportCSVModal;
