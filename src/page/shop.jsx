import React from "react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Route, Routes ,Link  } from "react-router-dom";

function ShopPage(){

    let [stylist] = useState(
        [
            { category:'baby' , title:'올오버바나나베이비반팔티셔츠_BP32TR122',price:39000},
            { category:'baby' , title:'바나나베이비저지팬츠_BP32PD125',price:39000},
            { category:'baby' , title:'파미에카나드베이비선캡_BP32AH103',price:36000},
            { category:'baby' , title:'파미에카나드베이비블랭킷_BP32AA109',price:59000},
            { category:'boy' , title:'바나나코튼점퍼_BP32JF301',price:79000},
            { category:'boy' , title:'바나나코튼반바지_BP32PH302',price:43000},
            { category:'boy' , title:'올오버푸레인부츠_BP22AS770',price:49000},
            { category:'boy' , title:'머스타드티핑삭스_BP32AC335',price:12000},
            { category:'girl' , title:'사라코튼원피스_BP32OP434',price:69000},
            { category:'girl' , title:'바나나퍼프소매원피스_BP32OP431',price:69000},
            { category:'girl' , title:'빠담빠담라운지원피스_BP32OD460',price:59000},
            { category:'girl' , title:'스칼렛티핑삭스_BP32AC334',price:12000},
        ]
    )
    let [newItem] = useState(
     [
        {category: 'kids', title:'카니슈피케플리츠원피스_BP32OD423', price:59000},
        {category: 'kids', title:'올오버페이즐리썸머원피스_BP32OP424', price:59000},
        {category: 'kids', title:'올오버페이즐리썸머원피스_BP32OP424', price:69000},
        {category: 'kids', title:'바나나오버핏점프수트_BP32OV390', price:59000},
        {category: 'kids', title:'몽키키크롭탑티셔츠_BP32TL410', price:33000},
        {category: 'baby', title:'베들링턴베이비컬러블럭오버롤_BP32OV104', price:59000},
        {category: 'baby', title:'페이즐리베이비바디수트세트_BP32ST102', price:89000},
        {category: 'baby', title:'사라베이비세일러칼라티셔츠_BP32TC115', price:43000},
        {category: 'baby', title:'올오버로즈라팡베이비배기팬츠_BP32PL131', price:43000},
        {category: 'baby', title:'로즈라팡베이비블라우스_BP32BL130', price:49000},
        {category: 'accessory', title:'메쉬수영모자_BP32AH395', price:49000},
        {category: 'accessory', title:'카니슈메쉬수영모자_BP32AH396', price:43000},
        {category: 'accessory', title:'파미에카나드베이비선캡_BP32AH103', price:36000},
        {category: 'accessory', title:'로즈라팡베이비체크버킷햇_BP32AH201', price:49000},
        {category: 'accessory', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
        {category: 'basic', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
        {category: 'basic', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
        {category: 'basic', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
        {category: 'basic', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
        {category: 'basic', title:'체리베이비리본버킷햇_BP32AH202', price:43000},
     ]
    )


    let [tabBtn,setTabBtn] = useState('baby');
    let [number] = useState(1)
    let [newNumber] = useState(1)
    let [newCategory] = useState(['kids','baby','accessory','basic']);

    return(
    <section className="shop page">
            <h2 className="title out">shop</h2>
            <div className="visual"><img src="/image/shop/shop_top.png" alt=""></img></div>
            <div className="wrap">
                <div className="inner">
                    <div className="babyKidsBtn">
                        <button><img src="/image/shop/23summer_shop_baby_2.jpg" alt="shop baby"></img></button>
                        <button><img src="/image/shop/23summer_shop_kids.jpg" alt="shop baby"></img></button>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to='/shopall'>shop all</Link></li>
                            <li><Link to='/newarr'>new arrivers</Link></li>
                            <li><Link to='/newborn'>new born</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/bestitem'>best items</Link></li>
                            <li><Link to='/minjukim'>minjukim</Link></li>
                            <li><Link to='/gift'>gift</Link></li>
                            <li><Link to='/newborn'>newborn</Link></li>
                            <li><Link to='/baby'>baby</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/kids' >kids</Link></li>
                            <li><Link to='/basic' >basic</Link></li>
                        </ul>
                        <ul>
                            <li><Link to='/accssory'>accessory</Link></li>
                            <li><Link to='/sale'>on sale</Link></li>
                        </ul>
                    </div>
                    <Routes>
                        <Route path="/shopall" element={<h3>안녕하세요만나서반가워요</h3>} ></Route>
                        <Route path="/newarr" ></Route>
                        <Route path="/newborn" ></Route>
                        <Route path="/bestitem" ></Route>
                        <Route path="/minjukim" ></Route>
                        <Route path="/gift" ></Route>
                        <Route path="/newborn" ></Route>
                        <Route path="/baby" ></Route>
                        <Route path="/kids" ></Route>
                        <Route path="/basic" ></Route>
                        <Route path="/accssory" ></Route>
                        <Route path="/sale" ></Route>
                    </Routes>
                    <div className="stylistPick sec">
                        <h3>stylist pick's</h3>
                        <div className="tabBtn">
                            <button onMouseOver={()=>{setTabBtn('baby')}}>Baby</button>
                            <button onMouseOver={()=>{setTabBtn('boy')}}>Boy</button>
                            <button onMouseOver={()=>{setTabBtn('girl')}}>Girl</button>
                        </div>
                        <div className="main"><img src="/image/shop/stylistPic_1.jpg" alt=""></img></div>
                        <div className="items">
                            {
                                stylist.map((e, i)=>{
                                    return(
                                        (tabBtn === e.category)
                                        ?<ItemBox key={i} e={e} i={i} number={number} setNumber={number+=1}></ItemBox>
                                        :null
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                 
                    {
                        newCategory.map((e , i)=>{
                            const filteredItems = newItem.filter((item) => item.category === newCategory[i]);
                            newNumber = 1
                            return(
                                <div className="newkids sec line" key={i} >
                                    <h3>new {newCategory[i]}</h3>
                                    <div className="wrap">
                                        {
                                            filteredItems.map((value,index)=>{
                                                return(
                                                    <NewBox key={index} e={value} i={index} newNumber={newNumber}
                                                    setNewNumber={newNumber+=1}/>
                                                )
                                            })
                                        }
                                    </div>
                            </div> 
                            )
                        })
                    }
 


                </div>
            </div>
    </section>
    )
}



function addComma(price) {
    let comma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
     return comma;
   }

function ItemBox(props){
    let e = props.e
    let itemPrice = addComma(e.price)
    let discount = addComma(e.price * 0.8);
    let number = props.number
    let imgSrc = '/image/shop/stylist'+ e.category + '_' + number +'.jpg'
/* 
    console.log(imgSrc) */


    return(
        <div className="itemBox">
            <div className="pic"><img src={imgSrc} alt=""></img></div>
            <div className="info">
                <div className="icon">
                    <button><FontAwesomeIcon icon={faHeart} /></button>
                    <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
                <p className="name">{e.title}</p>
                <p className="price">\{itemPrice}</p>
                <p className="discount">\{discount}</p>
            </div>
        </div>
    )
}


function NewBox(props){
    let e = props.e;
    let itemPrice = addComma(e.price)
    let newNumber = props.newNumber
    let imgSrc = "/image/shop/new" + e.category + "_" + newNumber + ".jpg"
    console.log(imgSrc)
    
    return(
        <div className="newBox">
            <div className="pic"><Link to="/" onClick={(e)=>{e.preventDefault()}}><img src={imgSrc} alt=""></img></Link></div>
            <div className="info">
                <div className="icon">
                    <button><FontAwesomeIcon icon={faHeart} /></button>
                    <button><FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
                <p className="name">{e.title}</p>
                <p className="price">\{itemPrice}</p>
            </div>
        </div>
    )
}


export default ShopPage; 