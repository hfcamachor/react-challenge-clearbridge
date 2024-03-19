import styles from "./searchBar.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useGlobalState } from "@/app/utils/globalContext";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

export default function SearchBar() {
  const { globalState, setGlobalState } = useGlobalState();
  const [inputValue, setInputValue] = useState("");

  const setSearchTerm = () => {
    const globalStateCopy = {
      ...globalState,
    };

    setGlobalState({
      ...globalStateCopy,
      searchTerm: inputValue,
    });
  };

  const clearSearch = () => {
    setInputValue("");
    const globalStateCopy = {
      ...globalState,
    };
    setGlobalState({
      ...globalStateCopy,
      page: 1,
      searchTerm: "",
      category: "All"
    });
  };

  return (
    <div className={styles.searchBar}>
      <TextField
        id="outlined-basic"
        label="Search by title"
        variant="outlined"
        fullWidth
        value={inputValue || globalState.searchTerm}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton onClick={clearSearch} edge="end">
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button
        className={styles.searchBarButton}
        onClick={setSearchTerm}
        disabled={!inputValue}
        variant="contained"
      >
        Search
      </Button>
    </div>
  );
}
