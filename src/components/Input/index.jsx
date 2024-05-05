import { TextField, FormControl } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
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
const CustomInput = styled(TextField)({});
const Input = ({
  name,
  label,
  required,
  placeholder,
  disabled,
  multiline,
  size,
  prefix,
  suffix,
  minRows,
  maxRows,
  startAdornment = null,
  endAdornment = null,
  onChange,
  value,
  type,
  className,
  maxLength,
  minLength,
}) => {
  return (
    <>
      <FormParent fullWidth className={className}>
        {!!prefix && prefix}
        <CustomInput
          id="outlined-basic"
          name={name}
          required={required}
          disabled={disabled}
          label={label}
          type={type}
          size={size}
          placeholder={placeholder}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          variant="outlined"
          value={value}
          InputProps={{
            ...(startAdornment && { startAdornment }),
            ...(endAdornment && { endAdornment }),
          }}
          onChange={onChange}
          className={`${value ? "value-input" : ""}`}
          inputProps={{ maxLength: maxLength, minLength: minLength }}
        />
        {!!suffix && suffix}
      </FormParent>
    </>
  );
};
export { Input };