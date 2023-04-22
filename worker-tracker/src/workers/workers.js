import { useState, useEffect, useRef } from "react";
import WorkersGrid from "./workers-grid";
import WorkersTable from "./WorkersTable";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import GridOnIcon from "@mui/icons-material/GridOn";
import TableViewIcon from "@mui/icons-material/TableView";
import { getAllWorkers } from "./utils/api";
import FuzzySearch from "fuzzy-search";
import { debounceOptimized } from "./utils/utility";
import { fetchAllWorkers } from "../store/slices/worker-slice";
import { useSelector, useDispatch } from "react-redux";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    fontWeight: "600",
    fontFamily: "Roboto Slab",
    color: "black",
  },
}));

export default function Workers() {
  const [searchResult, setSearchResult] = useState([]);
  const searcher = useRef(null);
  const workers = useSelector((state) => {
    return state.workers.workersData;
  });
  debugger;
  const dispatch = useDispatch();
  useEffect(() => {
    async function handler() {
      dispatch(fetchAllWorkers());
    }
    handler();
  }, []);

  useEffect(() => {
    setSearchResult(workers);
    searcher.current = new FuzzySearch(
      workers,
      [
        "FirstName",
        "LastName",
        "EmployerId",
        "PostalCode",
        "MobileNumber",
        "PhoneNumber",
      ],
      {
        caseSensitive: false,
      }
    );
  }, [workers]);

  const handleSearch = function (event) {
    let searchedData = searcher.current.search(event.target.value);
    setSearchResult(searchedData);
  };
  const [isTableView, setIsTableView] = useState(true);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "gray",
          opacity: "0.70",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={debounceOptimized(handleSearch, 400)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                style={{
                  background: "transparent",
                }}
                onClick={() => {
                  if (!isTableView) setIsTableView(true);
                }}
              >
                <GridOnIcon />
              </Button>
              <Button
                onClick={() => {
                  if (isTableView) setIsTableView(false);
                }}
                style={{
                  background: "transparent",
                }}
              >
                <TableViewIcon />
              </Button>
            </ButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
      {isTableView ? (
        <WorkersTable workersData={searchResult} />
      ) : (
        <WorkersGrid workersData={searchResult} />
      )}
    </Box>
  );
}
