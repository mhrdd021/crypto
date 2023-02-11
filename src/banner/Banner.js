import React from 'react'
import mockup from '../assets/mockup.png'
import './Banner.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SimpleSlider from './slick/Slick';

const Banner = () => {
  return (
    <>
        <div className='w-full h-auto md:h-4/6 flex pt-14 banner_container'>
        <div className='w-1/2 mockup_container'>
            <img src={mockup} className="w-8/12 sm:w-3/6 mb-8 mx-auto"></img>
        </div>

        <div className='w-1/2 banner_text'>
            <h1 className='text-2xl md:text-4xl font-bold text-right relative text-blue-100 top-1/3 right-1/4 mt-1'>صرافی ارزهای دیجیتال</h1>
            <h2 className='text-sm md:text-xl font-semibold text-blue-200 text-right relative top-1/3 right-1/4 mt-2'>بازار خرید و فروش ارزهای دیجیتال</h2>
            
            <div className='w-1/2 mx-auto relative top-1/3 input_container'>
                <div className='flex'>
                    <buuton className='mt-8 pt-2 px-2 relative left-8 rounded-xl flex text-slate-800 start_button font-bold' style={{backgroundColor:'#c7ddfe'}}>
                         <AiOutlineArrowLeft className='mt-2 mx-1 text-slate-800'/>شروع  
                    </buuton>
                    <input placeholder='شماره موبایل را وارد کنید' type='phone' className='phone_input text-right w-full mt-8 mx-auto'></input>
                </div>
                <p className='text-xs text-blue-200 text-right sm:pb-24 pb-16 mt-2 text-thin'>
                در کمتر از ۵ دقیقه ثبت‌نام و اولین معامله خود را شروع کنید
                </p>
            </div>
        </div>
    </div>
<SimpleSlider/>
</>
  )
}

export default Banner