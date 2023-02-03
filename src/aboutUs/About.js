import React from 'react'
import { useEffect } from 'react';
import './About.css'
import BC from '../assets/BC.png'

const About = () => {
//push page to top
useEffect(() => {
window.scrollTo(0, 0);
document.title = "درباره ما";
}, []);

  return (
    <div className='w-full h-screen about_container'>
        <div className='flex pt-8'>

            <div className='w-6/12'>
                <h1 className='text-2xl font-bold text-blue-100 relative top-2/3 text-center'>درباره صرافی ما</h1>
                <p className='text-xs font-light text-blue-200 relative top-2/3 text-center w-8/12 mx-auto my-4'>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری</p>
            </div>

            <div className='w-4/12'>
                <img src={BC} className='relative top-1/4'></img>
            </div>

        </div>
    </div>
  )
}

export default About