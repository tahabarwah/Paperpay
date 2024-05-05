import React from "react";
import { Text, Img } from "./..";

export default function ArtistBuilldProfileOnboarding1Columncamera({
  cameraimage = "images/img_camera.svg",
  buttontext = "Take a photo",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex self-stretch rounded-md bg-blue_gray-100_02 p-[50px] md:p-5">
        <Img src={cameraimage} alt="camera" className="w-[69px] mx-auto" />
      </div>
      <Text size="s" as="p" className="text-center">
        {buttontext}
      </Text>
    </div>
  );
}
