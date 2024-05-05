import { FormControl, Radio } from "@mui/material";
import { styled } from "@mui/system";
import { Text } from "components";
const FormParent = styled(FormControl)({
  marginBottom: 0,
  fieldset: {},
  flexDirection: "row",
  gap: "0.875rem",
});
const CustomInput = styled(Radio)({
  width: "auto",
  padding: 0,
  "& .MuiSvgIcon-root": {
    fontSize: "0.875rem",
    "&[data-testid='RadioButtonUncheckedIcon']": {
      background: "#DFDFDF",
      fill: "#DFDFDF",
      borderRadius: "16px"
    },
    "&[data-testid='RadioButtonCheckedIcon']": {
      fill: "#9E5EEA",
    }
  }
});
const RadioInput = ({
  name,
  label,
  required,
  placeholder,
  disabled,
  size,
  prefix,
  suffix,
  onChange,
  value,
  className,
}) => {
  return (
    <>
      <FormParent fullWidth className={`!w-fit ${className}`}>
        {!!prefix && prefix}
        <CustomInput
          id="outlined-basic"
          name={name}
          required={required}
          disabled={disabled}
          label={label}
          size={size}
          placeholder={placeholder}
          variant="outlined"
          value={value}
          onChange={onChange}
          className={`${value ? "value-input" : ""}`}
        />
        {label ? (
          <Text
            as="p"
            className="w-full text-sm	font-extralight"
          >
            {label}
          </Text>
        ) : null}

        {!!suffix && suffix}
      </FormParent>
    </>
  );
};
export { RadioInput };