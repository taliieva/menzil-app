import React, { useState } from "react";

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative border-[1px] rounded-[20px] xl:w-[20%] md:w-[25%] w-[40%] hover:bg-imageBgColor">
      <img src="/assets/elan1.png" alt="" className="md:mb-[20px] mb-[10px]" />

      <img
        src={isLiked ? "/assets/heart2.png" : "/assets/heart1.png"}
        className="absolute top-[10px] right-[10px]"
        onClick={handleLikeClick}
      />
      <div className="flex flex-col p-[15px] pt-0">
        <p className="text-customGreen xl:text-[24px] font-bold text-[18px]">255 000 AZN</p>
        <p className="xl:text-[16px] font-bold text-[14px]">
          Biləcəri q - <span className="text-boldGray">Bakı</span>
        </p>
        <p className="text-textColor xl:text-[16px] text-[12px]">
          1 otaqlı - 48,5 m - 14/19 mərtəbə
        </p>
        <p className="text-dateColor xl:text-[12px] text-[10px]">16 January 2017</p>
      </div>
    </div>
  );
};

export default Card;
