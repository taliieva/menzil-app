import React from "react";
import cardPageData from "../data.json";

const PhotoSection = () => {
  return (
    <div>
      <img
        src={cardPageData.cardPage.photoSection.mainPhoto}
        alt="home"
        className="w-full"
      />
      <div className="flex flex-row mt-[10px] justify-between border-b-[1px] pb-[30px]">
        {cardPageData.cardPage.photoSection.altPhotos.map((photo, index) => (
          <img src={photo} alt="home" className="w-[15%]" key={index} />
        ))}
      </div>
    </div>
  );
};

export default PhotoSection;
