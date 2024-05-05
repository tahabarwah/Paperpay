import { useState } from "react";
import { TextField, FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
const FormParent = styled(FormControl)({
  fieldset: {},
  backgroundColor: "#D2DFEC",
  borderRadius: "3px 0px 0px 3px",
  maxWidth: 272,
  "& .MuiFormLabel-asterisk": {
    color: "var(--red_700)",
  },
  "& .MuiFormLabel-root": {
    color: "#000000",
    "&.Mui-focused": {
      color: "#000000",
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    padding: "6px 12px",
    height: "24px",
    fontSize: "12px",
    lineHeight: "24px",
    color: "#000000",
    "&.MuiSelect-select": {
      height: "24px",
      color: "#F2F6FA",
      fontSize: 16,
      lineHeight: "24px",
      fontWeight: 700,
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    zIndex: "1",
    paddingLeft: 16,
    minHeight: 43,
    "&.absolute": {
      position: "absolute !important",
      zIndex: "2 !important",
      borderRadius: "30px 0px 0px 30px",
      backgroundColor: "#71549D",
      padding: 0,
      "& fieldset": {
        borderRadius: "0 4px 4px 0",
      },
      "& svg path": {
        fill: "#F2F6FA",
      },
    },
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiInputBase-input": {
        color: "#000000",
        zIndex: 1,
      },
      "& fieldset": {
        borderColor: "var(--gray_200)",
        backgroundColor: "var(--gray_50)",
        opacity: "1",
        zIndex: 0,
      },
      "& .MuiSelect-select": {
        color: "#000000",
        zIndex: 1,
      },
      "& .MuiSelect-icon": {
        zIndex: 1,
        color: "#000000",
        opacity: ".5",
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray_200)",
        backgroundColor: "var(--gray_50)",
      },
      "& img": {
        opacity: ".5",
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "4px",
      border: "1px solid var(--gray_200)",
      top: "-10px",
    },
    "&:hover fieldset": {
      borderColor: "#8288AD",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8288AD",
    },
  },
  ".MuiPaper-root": {
    backgroundColor: "#D2DFEC",
  },
});
const CustomMenuItem = styled(MenuItem)({
  fontSize: "12px",
  lineHeight: "14.4px",
  paddingTop: "9px",
  paddingBottom: "9px",
  "&:hover": {
    backgroundColor: "var(--gray_100)",
  },
});
const CustomInput = styled(TextField)({});

const searchOptions = [
  { value: "", label: "Select" },
  { value: "option1", label: "Artists" },
  { value: "option2", label: "Gigs" },
  { value: "option3", label: "Establishments" },
];

const HeaderSearchInput = ({
  label,
  error,
  required,
  placeholder,
  disabled,
  multiline,
  size,
  prefix,
  suffix,
  minRows,
  startAdornment = null,
  endAdornment = null,
  onChange,
  value,
  type,
  inputValue,
}) => {
  const [selectValue, setSelectValue] = useState(
    value || searchOptions[0].value
  );
  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };
  return (
    <>
      <FormParent fullWidth>
        {!!prefix && prefix}
        <CustomInput
          id="outlined-basic"
          required={required}
          disabled={disabled}
          label={label}
          size={size}
          type={type}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          variant="outlined"
          value={inputValue}
          InputProps={{
            ...(startAdornment && { startAdornment }),
            ...(endAdornment && { endAdornment }),
          }}
          onChange={onChange}
          className={`${value ? "value-input" : ""}`}
        />
        <Select
          labelId="outlined-number-select-label"
          id="outlined-number-select"
          value={selectValue}
          onChange={handleChange}
          className="h-100 absolute top-0 right-0"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          MenuProps={{
            classes: {
              paper: "header-select-view",
            },
          }}
        >
          {searchOptions.map((option) => (
            <CustomMenuItem key={option.value} value={option.value}>
              {option.label}
            </CustomMenuItem>
          ))}
        </Select>
        {!!suffix && suffix}
        {error && (
          <span className="text-sm text-red-400 absolute left-0 bottom-[-20px]">
            {error}
          </span>
        )}
      </FormParent>
    </>
  );
};
export { HeaderSearchInput };
