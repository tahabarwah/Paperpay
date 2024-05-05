import { useState } from "react";
import { Img, Text } from "../../components";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
const Datepicker = ({
  placeholder = "DD/MM/YY",
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const toggleDatePickerDropdown = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };
  return (
    <div className="w-full relative">
      <span
        className="bg-[#ECECEC] py-[3px] px-2.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
        onClick={toggleDatePickerDropdown}
      >
        <Text
          as="p"
          size="s"
          className="w-full font-normal	"
        >
          {placeholder}
        </Text>
      </span>
      {isDatePickerOpen && (
        <div className="rounded w-[330px] h-fit absolute z-[10] -right-4 top-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["StaticDatePicker"]}>
              <StaticDatePicker defaultValue={dayjs("2022-04-17")} />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
};
export { Datepicker };