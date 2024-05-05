import React, { useState } from "react";
import { Img, HeaderSearchInput, Text } from "./..";
import { Menu, MenuItem, Switch } from "@mui/material";
import { styled } from "@mui/system";

const StyledMenu = styled(Menu)({
  ".MuiPaper-root": {
    backgroundColor: "transparent",
    boxShadow: "none",
    "& .MuiList-root": {
      padding: 0,
      "& .MuiButtonBase-root": {
        padding: 0,
        backgroundColor: "transparent",
      }
    }
  }
})

const ProfileMenu = styled(Menu)({
  ".MuiPaper-root": {
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "6px 0 0",
    minWidth: "280px",
    marginTop: "-4px",
    "& .MuiList-root": {
      backgroundColor: "#F2F6FA",
      boxShadow: "none",
      border: "1px solid #9747FF",
      padding: "59px 0 27px",
      borderRadius: "6px",
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        backgroundColor: '#F2F6FA',
        borderTop: "1px solid #9747FF",
        borderLeft: "1px solid #9747FF",
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 9999,
      },
      "& .MuiButtonBase-root": {
        padding: "8px 14px",
        backgroundColor: "transparent",
      }
    }
  }
})

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = useState("");

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const openProfile = Boolean(anchorElProfile);

  const [anchorElDropdown, setAnchorElDropdown] = useState(null);
  const openDropdown = Boolean(anchorElDropdown);

  const handleClickDropdown = (event) => {
    setAnchorElDropdown(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorElDropdown(null);
  };

  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  return (
    <header {...props} className="container-xs">
      <div className="flex w-full items-center justify-between gap-5 md:flex-col">
        <div className="flex w-[28%] items-start justify-between gap-5 self-end md:w-full">
          <div className="flex w-[50%] items-start justify-between gap-5" aria-controls={openDropdown ? "profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDropdown ? "true" : undefined}
            onClick={handleClickDropdown}>
            <Text
              size="3xl"
              as="p"
              className="mb-1.5 mt-[5px] !text-gray-900 underline"
            >
              Find Gigs
            </Text>
            <Img
              src="images/img_favorite.svg"
              alt="favorite"
              className={`mt-[9px] h-[9px] rounded-[1px] ${openDropdown ? "rotate-180" : null}`}
            />
          </div>
          <StyledMenu
            id="profile-menu"
            className=""
            anchorEl={anchorElDropdown}
            open={openDropdown}
            onClose={handleCloseDropdown}
            MenuListProps={{
              "aria-labelledby": "profile-button",
            }}
          >
            <MenuItem onClick={handleCloseDropdown}>
              <Text
                size="3xl"
                as="p"
                className="!text-gray-900 underline"
              >
                Find Talents
              </Text>
            </MenuItem>
            <MenuItem onClick={handleCloseDropdown}>
              <Text
                size="3xl"
                as="p"
                className="!text-gray-900 underline"
              >
                Find Establishment
              </Text>
            </MenuItem>
          </StyledMenu>
          <Text size="3xl" as="p" className="mt-1 !text-gray-900 underline">
            My Bookings
          </Text>
        </div>
        <div className="flex w-[56%] items-start justify-between gap-5 md:w-full md:flex-col">
          <Img
            src="images/img_header_logo.png"
            alt="headerlogo"
            className="h-[37px] w-[155px] object-cover"
          />
          <div className="flex w-full items-center justify-end md:w-full sm:flex-col">
            <HeaderSearchInput
              name="search"
              startAdornment={
                <Img
                  src="images/img_rewind.svg"
                  alt="rewind"
                  className="h-[17px] w-[17px] cursor-pointer"
                />
              }
            />
            <a href="#">
              <Img
                src="images/img_primeng_icons_v5_0_0.svg"
                alt="primengicons"
                className="ml-6 h-[40px] w-[40px] sm:ml-0 sm:w-full"
              />
            </a>
            <a href="#">
              <Img
                src="images/img_primeng_icons_v5_0_0_black_900.svg"
                alt="primengicons"
                className="ml-[25px] h-[40px] w-[40px] sm:ml-0 sm:w-full"
              />
            </a>
            <div className="ml-[38px] h-[48px] w-[48px] rounded-full bg-blue_gray-100_02 sm:ml-0"
              aria-controls={openProfile ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? "true" : undefined}
              onClick={handleClickProfile} />
            <ProfileMenu
              id="profile-menu"
              className=""
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                "aria-labelledby": "profile-button",
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  My Profile
                </Text>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  Digital Wallet
                </Text>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  Settings
                </Text>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  Account
                </Text>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  Privacy
                </Text>
              </MenuItem>
              <MenuItem onClick={handleCloseProfile}>
                <Text
                  as="p"
                  className="!text-gray-900 text-[15px] font-medium	"
                >
                  Log Out
                </Text>
              </MenuItem>
            </ProfileMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
