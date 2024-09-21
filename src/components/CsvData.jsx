import uploadIcon from "../assets/mambers/upload-cloud.svg";
import exportIcon from "../assets/mambers/exportCld.svg";
import plusIcon from "../assets/mambers/plus.svg";
import ImportCSVModal from "./ImportCSVModal/inde";
import Loading from "./Loading";
import { CSVLink } from "react-csv";

export const CsvData = ({
  setData,
  show,
  isLoading,
  setShow,
  formattedData,
  btnText,
  onClickBtnTxt
}) => {
  console.log("formattedData//////", formattedData);
  return (
    <div className="col-md-6 mt-4 p-0 ">
      <div className="csv-data-wrapper">
        <div className="importDevStyle">
          <img src={uploadIcon} className="" />
          <div className="importStyle" onClick={() => setShow(true)}>
            Import
          </div>
        </div>
        <CSVLink
          data={formattedData}
          className="csvLink"
          filename={btnText + "-List.csv"}
        >
          <div
            className="importDevStyle"
            style={{ marginLeft: 10, marginRight: 10 }}
            onClick={() => {}}
          >
            <img src={exportIcon} className="" />
            <div className="importStyle" onClick={() => {}}>
              Export
            </div>
          </div>
        </CSVLink>
        {btnText ? (
        <div className="" onClick={onClickBtnTxt}>
          <button className="importDevStyle copyMem">
            <img src={plusIcon} className="" />
            <div className="importStyle colorWhite">{btnText}</div>
          </button>
        </div>
      ) : (
        ""
      )}
      </div>
      {isLoading ? <Loading type={"bars"} /> : null}
      <ImportCSVModal
        show={show}
        setModalClose={setShow}
        selectedData={setData}
      />
    </div>
  );
};
