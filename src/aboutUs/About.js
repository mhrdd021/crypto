import React from 'react'
import { useEffect, useState } from 'react';
import './About.css'
import BC from '../assets/BC.png'
import { IoStatsChart } from 'react-icons/io5';
import { FaWallet } from 'react-icons/fa';
import { SiSpringsecurity } from 'react-icons/si';
import { IoRocket } from 'react-icons/io5';
import { BsCodeSquare } from 'react-icons/bs';
import Loader from '../loader/Loader';

const About = () => {
//push page to top
useEffect(() => {
window.scrollTo(0, 0);
document.title = "درباره ما";
}, []);

const [loading, setLoading] = useState(false);
useEffect(()=>{
    const loadCoin = async () => {
        // Till the data is fetch using API 
        // the Loading page will show.
        setLoading(true);

        // Closed the loading page
        setLoading(false);
        }
        // Call the function
        loadCoin();
    }, [])

  return (
    <>
        {loading ? (<Loader />) : 
        (
            <div>
                <div className='w-full h-screen about_container'>
                    <div className='md:flex pt-8 about_banner_container'>
        
                        <div className='w-6/12'>
                            <h1 className='text-2xl font-bold text-blue-100 relative top-2/3 text-center'>درباره صرافی ما</h1>
                            <p className='text-xs font-light text-blue-200 relative top-2/3 text-center md:w-8/12 mx-auto my-4 px-4'>لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum)  اولین هدف تیم والکس، ایجاد بستری امن برای انجام معامله‌ها و حفظ دارایی‌های مشتریان است. به همین جهت از افراد متخصص در حوزه امنیت سایبری استفاده شده است. برای توسعه و بهبود سایت همواره به موضوع امنیت توجه شده است. برای روشن‌تر کردن و اعتماد شما مشتریان گرامی در زیر به صورت مفصل‌تر توضیح داده‌ایم. به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری</p>
                        </div>
        
                        <div className='w-4/12'>
                            <img src={BC} className='relative top-1/4'></img>
                        </div>
        
                    </div>
                </div>
        
                <div className='w-8/12 mx-auto h-fit about_tips_container'>
                    {/*----------------------notice part-----------------------------*/}  
                    <div className='w-full notice_container mt-8'>
        
                        <h1 className='text-blue-100 font-bold text-right pr-8'>چرا صرافی ما؟</h1>
        
                        <div className='flex notice_part1'>
                            <div className='w-4/12 rounded-md py-4 px-4 my-2 md:mx-4'>
                            <IoStatsChart className='mx-auto my-2 text-xl icons'/>
                            <h1 className='font-bold text-blue-100 text-center'>عمق بازار و حجم معاملات بالا</h1>
                                <p className='text-xs font-thin text-center text-blue-100'>
                                با بیش از ۶۰۰ هزار کاربر فعال، معامله خود را در سریع‌ترین زمان ممکن انجام دهید.
                                </p>
                            </div>
        
                            <div className='special w-8/12 rounded-md py-4 px-4 my-2 md:mx-4 bg-blue-100'>
                                <IoRocket className='mx-auto my-2 text-xl '/>
                                <h1 className='font-bold text-slate-900 text-center'>امکانات پیشرفته برای معاملات</h1>
                                <p className='text-xs font-thin text-center text-slate-900'>
                                ابزارهای مدرن برای انجام معاملات از جمله حد سود و ضرر، پنل گزارش سود و زیان، امکان تنظیم هشدار قیمت و همچنین نمودارهای قیمتی و ابزارهای تحلیل بازار در اختیار شماست.
                                </p>
                            </div>
                        </div>
        
                        <div className='flex notice_part2'>
                            <div className='w-6/12 rounded-md py-4 px-4 my-2 md:mx-4 special_blue'>
                            <SiSpringsecurity className='mx-auto my-2 text-xl icons'/>
                            <h1 className='font-bold text-blue-100 text-center'>سپرهای امنیتی مدرن</h1>
                                <p className='text-xs font-thin text-center text-blue-100'>
                                تیم امنیتی پیشرفته والکس با ابزارهای مدرن و به‌روز، همواره برای حفظ امنیت دارایی کاربران تلاش می‌کنند. ذخیره امن دارایی کاربران در کیف پول‌های سرد و تایید هویت دو عاملی از جمله این ابزارها هستند.                            </p>
                            </div>
                            
                            <div className='w-3/12 rounded-md py-4 px-4 my-2 md:mx-4'>
                            <BsCodeSquare className='mx-auto my-2 text-xl icons'/>
                            <h1 className='font-bold text-blue-100 text-center'>ساده و سریع</h1>
                                <p className='text-xs font-thin text-center text-blue-100'>
                                بدون نیاز به دانش برنامه‌نویسی، ربات بسازید                            </p>
                            </div>
        
                            <div className='w-3/12 rounded-md py-4 px-4 my-2 md:mx-4'>
                            <FaWallet className='mx-auto my-2 text-xl icons'/>
                            <h1 className='font-bold text-blue-100 text-center'>کیف‌پول اختصاصی</h1>
                                <p className='text-xs font-thin text-center text-blue-100'>
                                دارایی‌های شما در کیف‌پول اختصاصی به صورت سرد نگه‌داری می‌شود و دربرابر حمله‌های مختلف امنیت دارد.                            </p>
                            </div>
        
                        </div>
        
                        </div>
                </div>
            </div>
        )}
    </>

  )
}

export default About