import React from "react";
import footerData from "../data.json";
const Footer = () => {
  return (
    <div className="bg-customGreen w-full text-white sm:py-10 sm:px-20 p-[10px] flex flex-col gap-[50px]">
      <div className="flex 900px:flex-row flex-col justify-start items-start">
        <div className="900px:w-[40%] w-[80%] 900px:mb-0 mb-[30px]">
          <h1 className="text-[40px] font-[800] leading-[40px] mb-[10px]">
            mənzilim.az
          </h1>
          <p className="sm:w-[60%] mb-5 text-[14px]">
            <span className="font-[700]">mənzilim.az</span> - ən yeni daşınmaz
            əmlak satışı və kirayəsi xidmətlərini digital sferada təqdim edən
            platformadır.{" "}
          </p>
          <p className="text-[14px] sm:w-[60%]">
            Saytın rəhbərliyi reklam bannerlərinin və yerləşdirilmiş ev elanları
            məzmununa görə məsuliyyət daşımır.
          </p>
        </div>
        <div className="flex 900px:flex-row flex-col w-[60%] 900px:gap-0 gap-[30px] 900px:justify-between">
          {footerData.footerSection.map((item, index) => (
            <div className="flex flex-col 900px:gap-[15px] gap-[5px]">
              <p className="sm:text-[18px] text-[14px] font-[800] mb-[10px]">{item.label}</p>
              {item.list.map((list, index) => (
                <p key={index} className="sm:text-[16px] text-[14px] font-[500]">
                  {list}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p>
        2024 mənzilim.az | Daşınmaz emlak saytı - Ev kirayəsi və satışı | Bütün
        hüquqlar qorunur{" "}
      </p>
    </div>
  );
};

export default Footer;
