import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import styles from "./radioSelect.module.scss";
import { useGlobalState } from "@/app/utils/globalContext";
import { RadioSelectProps } from "@/app/types/types";

export default function RadioSelect({categories}: RadioSelectProps) {
  const { globalState, setGlobalState } = useGlobalState();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const globalStateCopy = { ...globalState };
    setGlobalState(
      {
        ...globalStateCopy,
        category: event.target.value
      }
    )
  };

  return (
    <div className={styles.radioSelect}>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={globalState.category}
          name="radio-buttons-group"
          onChange={handleCategoryChange}
        >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          {categories.map((category, index) => {
            return (
              <FormControlLabel
                key={index}
                value={category}
                control={<Radio />}
                label={category}
                className={styles.radioSelectLabel}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
