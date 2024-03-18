import React from 'react'

const CardPage = () => {
  return (
    <div className='flex flex-col p-10 w-full'>
      <div className='flex flex-row'>
        <p className='text-customGreen font-bold text-[16px]'>Satış</p>
        <span className="mx-1">. </span>
        <p className='text-customGray font-bold text-[16px]'>3 otaqlı yeni tikili</p>
      </div>
      <h1 className='font-bold text-[24px] text-boldray'>Satılır 3 otaqlı, Yeni tikili, 107 m2, Gənclik m/s.</h1>
      <div className='flex flex-row'>
        <div>
            <img src='/assets/Rectangle 1019.png' alt='home'/>
            <div className='flex flex-row'>
                <img src='/assets/cardPage2.png' alt="home" />
                <img src='/assets/cardPage3.png' alt="home" />
                <img src='/assets/Rectangle 1022.png' alt="home" />
                <img src='/assets/cardPage4.png' alt="home" />
                <img src='/assets/cardPage5.png' alt="home" />
                <img src='/assets/cardPage3.png' alt="home" />
            </div>
        </div>
        <div>sag</div>
      </div>
    </div>
  )
}

export default CardPage
