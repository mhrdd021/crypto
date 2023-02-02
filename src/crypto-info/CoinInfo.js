import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './CoinInfo.css'
import SideBar from './sidebar/SideBar';
import Loader from '../loader/Loader';
import { IoStatsChart } from 'react-icons/io5';
import { FaWallet } from 'react-icons/fa';
import { SiSpringsecurity } from 'react-icons/si';
import { IoRocket } from 'react-icons/io5';

const CoinInfo = () => {
//push page to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "crypto";
  }, []);

  const [loading, setLoading] = useState(false);
  const [CoinInfo , setCoinInfo] = useState([]);

  const CoinId = window.location.pathname.split("/").pop()

    useEffect(()=>{
        const loadCoin = async () => {
            // Till the data is fetch using API 
            // the Loading page will show.
            setLoading(true);

            // Await make wait until that 
            // promise settles and return its result
            const response = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${CoinId}`);

            // After fetching data stored it in posts state.
            setCoinInfo(response.data);

            // Closed the loading page
            setLoading(false);
            }
            // Call the function
            loadCoin();
        }, [])

    

  return (
    <>
    {loading ? (<Loader />) : 

    (<div className='w-full'
    >
        {/*----------------------name & primary info part-----------------------------*/}  
        <div className='flex w-10/12 mx-auto my-4'>
            {/*<img src={CoinInfo.image.small}></img>*/}
            <div className='ml-8'>
                <h2 className='font-bold text-xl text-blue-100'>
                    {CoinInfo.name}
                </h2>
                <h2 className='text-blue-100'>
                    {CoinInfo.symbol}
                </h2>
            </div>
        </div>

        {/*----------------------main data part-----------------------------*/}  
        <div className='flex mx-auto data_container gap-6'>

            {/*----------------------left part-----------------------------*/}  
            <div className='w-8/12 data_part h-fit'>

            {/*----------------------info big part-----------------------------*/}  
                <div className='data_part1'>
                    <div className='flex table_info_container'>
                        <div className='w-6/12'>
                            <div className='flex justify-between Info1 mt-8 px-4 w-full'>
                                <div>
                                    <h2 className='font-bold'>قیمت {CoinInfo.name} :</h2>
                                    <h2 className='green'>+{CoinInfo.sentiment_votes_down_percentage}%</h2>
                                </div>
                                <div>
                                    <h2 className='text-right font-bold'>{CoinInfo.liquidity_score}$</h2>
                                </div>
                            </div>

                            <div className='w-full px-2 mx-auto rounded-md mt-4'>

                                <div className='flex justify-evenly duration_box py-2'>
                                    <h3>از ابتدا</h3>
                                    <h3>1سال</h3>
                                    <h3>30 روز</h3>
                                    <h3>7 روز</h3>
                                    <h3>24 ساعت</h3>
                                </div>

                                <div className='w-full flex justify-between mt-6 px-4 max_min_price'>

                                    <div className='text-xs text-right'>
                                        <h3>کمترین قیمت(24 ساعت)</h3>
                                        <h3 className='red mt-1'>{CoinInfo.sentiment_votes_down_percentage} $</h3>
                                    </div>

                                    <div className='text-xs text-right'>
                                    <h3>بیشترین قیمت(24 ساعت)</h3>
                                        <h3 className='green mt-1'>{CoinInfo.sentiment_votes_up_percentage} $</h3>
                                    </div>

                                </div>

                                <div className='w-full my-8 block'>
                                    <div className='w-full'>
                                        <h1 className='text-sm rounded-md float-right px-4 py-1' style={{backgroundColor:'#14253E'}}>{CoinInfo.categories}</h1>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='w-6/12'>
                            <iframe src={`https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22BINANCE%3A${CoinInfo.symbol}USD%22%5D%5D%2C%22height%22%3A%22400px%22%2C%22colorTheme%22%3A%22dark%22%2C%22fontColor%22%3A%22%23869EC0%22%2C%22scalePosition%22%3A%22no%22%2C%22scaleMode%22%3A%22Normal%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22%23599EFF%22%2C%22fontFamily%22%3A%22Trebuchet%20MS%2C%20sans-serif%22%2C%22showFloatingTooltip%22%3Atrue%2C%22page-uri%22%3A%22wallex.ir%2Fmarkets%2Fdoge%22%2C%22utm_source%22%3A%22wallex.ir%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D`} className='w-full h-[400px] py-4 pl-8 pr-4 rounded-md'>

                            </iframe>
                        </div>
                    </div>

                    <div className='w-full px-8 mt-8 mini_data_container'>

                        <div className='w-full flex justify-between mini_data_1'>

                            <div>
                                <h1 className='text-blue-400 text-right'>حجم معاملات</h1>
                                <h2 className='text-xs text-blue-200 text-right'>$ 6,202,126,848.50</h2>
                            </div>

                            <div>
                                <h1 className='text-blue-400 text-right'>تسلط به بازار</h1>
                                <h2 className='text-xs text-blue-200 text-right'>18.46%</h2>
                            </div>

                            <div>
                                <h1 className='text-blue-400 text-right'>حجم کل بازار</h1>
                                <h2 className='text-xs text-blue-200 text-right'>$ 193,054,242,306.31</h2>
                            </div>

                        </div>

                        <div className='w-full flex justify-between mt-4 pb-8 mini_data_1'>

                            <div>
                                <h1 className='text-blue-400 text-right'>ارز در گردش</h1>
                                <h2 className='text-xs text-blue-200 text-right'>100%</h2>
                            </div>

                            <div>
                                <h1 className='text-blue-400 text-right'>مجموع ارز در دسترس</h1>
                                <h2 className='text-xs text-blue-200 text-right'>120,515,299.76</h2>
                            </div>

                            <div>
                                <h1 className='text-blue-400 text-right'>حداکثر ارز قابل عرضه</h1>
                                <h2 className='text-xs text-blue-200 text-right'>نامشخص</h2>
                            </div>
                        </div>

                    </div>
                </div>

            {/*----------------------notice part-----------------------------*/}  
                <div className='w-full notice_container mt-8'>

                    <h1 className='text-blue-100 font-bold text-right'>چرا صرافی ما؟</h1>

                    <div className='flex notice_part1'>
                        <div className='w-4/12 rounded-md py-4 px-4 my-2 mx-4'>
                        <IoStatsChart className='mx-auto my-2 text-xl icons'/>
                        <h1 className='font-bold text-blue-100 text-center'>عمق بازار و حجم معاملات بالا</h1>
                            <p className='text-xs font-thin text-center text-blue-100'>
                            با بیش از ۶۰۰ هزار کاربر فعال، معامله خود را در سریع‌ترین زمان ممکن انجام دهید.
                            </p>
                        </div>

                        <div className='special w-8/12 rounded-md py-4 px-4 my-2 mx-4 bg-blue-100'>
                            <IoRocket className='mx-auto my-2 text-xl '/>
                            <h1 className='font-bold text-slate-900 text-center'>امکانات پیشرفته برای معاملات</h1>
                            <p className='text-xs font-thin text-center text-slate-900'>
                            ابزارهای مدرن برای انجام معاملات از جمله حد سود و ضرر، پنل گزارش سود و زیان، امکان تنظیم هشدار قیمت و همچنین نمودارهای قیمتی و ابزارهای تحلیل بازار در اختیار شماست.
                            </p>
                        </div>
                    </div>

                    <div className='flex notice_part2'>
                        <div className='w-8/12 rounded-md py-4 px-4 my-2 mx-4'>
                        <SiSpringsecurity className='mx-auto my-2 text-xl icons'/>
                        <h1 className='font-bold text-blue-100 text-center'>سپرهای امنیتی مدرن</h1>
                            <p className='text-xs font-thin text-center text-blue-100'>
                            تیم امنیتی پیشرفته والکس با ابزارهای مدرن و به‌روز، همواره برای حفظ امنیت دارایی کاربران تلاش می‌کنند. ذخیره امن دارایی کاربران در کیف پول‌های سرد و تایید هویت دو عاملی از جمله این ابزارها هستند.                            </p>
                        </div>
                        
                        <div className='w-4/12 rounded-md py-4 px-4 my-2 mx-4'>
                        <FaWallet className='mx-auto my-2 text-xl icons'/>
                        <h1 className='font-bold text-blue-100 text-center'>کیف‌پول اختصاصی</h1>
                            <p className='text-xs font-thin text-center text-blue-100'>
                            دارایی‌های شما در کیف‌پول اختصاصی به صورت سرد نگه‌داری می‌شود و دربرابر حمله‌های مختلف امنیت دارد.                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/*----------------------sidebar part-----------------------------*/}  
            <div className='w-4/12 sidebar rounded-xl pb-4'>
                <div className='w-full rounded-xl h-fit mb-4' style={{backgroundColor:'#0F1C2E' , height:'14rem'}}>
                    <h1 className='font-bold text-blue-100 text-center pt-4'>
                        محاسبه قیمت {CoinInfo.name} 
                    </h1>

                    <div className='pr-4'>
                        <h1 className='w-full text-right py-2 pr-8'>پرداخت میکنم</h1>
                        <div className='w-10/12 mx-auto'>
                            <input placeholder='مقدار را وارد کنید' className='sideBar_input w-full px-8 rounded-sm bg-transparent h-12'></input>
                        </div>
                        <div className='w-10/12 flex mx-auto mt-2 justify-around'>
                            <button className='sell-button w-6/12 rounded-md py-2 px-4 mt-4 mx-1' style={{backgroundColor:'#F5627B'}}>فروش آنی</button>
                            <button className='buy-button w-6/12 rounded-md py-2 px-4 mt-4 mx-1' style={{backgroundColor:'#66CCAA'}}>خرید آنی</button>
                        </div>
                    </div>

                </div>
                <SideBar/>
            </div>

        </div>
    </div>)}
    </>
  )
}

export default CoinInfo