import React from "react";
import InfoCardPage from "./components/InfoCardPage.tsx";
import DetailsAnnouncement from "./components/DetailsAnnouncement.tsx";
import Card from "../../components/Card.tsx";
import Footer from "../../components/Footer.tsx";

const CardPage = () => {
  return (
    <div>
      <div className="flex flex-col sm:p-10 p-[10px] w-full">
        <div className="flex flex-row mb-[30px]">
          <p className="text-customGreen font-bold text-[16px]">Satış</p>
          <span className="mx-1 flex h-[100%] items-center">. </span>
          <p className="text-customGray font-bold text-[16px]">
            3 otaqlı yeni tikili
          </p>  
        </div>
        <h1 className="font-bold md:text-[24px] sm:text-[20px] text-[18px] text-boldGray mb-[10px]">
          Satılır 3 otaqlı, Yeni tikili, 107 m<sup>2</sup>, Gənclik m/s.
        </h1>
        <div className="flex flex-row gap-[20px]">
          <InfoCardPage />
          <DetailsAnnouncement />
        </div>

        <div className="py-[30px] flex flex-col w-full">
          <div className="flex flex-row justify-between mb-[20px]">
            <p className="text-boldGray text-[20px] font-bold">
              Bənzər Elanlar
            </p>
            <p className="text-customGreen font-semibold text-[18px]">
              Daha çox
            </p>
          </div>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardPage;
