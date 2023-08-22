import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

import 'swiper/css';
import 'swiper/css/pagination';

function NewBest(){
    let [items] = useState(
        [
            {name : '머스타드티핑삭스_BP32AC335',category : 'new', price : 12000},
            {name : '스칼렛티핑삭스_BP32AC334',category : 'new', price : 12000},
            {name : '블루티핑삭스_BP32AC336',category : 'new', price : 12000},
            {name : '로즈라팡베이비블라우스_BP32BL130',category : 'new', price : 49000},
            {name : '올오버로즈라팡베이비배기팬츠_BP32PL131',category : 'new', price: 43000},
            {name : '카나드베이비세일러칼라티셔츠_BP32TC116',category : 'new', price : 43000},
            {name : '카나드베이비반바지_BP32PH117',category : 'new', price : 33000},
            {name : '사라베이비세일러칼라티셔츠_BP32TC115',category : 'new', price : 43000},
            {name : '뽐므라운지웨어세트_BP32OS315',category : 'best', price : 59000},
            {name : '바나나베이비저지팬츠_BP32PD125',category : 'best', price : 31200 },
            {name : '올오버페이즐리썸머원피스_BP32OP424',category : 'best', price : 59000},
            {name : '래빗가든반팔티셔츠_BP32TR724',category : 'best', price : 48000},
            {name : '바나나오버핏점프수트_BP32OV390',category : 'best', price : 59000},
            {name : '플라워퍼프우븐원피스_BP32OP706',category : 'best', price :  88000},
            {name : '올오버래빗레이어드튜튜원피스_BP32OP707',category : 'best', price : 108000},
            {name : '빠담빠담러플원피스_BP32OP432',category : 'best', price : 69000},
        ]
    )
    let [showMenu,setShowMenu] = useState('new');

        return(
            <section className='newAndBest content'>
            <div className='inner'>
                <h2 className='title'><img src='./image/newandbest_title.png' alt='new and best'></img></h2>
                <div className="menu">
                    <button onMouseEnter={()=>{setShowMenu('new')}}>new</button>
                    <button onMouseEnter={()=>{setShowMenu('best')}}>best</button>
                </div>
                    <div className='box new'>
                        {
                        items.map((e, i)=>{
                            
                            return(
                                (showMenu === e.category)
                                ?<BestNewItem key={i} e={e}></BestNewItem>
                                :null
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

   
function BestNewItem (props){
    let e = props.e
    let imgSrc = '/image/'+ e.name +'.jpg'
    let price = '₩'+addComma(e.price)
    return(
        <div className='item'>
            <div className='pic'><Link to="/"><img src={imgSrc}alt='new'></img></Link></div>
            <div className="info">
                <div className="icon">
                    <Link to="/"><FontAwesomeIcon icon={faHeart} /></Link>
                    <Link to="/"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </div>
                <h4 className="itemName">{e.name}</h4>
                <p className="itemPrice">{price}</p>
            </div>
        </div>
    )
}

export default NewBest;