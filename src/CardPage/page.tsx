import React from "react";

const CardPage = () => {
  return (
    <div className="flex flex-col p-10 w-full">
      <div className="flex flex-row mb-[30px]">
        <p className="text-customGreen font-bold text-[16px]">Satış</p>
        <span className="mx-1">. </span>
        <p className="text-customGray font-bold text-[16px]">
          3 otaqlı yeni tikili
        </p>
      </div>
      <h1 className="font-bold text-[24px] text-boldGray mb-[10px]">
        Satılır 3 otaqlı, Yeni tikili, 107 m<sup>2</sup>, Gənclik m/s.
      </h1>
      <div className="flex flex-row w-full gap-[20px]">
        <div className="w-[60%] border-b-[1px] pb-[30px]">
          <img src="/assets/Rectangle 1019.png" alt="home" className="w-full" />
          <div className="flex flex-row mt-[10px] justify-between">
            <img src="/assets/cardPage2.png" alt="home" className="w-[15%]" />
            <img src="/assets/cardPage3.png" alt="home" className="w-[15%]" />
            <img
              src="/assets/Rectangle 1022.png"
              alt="home"
              className="w-[15%]"
            />
            <img src="/assets/cardPage4.png" alt="home" className="w-[15%]" />
            <img src="/assets/cardPage5.png" alt="home" className="w-[15%]" />
            <img src="/assets/cardPage3.png" alt="home" className="w-[15%]" />
          </div>
        </div>

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
            <div className="flex  flex-row w-full gap-[10px] bg-bgColor p-[10px] rounded-[8px] justify-center items-center">
              <img src="/assets/heart.png" alt="heart" />
              <p className=" text-boldGray">Seçilmişlərdə saxla</p>
            </div>
            <div className="flex  flex-row w-full gap-[10px] text-center bg-bgColor p-[20px] rounded-[8px] justify-center">
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
      </div>

      <div className="grid grid-cols-2 w-[60%] text-[16px] font-semibold py-[30px] gap-[30px] border-b-[1px]">
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Əmlakın növü</p>
          <p className="text-boldGray">Yenitikili</p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Mərtəbə</p>
          <p className="text-boldGray">8</p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Əmlak sənədi</p>
          <p className="text-boldGray">Çıxarış (Kupça)</p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Təmir</p>
          <p className="text-boldGray">Təmirli</p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Otaq sayı</p>
          <p className="text-boldGray">3</p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Sahə</p>
          <p>107m<sup>2</sup></p>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <p className="text-textGrayColor">Bina mərtəbə sayı</p>
          <p className="text-boldGray">17</p>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
