import MemberIcon from "../assets/mambers/mamber.svg";
import plusIcon from "../assets/mambers/plus.svg";
import { CsvData } from "./CsvData";
import ImportCSVModal from "./ImportCSVModal/inde";
import Loading from "./Loading";

export const MainHeader = ({
  total,
  heading,
  btnText,
  setData,
  setFileModal,
  fileModal,
  formattedData,
  onClickBtnTxt,
}) => {
  return (
    <div
      className="col-md-12 main-header"
      style={{
       
      }}
    >
      {/* Left side branding section */}
      <div className={`${btnText ? "col-md-6" : "col-md-8 "} mt-4`}>
        <div className="flexCls">
          <div className="memBerCls">{heading}</div>
          <div className="colorStyle">
            <img src={MemberIcon} style={{}} />
            <div className="memBerClsCopy">{total}</div>
          </div>
        </div>
      </div>

      {/* 
    export and import
    */}
      {/* <div className="flex"> */}

      <CsvData
        setData={setData}
        setShow={setFileModal}
        show={fileModal}
        formattedData={formattedData?.length ? formattedData : []}
        btnText={btnText}
        onClickBtnTxt={onClickBtnTxt}
      />
    </div>

    // </div>
  );
};
