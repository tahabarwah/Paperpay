import React, {useState} from "react";
import { FormControl } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { styled } from "@mui/system";

const FormParent = styled(FormControl)({
  marginBottom: 0,
  fieldset: {},
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
    padding: "9px 10px",
    height: "17px",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "18px",
    color: "#000000",
    zIndex: 1
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0px",
    paddingRight: 0,
    "&.Mui-disabled": {
      opacity: 1,
      "& .MuiInputBase-input": {
        color: "#ECECEC",
        zIndex: 1,
        "-webkit-text-fill-color": "#ECECEC",
        borderColor: "#ECECEC",
        backgroundColor: "#ECECEC",
      },
      "& svg": {
        opacity: 1,
        zIndex: 2,
      },
      "& fieldset": {
        borderColor: "var(--gray_200)",
        backgroundColor: "#ECECEC",
        opacity: "1",
        zIndex: 0,
      },
      "&:hover fieldset": {
        opacity: "1",
        borderColor: "var(--gray_200)",
        backgroundColor: "#ECECEC",
      },
      "& img": {
        opacity: "1",
        zIndex: 1,
        cursor: "default",
      },
    },
    "& fieldset": {
      borderRadius: "5px",
      border: "none",
      borderColor: "#ECECEC",
      backgroundColor: "#ECECEC",
      top: "-10px",
      zIndex: 0
    },
    "&:hover fieldset": {
      borderColor: "var(--teal_400)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--teal_400)",
      borderWidth: "1px",
    },
  },
  "&.focus-none .Mui-focused fieldset": {
    borderColor: "var(--gray_200)",
    borderWidth: "1px",
  },
  "&.focus-none .MuiOutlinedInput-root:hover fieldset": {
    borderColor: "var(--gray_200)",
    borderWidth: "1px",
  },
});
const CustomInput = styled(MobileTimePicker)({});
function Timepicker({
  placeholder = "HH:MM",
  className,
  value,
  inline,
  timeFormat = "HH:MM",
  onChange,
  ...restProps
}) {
  const [selectedDate, setSelectedDate] = useState(value);
  const onDateChange = (value) => {
    const newValue = value instanceof Date ? value.toISOString() : value;
    setSelectedDate(newValue);
    onChange?.(newValue);
  };
  return (
    <>
      <FormParent fullWidth className={className}>
        <LocalizationProvider dateAdapter={AdapterDayjs} className="relative">
          <CustomInput
            placeholderText={placeholder}
            inline={inline}
            selected={selectedDate ? new Date(selectedDate) : null}
            onChange={onDateChange}
            {...restProps}
          />
        </LocalizationProvider>
      </FormParent>
    </>
  );
}
export { Timepicker };