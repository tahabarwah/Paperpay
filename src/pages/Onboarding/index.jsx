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
  CheckBoxInput
} from "../../components";
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import ArtistBuilldProfileOnboarding1Columncamera from "../../components/ArtistBuilldProfileOnboarding1Columncamera";
import Header from "../../components/Header";
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  margin: 0,
  borderRadius: "6px",
  boxShadow: "0px 2px 4px 0px #00000040",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionDetailsBox = styled(AccordionDetails)(() => ({
  padding: "0 20px 24px"
}));

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Onboarding() {
  const [activeSteps, setActiveSteps] = useState([1]);
  const [currentStep, setCurrentStep] = useState(1);
  const [expanded, setExpanded] = useState('');

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
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 1 ? "flex" : "hidden"}`}>
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
            <Button className="mt-[91px] flex h-[50px] min-w-[160px] flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 md:mr-0 sm:px-5" onClick={nextStep}>
              Next
            </Button>
          </div>
        </div>
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 2 ? "flex" : "hidden"}`}>
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
                  <Heading as="h1">All About You</Heading>
                  <div className="mt-[23px] flex w-full flex-col gap-2 md:w-full">
                    <Text as="p" className="!font-medium !text-gray-900">
                      Your Bio
                    </Text>
                    <TextArea
                      name="answer"
                      placeholder={`It’s okay to brag a little! Tell us who you are as an artist, your music journey, and maybe share some of your songs.`}
                      className="h-[149px] rounded-md border border-solid border-blue_gray-100_01 px-[13px] py-[7px] font-palanquin text-base font-light text-gray-600_cc"
                    />
                  </div>
                  <div className="mt-[17px] flex w-full flex-col gap-[17px] md:w-full">
                    <div className="flex flex-col gap-1.5">
                      <Text as="p" className="!font-medium !text-gray-900">
                        Your Location
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                            className="h-[22px] w-[24px]"
                          />
                        }
                        name="location"
                        placeholder={`Select a State`}
                        options={dropDownOptions}
                        className="flex gap-px rounded-md border border-solid border-blue_gray-100_01 px-[13px] py-1.5 font-palanquin text-base font-light text-gray-600_cc"
                      />
                    </div>
                    <SelectBox
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                          className="h-[22px] w-[24px]"
                        />
                      }
                      name="city"
                      placeholder={`Select a City`}
                      options={dropDownOptions}
                      className="flex gap-px rounded-md border border-solid border-blue_gray-100_01 py-1.5 pl-4 pr-[11px] font-palanquin text-base font-light text-gray-600_cc"
                    />
                  </div>
                  <div className="mt-[45px] flex w-full items-center justify-center gap-[23px] px-8">
                    <Text as="p" className="w-full max-w-[122px] text-center">
                      Skip
                    </Text>
                    <Button className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5" onClick={nextStep}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 3 ? "flex" : "hidden"}`}>
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
                        Let’s get visual!{" "}
                      </Heading>
                      <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
                        <div className="flex w-full max-w-[390px] flex-col items-start md:w-full">
                          <Text as="p">Upload more photos of you.</Text>
                          <Text size="s" as="p" className="mt-1">
                            The best photos are of you on stage or with an
                            instrument you play!
                          </Text>
                          <div className="mt-[17px] flex gap-[18px] flex-wrap self-stretch md:flex-row">
                            <div
                              className="flex rounded-md bg-blue_gray-100_02 p-[42px] md:p-5"
                            >
                              <Img
                                src="images/img_primeng_icons_v5_0_0_gray_600.svg"
                                alt="primengicons"
                                className="h-[24px] w-[24px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full max-w-[414px] flex-col gap-1.5 md:w-full">
                          <div className="flex flex-col items-start">
                            <Text as="p">
                              Upload music performance videos of you.
                            </Text>
                            <Text size="s" as="p" className="w-full">
                              Venues love to see how you perform: be it in a
                              studio, in your private space or on stage.
                            </Text>
                          </div>
                          <div className="mt-4 flex flex-col gap-2.5 md:flex-row">
                            <div
                              className="flex flex-1 justify-center rounded-md bg-blue_gray-100_02 px-14 py-[87px] md:p-5"
                            >
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
              <Button className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5" onClick={nextStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 4 ? "flex" : "hidden"}`}>
          <div className="flex w-full max-w-[390px] mx-auto flex-col items-start md:w-full md:p-5 relative z-[1]">
            <div className="flex w-full flex-col items-center gap-11 self-center md:w-full">
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
              <Heading as="h1" className="text-center">
                Link you socials.
              </Heading>
              <div className="flex flex-col self-stretch">
                <Text size="s" as="p">
                  You can connect as many accounts as you want. This will create a
                  stronger profile for you!
                </Text>
                <div className="mt-[31px] flex items-center justify-between gap-4 sm:flex-col">
                  <div className="flex flex-col items-center gap-2">
                    <Button className="flex h-[47px] w-[47px] items-center justify-center rounded-md bg-blue_gray-100_02 px-3">
                      <Img src="images/img_primeng_icons_v5_0_0_gray_600.svg" />
                    </Button>
                    <Text size="s" as="p" className="text-center">
                      Facebook
                    </Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button className="flex h-[47px] w-[47px] items-center justify-center rounded-md bg-blue_gray-100_02 px-3">
                      <Img src="images/img_primeng_icons_v5_0_0_gray_600.svg" />
                    </Button>
                    <Text size="s" as="p" className="text-center">
                      Instagram
                    </Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button className="flex h-[47px] w-[47px] items-center justify-center rounded-md bg-blue_gray-100_02 px-3">
                      <Img src="images/img_primeng_icons_v5_0_0_gray_600.svg" />
                    </Button>
                    <Text size="s" as="p" className="text-center">
                      Spotify
                    </Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button className="flex h-[47px] w-[47px] items-center justify-center rounded-md bg-blue_gray-100_02 px-3">
                      <Img src="images/img_primeng_icons_v5_0_0_gray_600.svg" />
                    </Button>
                    <Text size="s" as="p" className="text-center">
                      SoundCloud
                    </Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Button className="flex h-[47px] w-[47px] items-center justify-center rounded-md bg-blue_gray-100_02 px-3">
                      <Img src="images/img_primeng_icons_v5_0_0_gray_600.svg" />
                    </Button>
                    <Text size="s" as="p" className="text-center">
                      YouTube
                    </Text>
                  </div>
                </div>
                <div className="mt-[217px] flex w-full items-start gap-[25px] md:ml-0 md:w-full">
                  <div className="flex w-full items-center justify-center gap-[25px]">
                    <Text as="p" className="w-full max-w-[122px] text-center">
                      Skip
                    </Text>
                    <Button className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5" onClick={nextStep}>
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 5 ? "flex" : "hidden"}`}>
          <div className="flex w-full max-w-[390px] mx-auto flex-col items-center sm:w-full">
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
              Let your calendar do the work!
            </Heading>
            <div className="mt-[62px] flex flex-col gap-[29px] self-stretch">
              <Text size="s" as="p">
                Setting up your availability can help venues and organizers
                book you faster.
              </Text>
              <Text
                as="p"
                className="w-full !font-medium"
              >
                Ways to set up your calendar. You can do one way or the other.
              </Text>
            </div>
            <div className="mt-7 flex flex-col gap-5">
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<Img src="images/img_arrow_up.svg" />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Text as="p" className="w-full px-1">
                    Block Dates
                  </Text>
                </AccordionSummary>
                <AccordionDetailsBox >
                  <Text as="p" size="s" className="w-full">
                    Select dates you <b className="font-bold">do not want to be booked.</b>
                  </Text>
                  <div className="mt-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          'StaticDatePicker',
                        ]}
                      >
                        <StaticDatePicker calendarHeader="false" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="flex flex-col gap-3.5 mt-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-4 w-full">
                        <Input className="fill w-full max-w-[128px]"
                          size="small"
                          value="October 13, 2023"
                        />
                        <div className="flex items-center justify-center gap-1 w-full">
                          <Timepicker defaultValue={dayjs('2022-04-17T19:00')} />
                          <div className="w-2.5 h-px bg-[#000] block"></div>
                          <Timepicker defaultValue={dayjs('2022-04-17T21:30')} />
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_99.png"
                        alt="plus"
                        className="h-5 w-5"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-4 w-full">
                        <Input className="fill w-full max-w-[128px]"
                          size="small"
                          value="October 14, 2023"
                        />
                        <div className="flex items-center justify-center gap-1 w-full">
                          <Text as="p" size="s" className="w-full underline w-full text-center">
                            Add time
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_99.png"
                        alt="plus"
                        className="h-5 w-5"
                      />
                    </div>
                  </div>
                  <Text as="p" size="s" className="w-full mt-5">
                    <b className="font-bold">Unselected</b> dates will be tagged as <b className="font-bold">available.</b>
                  </Text>
                </AccordionDetailsBox>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<Img src="images/img_arrow_up.svg" />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Text as="p" className="w-full px-1">
                    Open Available Dates
                  </Text>
                </AccordionSummary>
                <AccordionDetailsBox>
                  <Text as="p" size="s" className="w-full">
                    Select dates you <b className="font-bold">do not want to be booked.</b>
                  </Text>
                  <div className="mt-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          'StaticDatePicker',
                        ]}
                      >
                        <StaticDatePicker calendarHeader="false" />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="flex flex-col gap-3.5 mt-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-4 w-full">
                        <Input className="fill w-full max-w-[128px]"
                          size="small"
                          value="October 13, 2023"
                        />
                        <div className="flex items-center justify-center gap-1 w-full">
                          <Timepicker defaultValue={dayjs('2022-04-17T19:00')} />
                          <div className="w-2.5 h-px bg-[#000] block"></div>
                          <Timepicker defaultValue={dayjs('2022-04-17T21:30')} />
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_99.png"
                        alt="plus"
                        className="h-5 w-5"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <div className="flex items-center justify-center gap-4 w-full">
                        <Input className="fill w-full max-w-[128px]"
                          size="small"
                          value="October 14, 2023"
                        />
                        <div className="flex items-center justify-center gap-1 w-full">
                          <Text as="p" size="s" className="w-full underline w-full text-center">
                            Add time
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_ellipse_99.png"
                        alt="plus"
                        className="h-5 w-5"
                      />
                    </div>
                  </div>
                  <Text as="p" size="s" className="w-full mt-5">
                    <b className="font-bold">Unselected</b> dates will be tagged as <b className="font-bold">available.</b>
                  </Text>
                </AccordionDetailsBox>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<Img src="images/img_arrow_up.svg" />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Text as="p" className="w-full px-1">
                    Set Occurrences
                  </Text>
                </AccordionSummary>
                <AccordionDetailsBox>
                  <Text as="p" size="s" className="w-full mb-6">
                    Set availability from <b className="font-bold">Daily, Weekly, Bi- Weekly</b>, or <b className="font-bold">Monthly.</b>
                  </Text>
                  <div className="mt-6 flex flex flex-col gap-4">
                    <RadioInput name="day" label="Daily" />
                    <div className="flex flex-row items-start gap-3.5 ">
                      <RadioInput name="day" className="!mt-1" />
                      <div className="w-full flex flex-row gap-3.5">
                        <Text
                          as="p"
                          className="w-fit text-sm	font-extralight"
                        >
                          Weekly
                        </Text>
                        <div className="w-full flex flex-col gap-5">
                          <div className="flex flex-row gap-3.5 items-start justify-between">
                            <Text
                              as="p"
                              className="w-full text-sm	font-extralight"
                            >
                              from
                            </Text>
                            <Datepicker placeholder="Add Date" />
                          </div>
                          <div className="flex flex-row gap-3.5 items-start justify-between">
                            <Text
                              as="p"
                              className="w-full text-sm	font-extralight"
                            >
                              every
                            </Text>
                            <div className="flex gap-1.5 items-center justify-center">
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  M
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  T
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  W
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  TH
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  F
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  S
                                </Text>
                              </span>
                              <span
                                className="bg-[#ECECEC] p-0.5 text-xs text-black-900 flex flex items-center text-center rounded-[5px]"
                              >
                                <Text
                                  as="p"
                                  size="s"
                                  className="w-fit min-w-[16px] h-4 font-normal	"
                                >
                                  Su
                                </Text>
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3.5 items-start justify-between">
                            <Text
                              as="p"
                              className="w-full text-sm	font-extralight"
                            >
                              until
                            </Text>
                            <Datepicker placeholder="Add Date" />
                          </div>
                          <div className="flex flex-row gap-3.5 items-center justify-end">
                            <Text
                              as="p"
                              className="w-fit text-sm	font-extralight"
                            >
                              Available
                            </Text>
                            <CheckBoxInput name="available" id="checkBox-1" />
                          </div>
                          <div className="flex flex-row gap-3.5 items-center justify-end">
                            <Text
                              as="p"
                              className="w-fit text-sm	font-extralight"
                            >
                              Unavailable
                            </Text>
                            <CheckBoxInput name="unavailable" id="checkBox-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <RadioInput name="day" label="Bi- Weekly" />
                    <RadioInput name="day" label="Monthly" />
                  </div>
                </AccordionDetailsBox>
              </Accordion>
            </div>
            <div className="mt-8 flex w-full items-center justify-center gap-[25px] self-start">
              <Text as="p" className="w-full max-w-[122px] text-center">
                Skip
              </Text>
              <Button className="flex h-[50px] max-w-[160px] w-full flex-row items-center justify-center rounded-md bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5" onClick={nextStep}>
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className={`mx-auto grow shrink items-start w-full ${currentStep === 6 ? "flex" : "hidden"}`}>
          <div className="flex w-full max-w-[390px] mx-auto flex-col items-center sm:w-full">
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
              Create Gigs
            </Heading>
            <div className="mt-[62px] flex flex-col gap-[29px] self-stretch">
              <Text
                as="p"
                size="s"
                className="w-full max-w-[310px] mx-auto text-center !font-extralight"
              >
                Providing gig options can help venues and organizers make easier decisions.
              </Text>
            </div>
            <div className="mt-[70px] flex flex-col w-full items-center justify-center gap-[72px] self-start">
              <Button className="flex h-[50px] w-full flex-row items-center justify-center rounded-full bg-gradient px-[35px] text-center text-base font-medium text-white-A700 sm:px-5">
                Create Gigs
              </Button>
              <Text as="p" className="w-full text-center">
                Skip
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute right-[98px] bottom-[159px] z-[0] h-[21px] w-[21px] rounded-[10px] bg-deep_purple-500" />
        <div className="absolute left-[53px] bottom-[53px] z-[0] h-[47px] w-[47px] self-start rounded-[23px] bg-deep_purple-500_7f" />
      </div>
    </>
  );
}
