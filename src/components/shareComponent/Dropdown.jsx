import React from "react";
import { MenuItem, Select, styled } from "@mui/material"; // For custom styling

/**
 * Reusable Dropdown Component with status indicators
 *
 * @param {Object} props - Component properties
 * @param {string} [props.size="md"] - Size of the dropdown: "lg", "sm", "md" (default)
 * @param {Array} props.options - Array of option objects { value: string, label: string, color: string }
 * @param {function} props.onChange - Function to handle the change event
 * @param {string} props.value - Current selected value
 * @param {string} props.placeholder - Placeholder text for the dropdown
 * @returns JSX.Element
 */
const Dropdown = ({
  options = [],
  onChange,
  value,
  placeholder = "Select an option",
}) => {
  const Dot = styled("span")({
    height: "8px",
    width: "8px",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "8px",
  });

  return (
    <Select
      className="btn"
      value={value}
      onChange={onChange}
      IconComponent={() => null}
      renderValue={(selected) => {
        if (selected === "") {
          return <em>{placeholder}</em>;
        }
        const selectedItem = options.find(
          (option) => option?.value === selected
        );
        return (
          <>
            <Dot
              style={{
                backgroundColor:
                  selectedItem?.color === "grey"
                    ? "#AAAAAA"
                    : selectedItem?.color === "red"
                    ? "#E85353"
                    : "#57DB74",
              }}
            />
            {selectedItem?.label}
          </>
        );
      }}
      sx={{
        border: "1px solid #bfc2bd",
        borderRadius: "0.375rem",
        height: "25px",
        textAlign: "start",
        width: "fit-content",
        ".MuiSelect-select": {
          padding: "0px !important",
          fontSize: "12px",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        color: "#5A5C57",
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            textAlign: "center",
            fontSize: "12px",
            backgroundColor: "white !important",
            width: "130px",
            color: "#777b74",
            "& .MuiMenuItem-root": {
              padding: "10px",
            },
          },
        },
      }}
    >
      <MenuItem disabled value="">
        <em>{placeholder}</em>
      </MenuItem>
      {options.map((option, index) => (
        <MenuItem key={index} value={option?.value}>
          <Dot style={{ backgroundColor: option?.color }} /> {option?.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
