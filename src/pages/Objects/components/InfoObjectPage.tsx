import React from "react";
import PhotoSection from "../../../components/PhotoSection.tsx";
import objectPageData from "../../../data.json";
const InfoObjectPage = () => {
  return (
    <div className="w-[60%]">
      <PhotoSection />

      <div className="grid grid-cols-2 w-full text-[16px] font-semibold py-[30px] gap-[30px] border-b-[1px]">
        {objectPageData.objectPage.infoDetails.map((details, index) => (
          <div className="flex flex-row justify-between w-[60%]" key={index}>
            <p className="text-textGrayColor">{details.label}</p>
            <p className="text-boldGray">{details.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full py-[30px] border-b-[1px] gap-[10px]">
        <p className="text-boldGray text-[16px] w-[90%]">
          {objectPageData.objectPage.infoText}
        </p>
        <p className="text-customGreen text-[14px] font-semibold">
          Hamısını göstər
        </p>
      </div>

      <div className="flex flex-col w-full py-[30px] gap-[30px] border-b-[1px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-between w-[40%]">
            <p className="text-textGrayColor text-[16px] font-semibold">
              Ünvan
            </p>
            <p className="text-boldGray text-[16px] font-semibold">
               Mərdəkan qəs.
            </p>
          </div>
          <div className="flex flex-row justify-between w-[40%] font-semibold text-[14px]">
            {objectPageData.objectPage.location.map((loc, index) => (
              <p
                className="px-[25px] py-[5px] bg-bgColor rounded-[20px]"
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

export default InfoObjectPage;
