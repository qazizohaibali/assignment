import { Switch } from "@mui/material";
import { useState } from "react";

// export const ToggleComponent = ({ handleToggleActive, status, defaultValue }) => {
//   console.log(status);

//   return (
//     <Switch
//       // onChange={handleToggleActive}
//       onClick={handleToggleActive}
//       checked={status}
//       offColor="#E6D5B1 !important"
//       onColor="#C1963B"
//       // defaultValue={value}
//       // value={status}
//       defaultChecked={defaultValue}

//       height={15}
//       width={35}
//       handleDiameter={12}
//       sx={{
//         color: "#E6D5B1",
//       }}
//     />
//   );
// };
export const ToggleComponent = ({ onChange, status, defaultValue, value }) => {
  const [data, setData] = useState(status);

  console.log({ data });

  return (
    <Switch
      onChange={(e) => {
        onChange(e?.target?.checked);
      }}
      checked={status}
      sx={{
        padding: "0 !important",
        // margin: '0 !important', 
        width: 40, // Adjust width as per your design
        height: 20, // Adjust height as per your design
        // padding: 1,
        "& .MuiSwitch-switchBase": {
          padding: 0,
          margin: '2.5px 0px',
          transform: "translateX(6px)",
          "&.Mui-checked": {
            transform: "translateX(22px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              background:
                "linear-gradient(350.87deg, #C1963B -21.67%, #745A23 130.38%)",
              opacity: 1,
              border: 0,
            },
            "& .MuiSwitch-thumb": {
              color: "#fff",
            },
          },
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: "#fff",
          width: 15,
          height: 15,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          margin: "0 !important",
          padding: "0 !important",
        },
        "& .MuiSwitch-track": {
          borderRadius: 20 / 2,
          backgroundColor: "#E6D5B1", // Untoggled background color
          opacity: 1,
          transition: "background-color 0.3s",
        },
      }}
    />
  );
};
