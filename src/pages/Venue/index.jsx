import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Text,
  SelectBox,
  Img,
  TextArea,
  Heading,
  Input,
  Timepicker,
  RadioInput,
  Datepicker,
  CheckBox,
  CheckBoxInput,
} from "../../components";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import ArtistBuilldProfileOnboarding1Columncamera from "../../components/ArtistBuilldProfileOnboarding1Columncamera";
import Header from "../../components/Header";
import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  margin: 0,
  borderRadius: "6px",
  boxShadow: "0px 2px 4px 0px #00000040",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionDetailsBox = styled(AccordionDetails)(() => ({
  padding: "0 20px 24px",
}));

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Venue() {
  const [activeSteps, setActiveSteps] = useState([1]);
  const [currentStep, setCurrentStep] = useState(1);
  const [expanded, setExpanded] = useState("");

  const nextStep = () => {
    const nextStep = activeSteps[activeSteps.length - 1] + 1;
    setCurrentStep((currentStep) => currentStep + 1);
    setActiveSteps([...activeSteps, nextStep]);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Helmet>
        <title>paperPlay</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-start bg-gray-100 p-[53px] md:p-5 min-h-screen gap-16 relative">
        <div className="flex w-full max-w-[1280px] mx-auto flex-col justify-end md:w-full">
          <Header className="mx-auto mt-[33px] w-full max-w-7xl md:p-5" />
        </div>
        <div
          className={`mx-auto grow shrink items-start w-full ${
            currentStep === 1 ? "flex" : "hidden"
          }`}
        >
          <div className="flex w-full max-w-[390px] mx-auto flex-col items-center md:ml-0 md:w-full relative z-[1]">
            <div className="flex w-full flex-col items-start gap-4">
              <Heading as="h1">First things first!</Heading>
              <Text as="p" className="w-full">
                Let’s get your real photo up. This is going to be your displayed
                profile picture, so make it great!
              </Text>
            </div>
            <div className="mt-[57px] flex w-full gap-[18px] md:flex-col">
              <ArtistBuilldProfileOnboarding1Columncamera
                cameraimage="images/img_camera.svg"
                buttontext="Take a photo"
                className="flex w-full flex-col items-center gap-[19px]"
              />
              <ArtistBuilldProfileOnboarding1Columncamera
                cameraimage="images/img_camera.svg"
                buttontext="Upload from Files"
                className="flex w-full flex-col items-center gap-[19px]"
              />
            </div>
            <Button
              className="mt-[91px] flex h-[50px] min-w-[160px] flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 md:mr-0 sm:px-5"
              onClick={nextStep}
            >
              Next
            </Button>
          </div>
        </div>
        <div
          className={`mx-auto grow shrink items-start w-full ${
            currentStep === 2 ? "flex" : "hidden"
          }`}
        >
          <div className="flex w-full flex-col items-start gap-[83px] md:ml-0 md:w-full md:gap-[62px] sm:gap-[41px] relative z-[1]">
            <div className="flex w-full flex-col gap-11 self-end md:w-full">
              <div className="flex flex-col items-end w-fit h-fit relative mx-auto">
                <Button className="absolute z-[1] flex h-[26px] w-[26px] items-center justify-center rounded-[13px] border border-solid border-deep_purple-500 bg-gray-100 px-0.5">
                  <Img src="images/img_primeng_icons_v5_0_0_purple_900.svg" />
                </Button>
                <Img
                  src="images/img_ellipse_99.png"
                  alt="circleimage"
                  className="relative h-[100px] w-[100px] rounded-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <div className="max-w-[369px] w-full mx-auto  relative z-[1]">
                  <Heading as="h1">All About Your Venue</Heading>
                  <div className=" flex w-full flex-col gap-2 md:w-full">
                    <Text as="p" className="!font-medium !text-gray-900">
                      Introduction
                    </Text>
                    <TextArea
                      name="answer"
                      placeholder={`Tell us what your venue is known for. `}
                      className="h-[149px] rounded-md border border-solid border-blue_gray-100_01 px-[13px] py-[7px] font-palanquin text-base font-light text-gray-600_cc"
                    />
                  </div>
                  <div className="mt-[45px] flex w-full items-center justify-center gap-[23px] px-8">
                    <Button
                      className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5"
                      onClick={nextStep}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mx-auto grow shrink items-start w-full ${
            currentStep === 3 ? "flex" : "hidden"
          }`}
        >
          <div className="flex w-full max-w-[1040px] mx-auto flex-col items-start gap-9 md:w-full md:p-5 relative z-[1]">
            <div className="flex w-full self-end md:w-full">
              <div className="flex w-full flex-col gap-11">
                <div className="flex flex-col items-end w-fit h-fit relative mx-auto">
                  <Button className="absolute z-[1] flex h-[26px] w-[26px] items-center justify-center rounded-[13px] border border-solid border-deep_purple-500 bg-gray-100 px-0.5">
                    <Img src="images/img_primeng_icons_v5_0_0_purple_900.svg" />
                  </Button>
                  <Img
                    src="images/img_ellipse_99.png"
                    alt="circleimage"
                    className="relative h-[100px] w-[100px] rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="flex w-full justify-center md:w-full">
                    <div className="flex w-full flex-col items-center gap-5">
                      <Heading as="h1" className="text-center">
                        Route 66
                      </Heading>
                      <div className="flex items-start justify-center gap-5 self-stretch md:flex-col">
                        <div className="flex w-full max-w-[390px] flex-col items-start md:w-full">
                          <Text as="p">Upload more photos of your venue.</Text>
                          <Text size="s" as="p" className="mt-1">
                            Give Artists a glimpse of your venue feel and
                            ambiance.
                          </Text>
                          <div className="mt-[17px] flex gap-[18px] flex-wrap self-stretch md:flex-row">
                            <div className="flex rounded-md bg-blue_gray-100_02 p-[42px] md:p-5">
                              <Img
                                src="images/img_primeng_icons_v5_0_0_gray_600.svg"
                                alt="primengicons"
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-[25px]">
              <Text as="p" className="w-full max-w-[122px] text-center">
                Skip
              </Text>
              <Button
                className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5"
                onClick={nextStep}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`mx-auto grow shrink items-start w-full ${
            currentStep === 4 ? "flex" : "hidden"
          }`}
        >
          <div className="flex w-full mx-auto flex-col items-center sm:w-full">
            <div className="flex flex-col items-end w-fit h-fit relative mx-auto">
              <Button className="absolute z-[1] flex h-[26px] w-[26px] items-center justify-center rounded-[13px] border border-solid border-deep_purple-500 bg-gray-100 px-0.5">
                <Img src="images/img_primeng_icons_v5_0_0_purple_900.svg" />
              </Button>
              <Img
                src="images/img_ellipse_99.png"
                alt="circleimage"
                className="relative h-[100px] w-[100px] rounded-full"
              />
            </div>
            <Heading as="h1" className="mt-11 text-center">
              Route 66
            </Heading>
            <div className="mt-[70px] flex sm:flex-col w-full justify-center gap-[66px] self-start">
              <Button className="flex h-full min-h-[110px] w-full max-w-[380px] flex-col items-center justify-center rounded-[10px] bg-deep_purple-500 px-4 py-2.5 text-center gap-2.5 text-white-A700 sm:px-5">
                <div className="w-full text-[32px] font-semibold leading-10	">
                  Post a gig
                </div>
                <div className="text-[17px] leading-5	font-light">
                  Create gig info and let artists pitch to your event.
                </div>
              </Button>
              <Button className="flex h-full min-h-[110px] w-full max-w-[380px] flex-col items-center justify-center rounded-[10px] bg-[#2A2251] px-4 py-2.5 text-center gap-2.5 text-white-A700 sm:px-5">
                <div className="w-full text-[32px] font-semibold leading-10	">
                  Browse Talents
                </div>
                <div className="text-[17px] leading-5	font-light">
                  Explore diverse selection of artists.
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-[98px] bottom-[159px] z-[0] h-[21px] w-[21px] rounded-[10px] bg-deep_purple-500" />
        <div className="absolute left-[53px] bottom-[53px] z-[0] h-[47px] w-[47px] self-start rounded-[23px] bg-deep_purple-500_7f" />
      </div>
    </>
  );
}
