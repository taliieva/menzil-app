import React from "react";
import footerData from "../data.json";
const Footer = () => {
  return (
    <div className="bg-customGreen w-full text-white py-10 px-20 flex flex-col gap-[50px]">
      <div className="flex flex-row justify-start items-start">
        <div className="w-[40%]">
          <h1 className="text-[40px] font-[800] leading-[40px] mb-[10px]">
            mənzilim.az
          </h1>
          <p className="w-[60%] mb-5 text-[14px]">
            <span className="font-[700]">mənzilim.az</span> - ən yeni daşınmaz
            əmlak satışı və kirayəsi xidmətlərini digital sferada təqdim edən
            platformadır.{" "}
          </p>
          <p className="text-[14px] w-[60%]">
            Saytın rəhbərliyi reklam bannerlərinin və yerləşdirilmiş ev elanları
            məzmununa görə məsuliyyət daşımır.
          </p>
        </div>
        <div className="flex flex-row w-[60%] justify-between">
          {footerData.footerSection.map((item, index) => (
            <div className="flex flex-col gap-[15px]">
              <p className="text-[18px] font-[800] mb-[10px]">{item.label}</p>
              {item.list.map((list, index) => (
                <p key={index} className="text-[16px] font-[500]">
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
