import React from 'react'
import '../footer/Footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <footer className="footer-section mt-12">
            <div className="container mx-auto">

                <div className="footer-content pt-5 pb-5">
                <div className="row flex row2 px-16">
                    <div className="w-4/12 col-lg-4 mb-50 p">
                    <div className="footer-widget">
                        <div className="footer-logo flex">
                        <h2 className="text-2xl text-blue-100 font-bold flex w-fit">REACT JS</h2><span className='text-zinc-400 mt-2 text-sm pl-2'>mehrdad</span>
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
                        <li><a href="/">صفحه اصلی</a></li>
                        <li><a href="#">بازارهای معاملاتی</a></li>
                        <li><a href="#">کارمزد</a></li>
                        <li><a href="#">قوانین</a></li>
                        <li><a href="#">بازارها</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="w-4/12 col-lg-4 col-md-6 mb-50">
                    <div className="footer-widget">
                        <div className="footer-widget-heading">
                        <h3>ارتباط با ما</h3>
                        </div>
                        <div className="footer-text mb-25">
                        <p className='md:text-center'>
                            از طریق راه های زیر میتوانید با ما ارتباط داشته باشید
                        </p>
                        </div>
                        <div className="subscribe-form flex gap-4 text-2xl justify-start md:justify-center connection_link">
                            <FaTwitter />
                            <FaTelegramPlane />
                            <BsGithub />
                            <BsLinkedin />
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