import React from "react";

const DetailsAnnouncement = () => {
  return (
    <div className="w-[40%] items-center flex flex-col gap-[10px]">
      <div className="flex flex-col items-center justify-center p-[15px] bg-bgColor w-full rounded-[8px]">
        <h1 className="text-[28px] font-bold text-boldGray">260 000 AZN</h1>
        <p className="text-customGreen font-bold text-[16px]">
          2 430 AZN/m<sup>2</sup>
        </p>
      </div>

      <div className="flex flex-row items-center justify-around w-full text-[16px] gap-[10px] font-bold text-boldGray">
        <p className="bg-bgColor rounded-[8px] w-full p-[10px] text-center">
          3 otaqlı
        </p>
        <p className="bg-bgColor rounded-[8px] p-[10px] w-full text-center">
          107 m<sup>2</sup>
        </p>
        <p className="bg-bgColor rounded-[8px] p-[10px] w-full text-center">
          8/17 mərtəbə
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-[20px] gap-[12px] bg-bgColor w-full rounded-[8px]">
        <p className="font-bold text-boldGray text-[16px]">Amir Vasitəçi</p>
        <p className="font-bold text-customGreen tex-[12px]">
          İstifadəçinin bütün elanlarını göstər
        </p>
        <button className="bg-customGreen text-white font-semibold py-2 px-4 rounded w-[80%]">
          <p className="text-[12px]">Nömrəni tam göstər</p>
          <p className="text-[20px]">(050) 455-54-..</p>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center py-[15px] px-[30px] gap-[12px] w-full bg-bgColor rounded-[8px] text-textColor font-semibold text-[14px]">
        <div className="flex flex-row justify-between w-full items-center">
          <p>Elanın nömrəsi</p>
          <p>1234567</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Baxış sayı</p>
          <p>1234567</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <p>Yeniləndi</p>
          <p>27 Mart 2024</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center gap-[10px] text-[12px] font-semibold">
        <div className="flex  flex-row w-full gap-[10px] bg-bgColor py-[10px] rounded-[8px] justify-center items-center">
          <img src="/assets/heart.png" alt="heart" />
          <p className=" text-boldGray">Seçilmişlərdə saxla</p>
        </div>
        <div className="flex  flex-row w-full gap-[10px] text-center bg-bgColor py-[10px] rounded-[8px] justify-center">
          <img src="/assets/Message_delete.png" alt="message delete" />
          <p className=" text-boldGray">Şikayət et</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center gap-[10px] text-[20px] font-semibold text-white">
        <button className="bg-customGreen flex flex-row p-[10px] w-full justify-center items-center gap-[10px] rounded-[8px] hover:bg-hoverGreen">
          <img src="/assets/Arrow_Up_circle.png" alt="arrow up" />
          <p>Irəli çək</p>
        </button>
        <button className="bg-customGreen flex flex-row p-[10px] w-full justify-center items-center gap-[10px] rounded-[8px] hover:bg-hoverGreen">
          <img src="/assets/Vector.png" alt="vector" />
          <p>VİP et</p>
        </button>
      </div>
    </div>
  );
};

export default DetailsAnnouncement;
