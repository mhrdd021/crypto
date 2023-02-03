import React, { useEffect, useState } from "react";
import './Slick.css'
import Sushi from '../../assets/SUSHI.svg'
import DOT from '../../assets/DOT.svg'
import CELR from '../../assets/CELR.svg'
import WIN from '../../assets/WIN.svg'

const SimpleSlider = () => {

  return (
    <div className="w-full md:w-8/12 md:mx-auto rounded-lg justify-between  h-auto py-4 md:px-8 p-2 new_coin_container z-50 mb-8 relative -top-8 md:-top-12 sm:-top-12" style={{backgroundColor:'#0F1C2E'}}>
        <h1 className="font-bold text-blue-50 text-right">جدیدترین ارزها</h1>
        <div className="md:flex justify-around">
            <div className="flex justify-around w-full md:w-1/2 mt-4">

              <div className="w-6/12 md:w-4/12 mx-1 new_coin_card">
                 <img src={Sushi} className='mx-auto mt-4 mb-2 w-1/6'></img>
                 <h1 className="text-center text-blue-100 font-bold">سوشی سواپ</h1>
                 <h2 className="text-blue-200 text-center">(Sushi)</h2>
                 <h3 className="text-thin text-xs text-center mt-4 text-blue-200">58,756.6547 <span className="text-zinc-600">تومان</span></h3>
                 <h3 className="text-thin text-xs text-center mt-1 text-blue-200 mb-4">324.567 <span className="text-zinc-600">تتر</span></h3>
              </div>

              <div className="w-6/12 md:w-4/12 mx-1 new_coin_card">
              <img src={DOT} className='mx-auto mt-4 mb-2 w-1/6'></img>
                 <h1 className="text-center text-blue-100 font-bold">پولکادات</h1>
                 <h2 className="text-blue-200 text-center">(DOT)</h2>
                 <h3 className="text-thin text-xs text-center mt-4 text-blue-200">14,987.6754 <span className="text-zinc-600">تومان</span></h3>
                 <h3 className="text-thin text-xs text-center mt-1 text-blue-200 mb-4">124.677 <span className="text-zinc-600">تتر</span></h3>
              </div>

            </div>

            <div className="flex justify-around w-full md:w-1/2 mt-4">

              <div className="w-6/12 md:w-4/12 mx-1 new_coin_card">
                <img src={CELR} className='mx-auto mt-4 mb-2 w-1/6'></img>
                 <h1 className="text-center text-blue-100 font-bold">سلرنتورک</h1>
                 <h2 className="text-blue-200 text-center">(CLER)</h2>
                 <h3 className="text-thin text-xs text-center mt-4 text-blue-200">84,927.6023 <span className="text-zinc-600">تومان</span></h3>
                 <h3 className="text-thin text-xs text-center mt-1 text-blue-200 mb-4">454.3467 <span className="text-zinc-600">تتر</span></h3>
              </div>

              <div className="w-6/12 md:w-4/12 mx-1 new_coin_card">
              <img src={WIN} className='mx-auto mt-4 mb-2 w-1/6'></img>
                 <h1 className="text-center text-blue-100 font-bold">وینک</h1>
                 <h2 className="text-blue-200 text-center">(WIN)</h2>
                 <h3 className="text-thin text-xs text-center mt-4 text-blue-200">438.654 <span className="text-zinc-600">تومان</span></h3>
                 <h3 className="text-thin text-xs text-center mt-1 text-blue-200 mb-4">286.1140 <span className="text-zinc-600">تتر</span></h3>
              </div>
            </div>
        </div>
    </div>
  );
};
export default SimpleSlider