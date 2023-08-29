import React from "react";
import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

/* script */
import { headerScroll } from './headerScroll.js'

/* application */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faCartShopping, faHeart , faBars, faUser } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';


/* component */
import Collection from './Component/Collection';
import NewBest from "./Component/newandbest";
import SnsBox from "./Component/sns";

/* pages */
import ShopPage from "./page/shop";
import LookbookBox from "./page/lookbook";
import MediaBox from "./page/media";
import EventBox from "./page/event";
import StoreBox from "./page/store";
import AboutBox from "./page/about";



function App() {
    useEffect(() => {
        window.addEventListener('scroll', headerScroll);
    
        return () => {
          window.removeEventListener('scroll', headerScroll);
        };
      }, []);

      /* MainToggle */
        useEffect(() => {
            const gnbWrap = document.querySelector('.gnbWrap');
            const mainToggleBtn = document.querySelector('.main_toggle');
            const clickMenus = document.querySelectorAll('.gnbWrap .gnb li')
        
            if (mainToggleBtn) {
                mainToggleBtn.addEventListener('click', () => {
                    gnbWrap.classList.toggle('show');
                    console.log("클릭")
                });
                    clickMenus.forEach(clickMenu => {
                    clickMenu.addEventListener('click', () => {
                    gnbWrap.classList.remove('show');
                });
                });
            }
        }, []);
        
        
    return (
        <div className='main'>
            <header className='header'>
                <div className='inner'>
                    <div className='navBar'>
                        <Link to="/">login</Link>
                        <Link to="/">join</Link>
                        <Link to="/">Membership</Link>
                        <Link to="/">my page</Link>
                    </div>
                    <h1 className='logo'><Link to="/"><img src='/image/logo2.png' alt='logo'></img></Link></h1>
                    <div className='gnbWrap'>
                        <ul className='gnb'>
                            <li><Link to='/shoppage'>shop</Link></li>
                            <li><Link to='/lookbook'>lookbook</Link></li>
                            <li><Link to='/media'>media</Link></li>
                            <li><Link to='/event'>event</Link></li>
                            <li><Link to='/store'>store</Link></li>
                            <li><Link to='/about'>about</Link></li>
                        </ul>
                    </div>
                    <div className='servBar'>
                        <Link to="/"><FontAwesomeIcon icon={faSearch} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faCartShopping} /></Link>
                        <Link to="/"><FontAwesomeIcon icon={faHeart} /></Link>
                    </div>
                        <button type="button" className="main_toggle"><FontAwesomeIcon icon={faBars} /></button>
                        <div className="rightToggle">
                            <button type="button" className="join"><FontAwesomeIcon icon={faUser} /></button>
                            <button type="button" className="like"><FontAwesomeIcon icon={faHeart} /></button>
                        </div>
                </div>
            </header>
            <Routes>
                <Route path="/" element={
                    <div>
                        <section className='visual'>
                            <div className="main"><img src="/image/visual_01.jpg" alt="visual"></img></div>
                        </section>
                        <section className='collection content'>
                            <div className='inner'>
                                <h2 className='title out'>New Collection</h2>
                                {
                                    <Collection></Collection>
                                }
                            </div>
                        </section>
                        {
                            <NewBest></NewBest>
                        }
                        <section className='banner content'>
                            <div className='pic'><img src='/image/banner.jpg' alt='banner'></img></div>
                            <div className='viewBox'>
                            <div className='slideBox'>
                                <div className='leftBox'>
                                <div className='slideItem'>like no other store in the world! bebe de pino.&nbsp;like no other store in the world! bebe de pino.&nbsp;like no other store in the world! bebe de pino.&nbsp;like no other store in the world! bebe de pino.&nbsp;</div>

                                </div>
                            </div>
                            </div>

                        </section>
                        {
                            <SnsBox></SnsBox>
                        }
                        <section className="lastIcon"><img src="/image/logo4.png" alt="logo"></img></section>
                    </div>
                }></Route>
                <Route path="/shoppage" element={
                    <ShopPage></ShopPage>
                }></Route>
                <Route path="/lookbook" element={
                    <LookbookBox></LookbookBox>
                }></Route>
                <Route path="/media" element={
                    <MediaBox></MediaBox>
                }></Route>
                <Route path="/event" element={
                    <EventBox></EventBox>
                }></Route>
                <Route path="/store" element={
                    <StoreBox></StoreBox>
                }></Route>
                <Route path="/about" element={
                    <AboutBox></AboutBox>
                }></Route>
            </Routes>
            <footer>
                <div className="inner">
                    <div className="wrap">
                        <h3 className="logo"><img src="/image/logo5.png" alt="logo"></img></h3>
                        <div className="info">
                            <div className="part">
                                <h3>menu</h3>
                                <Link to="/">about</Link>
                                <Link to="/">shop</Link>
                                <Link to="/">lookbook</Link>
                                <Link to="/">stories</Link>
                                <Link to="/">event</Link>
                                <Link to="/">store</Link>
                                <Link to="/">instagram</Link>
                            </div>
                            <div className="part">
                                <h3>contact</h3>
                                <Link to="/">Q&A</Link>
                                <Link to="/">franchise</Link>
                                <Link to="/">faq</Link>
                                <Link to="/">my page</Link>
                                <Link to="/">개인정보처리방침</Link>
                                <Link to="/">이용약관</Link>
                                <Link to="/">SNS 저작권 이용 동의서</Link>
                            </div>
                            <div className="part">
                                <div className="box">
                                    <h3>CUSTOMER</h3>
                                    <p className="bold">온라인 고객센터</p>
                                    <p>1234-1234(주문/반품/교환/배송관련)</p>
                                    <p>평일 09:00 - 17:00</p>
                                    <p>(점심 12:00 - 13:00), 토/일요일·공휴일 휴무</p>
                                </div>
                                <div className="box">
                                    <p><span className="bold">물류센터 : </span>경기도 이천시 마장면 덕이로 22-18 프로로지스 덕평센터 2층</p>
                                </div>
                                <div className="box">
                                    <p><span className="bold">매장 개설 문의</span> asdf@thekary.com</p>
                                    <p><span className="bold">마케팅/제휴 문의</span> asdfsf@thekary.com</p>
                                    <p><span className="bold">CS 문의</span> csasdf@thekary.com</p>
                                </div>
                            </div>
                            <div className="part">
                                <h3>COMPANY</h3>
                                <p><span className="bold">회사명</span>(주)더캐리</p>
                                <p><span className="bold">대표이사</span>이은정,윤중용</p>
                                <p><span className="bold">사업장</span>서울특별시 용산구 한남동 738-36 2F-5F</p>
                                <p><span className="bold">사업자등록번호</span>128-87-03548</p>
                                <p><span className="bold">법인등록번호</span>285011-0256318</p>
                                <p><span className="bold">통신판매신고</span>제 2021-서울용산-12314호 [사업자정보확인]</p>
                                <p><span className="bold">E-MAIL</span>asdfasdf@asdfasdf.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}



export default App;
