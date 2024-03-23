import React, { useState } from "react";

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="relative border-[1px] rounded-[20px] w-[20%] hover:bg-imageBgColor">
      <img src="/assets/elan1.png" alt="" className="mb-[20px]" />

      <img
        src={isLiked ? "/assets/heart2.png" : "/assets/heart1.png"}
        className="absolute top-[10px] right-[10px]"
        onClick={handleLikeClick}
      />
      <div className="flex flex-col p-[15px] pt-0">
        <p className="text-customGreen text-[24px] font-bold">255 000 AZN</p>
        <p className="text-[16px] font-bold">
          Biləcəri q - <span className="text-boldGray">Bakı</span>
        </p>
        <p className="text-textColor text-[16px]">
          1 otaqlı - 48,5 m - 14/19 mərtəbə
        </p>
        <p className="text-dateColor text-[12px]">16 January 2017</p>
      </div>
    </div>
  );
};

export default Card;
