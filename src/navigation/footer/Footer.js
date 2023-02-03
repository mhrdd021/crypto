import React from 'react'
import '../footer/Footer.css'
import { MdLocationPin } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
            <footer className="footer-section">
            <div className="container mx-auto">
                <div className="footer-cta p-6">
                <div className="row flex justify-evenly row1">
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        
                        <div className="cta-text">
                        <h4 className='flex'><MdLocationPin className='text-red-600 text-2xl mt-1 pl-2'/>آدرس ما</h4>
                        <span>تهران-میرداماد - خیابان نسا - پلاک4 طبقه 4</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        <div className="cta-text">
                        
                        <h4 className='flex'><FaPhone className='text-red-600 text-2xl mt-1 pl-2'/>شماره تماس</h4>
    
                        <span>09012345678</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                    <div className="single-cta">
                        
                        <div className="cta-text">
                        <h4 className='flex'><SiGmail className='text-red-600 text-2xl mt-1 pl-2'/>ایمیل</h4>
                        <span>mail@info.com</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                <div className="row flex row2 px-16">
                    <div className="w-4/12 col-lg-4 mb-50 p">
                    <div className="footer-widget">
                        <div className="footer-logo">
                        <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"></img></a>
                        </div>
                        <div className="footer-text">
                        <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتر
                        </p>
                        </div>
    
                    </div>
                    </div>
                    <div className="w-4/12 mb-30">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                        <h3>لینکهای پرکاربرد</h3>
                        </div>
                        <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">فیلم</a></li>
                        <li><a href="#">سریال</a></li>
                        <li><a href="#">جدیدترین ها</a></li>
                        <li><a href="#">پربازدید</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="w-4/12 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                        <h3>ارتباط با ما</h3>
                        </div>
                        <div className="footer-text mb-25">
                        <p>با ثبتنام در این سایت میتوانید فیلم مورد علاقه خودرا آپلود و یا از همکاران ما درخواست بارگذاری آن را داشته باشید</p>
                        </div>
                        <div className="subscribe-form">
                        <form action="#">
                            <input type="text" placeholder="ایمیل" />
                            <button><MdOutlineAlternateEmail className='text-3xl'/></button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                    <div className="copyright-text">
                        <p>Copyright &copy; 2023, All Right Reserved <a href="https://github.com/mhrdd021">Mhrdd</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>
        </div>
      )
}

export default Footer