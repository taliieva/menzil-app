import React from "react";
import InfoObjectPage from "./components/InfoObjectPage.tsx";
import DetailsObjects from "./components/DetailsObjects.tsx";
import Card from "../../components/Card.tsx";
import Footer from "../../components/Footer.tsx";

const Objects = () => {
  return (
    <div>
      <div className="flex flex-col p-10 w-full">
        <div className="flex flex-row mb-[30px]">
          <p className="text-customGreen font-bold text-[16px]">Satış</p>
          <span className="mx-1">. </span>
          <p className="text-customGray font-bold text-[16px]">
            3 otaqlı yeni tikili
          </p>
        </div>
        <h1 className="font-bold text-[24px] text-boldGray mb-[10px]">
          Satılır obyekt 2680 m<sup>2</sup>, Elmlər Akademiyası m.
        </h1>
        <div className="flex flex-row gap-[20px]">
          <InfoObjectPage />
          <DetailsObjects />
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

export default Objects;
