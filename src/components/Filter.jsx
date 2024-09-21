// import { Search as SearchIcon } from "@mui/icons-material"; // Material UI search icon or use your own icon
import { debounce } from "lodash";
import SearchIcon from "../assets/mambers/searchIcon.svg";
import { ActiveStatus, StatusOptions } from "../fields/tabsFields";
import {
  IconButton,
  InputAdornment,
  Grid2 as Grid,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { StatusTabs } from "./shareComponent/CustomTab";
import { CsvData } from "./CsvData";
import filterLines from "../assets/mambers/Filterslines.svg";

const Filters = ({
  onFilterChange,
  onSearch,
  entriesValue,
  onStatusChange,
  entries,
  total,
  heading,
  btnText,
}) => {
  const [statusValue, setStatusValue] = useState(0);
  const [isSus, setIsSus] = useState(0);
  const onHandleChange = (e, val) => {
    setStatusValue(val);
    if (val === 0) onStatusChange({ status: null });
    else onStatusChange({ status: val });
  };
  const onActiveChange = (e, val) => {
    setIsSus(val);
    if (val === 0) onFilterChange({ is_suspended: null });
    else onFilterChange({ is_suspended: val });
  };
  const handleSearch = debounce((value) => {
    console.log(value);
    onSearch(value);
  }, 500);

  return (
    <div className="col-md-12 headerFilter">
      {/* Third Row........................ */}
      <Stack
        direction={{ lg: "row", md: "column", xs: "column" }}
        alignItems={{ lg: "space-between", md: "flex-start", xs: "flex-start" }}
        justifyContent={{
          lg: "space-between",
          md: "flex-start",
          xs: "flex-start",
        }}
        margin={0}
        sx={{ margin: 0, width: "100%" }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <StatusTabs
            onHandleChange={onActiveChange}
            tabOptions={ActiveStatus}
            statusValue={isSus}
          />

          <StatusTabs
            statusValue={statusValue}
            onHandleChange={onHandleChange}
            tabOptions={StatusOptions}
          />
          <div className="more-filters">
            <img src={filterLines} alt="Filter Lines" />
            More Filters
          </div>
        </Stack>
        <div>
          <TextField
            className="filter-search-bar"
            sx={{
              borderRadius: "10px",
              padding: "5px 0px",
              maxWidth: "367px",
              margin: 0,
            }}
            placeholder="Search"
            fullWidth
            variant="outlined"
            size="small"
            onChange={(e) => handleSearch({ search: e.target.value })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <img src={SearchIcon} alt="SearchIcon" />
                    {/* <SearchIcon /> */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Stack>
    </div>
  );
};
export default Filters;
