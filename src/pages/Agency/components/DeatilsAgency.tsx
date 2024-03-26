import React from "react";

const DeatilsAgency = () => {
  return (
    <div className="w-[40%] items-center flex flex-col gap-[10px]">
      <div className="flex flex-col items-center justify-center p-[15px] bg-bgColor w-full rounded-[8px]">
        <h1 className="md:text-[28px] sm:text-[24px] text-[18px] font-bold text-boldGray">260 000 AZN</h1>
        <p className="text-customGreen font-bold md:text-[16px] sm:text-[14px] text-[12px]">
          2 430 AZN/m<sup>2</sup>
        </p>
      </div>

      <div className="flex 900px:flex-row flex-col items-center justify-around w-full lg:text-[16px] text-[12px] gap-[10px] font-bold text-boldGray">
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

      <div className="flex flex-col items-center justify-center sm:p-[20px] gap-[12px] bg-bgColor w-full rounded-[8px]">
        <p className="font-bold text-boldGray md:text-[16px] text-[14px]">Amir Vasitəçi</p>
        <p className="font-bold text-customGreen md:text-[12px] text-[10px]">
          İstifadəçinin bütün elanlarını göstər
        </p>
        <button className="bg-customGreen text-white font-semibold sm:py-2 sm:px-4 rounded w-[80%]">
          <p className="sm:text-[12px] text-[10px]">Nömrəni tam göstər</p>
          <p className="md:text-[20px] sm:text-[16px] text-[12px]">(050) 455-54-..</p>
        </button>
      </div>

      <div className="flex 900px:flex-row flex-col w-full justify-between items-center gap-[10px] md:text-[12px] text-[10px] font-semibold">
        <div className="flex  flex-row w-full gap-[10px] bg-bgColor py-[10px] rounded-[8px] justify-center items-center">
          <img src="/assets/heart.png" alt="heart" />
          <p className=" text-boldGray">Seçilmişlərdə saxla</p>
        </div>
        <div className="flex  flex-row w-full gap-[10px] text-center bg-bgColor py-[10px] rounded-[8px] justify-center">
          <img src="/assets/Message_delete.png" alt="message delete" />
          <p className=" text-boldGray">Şikayət et</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:py-[15px] sm:px-[30px] p-[10px] gap-[12px] w-full bg-bgColor rounded-[8px] text-textColor font-semibold md:text-[14px] 500px:text-[12px] text-[10px]">
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

      <div className="bg-bgColor sm:p-[30px] p-[10px] w-full justify-center items-start flex flex-col sm:gap-[25px] gap-[10px] rounded-[8px]">
        <div className="flex flex-col sm:gap-[30px] gap-[10px]">
          <div className="flex md:flex-row flex-col md:gap-[25px] gap-[5px]">
            <img src="/assets/gradient.png" alt="" width="40%"/>
            <div className="flex flex-col justify-center">
              <p className="text-boldGray text-[14px] font-bold">Ev Bakı</p>
              <p className="text-textGrayColor 500px:text-[12px] text-[10px] font-[500]">
                Daşınmaz əmlak agentliyi
              </p>
              <p className="text-textGrayColor 500px:text-[12px] text-[10px] font-[500]">
                İstifadəçi kodu: 798708
              </p>
            </div>
          </div>
          <p className="text-boldGray text-[12px] font-[500] 900px:w-[90%]">
            2012-ci ildən fəaliyyət göstərən “Ülvü Əmlak” daşınmaz əmlak
            agentliyi Azərbaycanın aparıcı rieltor şirkətlərindən biridir.
            Şirkət paytaxt və ətraf qəsəbələrdə bağ evi, villa, köhnə və yeni
            tikili mənzil, ticarət obyekti, ofis və torpaq sahələrinin
            alqı-satqısını həyata keçirir. Geniş məlumat bazasına və yüksək
            xidmət səviyyəsinə malikdir.
          </p>
        </div>
        <p className="text-customGreen text-[12px] font-[500] mt-[15px] underline cursor-pointer">
          258 elan
        </p>
        <div className="md:text-[12px] text-[10px] font-semibold">
          <p>Hər gün: 10:00 – 23:00</p>
          <p>Bakı şəhəri, Xətai r., "Həzi Aslanov" m/st-nın yanı</p>
        </div>
        <button className="text-center w-full border-[1px] py-[10px] border-customGreen rounded-[8px] text-customGreen sm:text-[14px] text-[12px] font-[500] hover:bg-customGreen hover:text-white">
          Agentliyə keç
        </button>
      </div>

      <div className="flex md:flex-row flex-col w-full justify-between items-center gap-[10px] md:text-[20px] 500px:text-[16px] text-[14px] font-semibold text-white">
        <button className="bg-customGreen flex flex-row p-[10px] w-full justify-center items-center 500px:gap-[10px] gap-[5px] rounded-[8px] hover:bg-hoverGreen">
          <img src="/assets/Arrow_Up_circle.png" alt="arrow up" />
          <p>Irəli çək</p>
        </button>
        <button className="bg-customGreen flex flex-row p-[10px] w-full justify-center items-center500px:gap-[10px] gap-[5px] rounded-[8px] hover:bg-hoverGreen">
          <img src="/assets/Vector.png" alt="vector" />
          <p>VİP et</p>
        </button>
      </div>
    </div>
  );
};

export default DeatilsAgency;
