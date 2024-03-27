import React from "react";
import PhotoSection from "../../../components/PhotoSection.tsx";
import cardPageData from "../../../data.json";
const InfoCardPage = () => {
  return (
    <div className="w-[60%] ">
      <PhotoSection />

      <div className="grid 500px:grid-cols-2 lg:w-[80%] sm:w-[90%] lg:text-[16px] text-[12px] font-semibold py-[30px] gap-[30px]">
        {cardPageData.cardPage.infoDetails.map((details, index) => (
          <div className="flex flex-row justify-between w-full justify-between">
            <p className="text-textGrayColor w-[200px]">{details.label}</p>
            <p className="text-boldGray w-[110px]">{details.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full py-[30px] border-b-[1px] gap-[10px] border-t-[1px]">
        <p className="text-boldGray lg:text-[16px] text-[12px] lg:w-[90%] w-[100%]">
          {cardPageData.cardPage.infoText}
        </p>
        <p className="text-customGreen lg:text-[14px] text-[12px] font-semibold">
          Hamısını göstər
        </p>
      </div>

      <div className="flex flex-col w-full py-[30px] lg:gap-[30px] border-b-[1px]">
        <div className="flex flex-row justify-between items-center py-[10px]">
          <div className="flex flex-row justify-between lg:w-[40%] w-[50%] lg:text-[16px] text-[10px]">
            <p className="text-textGrayColor font-semibold">
              Ünvan
            </p>
            <p className="text-boldGray font-semibold">
              Ceyhun Hacıbəyli küçəsi
            </p>
          </div>
          <div className="flex flex-row justify-between xl:w-[40%] font-semibold lg:text-[14px] xl:text-[12px] text-[10px] gap-[5px]">
            {cardPageData.cardPage.location.map((loc, index) => (
              <p
                className="lg:px-[15px] lg:py-[5px] px-[5px] py-[5px] bg-bgColor rounded-[20px]"
                key={index}
              >
                {loc}
              </p>
            ))}
          </div>
        </div>
        <img src="/assets/map.png" alt="map" />
      </div>
    </div>
  );
};

export default InfoCardPage;
