import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram ,faFacebookF , faTwitter , faPinterestP } from "@fortawesome/free-brands-svg-icons";

function SnsBox(){

    let [snsInfo] = useState(
        [
            {format : 'jpg', content : '베베드피노의 여름 시즌오프⚡ 찜콩 했던 썸머 컬렉션💧 #점퍼 #셋업 #원피스 #라운지웨어 등 최대 20% 할인된 가격으로 만나요💗 #SEASONOFF #시즌오프 #BEBEDEPINO #베베드피노' },
            {format : 'mp4', content : 'BEBEDEPINO SUMMER SEASON OFF💦 ✨UP TO 20%✨ ⠀ 오늘부터 시즌오프 시작💛 여름 셋업, 아우터, 원피스 등 다양한 아이템을 만나보세요⚡️ ⠀ 품절되기 전에 베피런🏃🏻‍♂️🏃🏻‍♀️ ⠀ #지금_필요한건_스피드 #BEBEDEPINO #베베드피노 #SEASONOFF #시즌오프' },
            {format : 'mp4', content : 'BEBEDEPINO 🌷5월의 #BPICK 🌷 상콤한 나들이 룩으로 만난 5월의 BPICK 친구들🐥🌳🌿 깜찍이 베피베베들 보면서 엄마미소 제대로 발사😊 5월의 BPICK 발표합니다👏 @___sy201130 @cherry_tomato21 @chacha_rown @byeol._.dong @jj_gy_jj @jungbaesung @ry_doha @to.hwany @yj_lucky @raon.102.gram 🎉10분 모두 축하드립니다🎉 ✨ ‘🅱PICK’ 참여 방법 ✨ ☝. 베베드피노의 제품을 입은 우리 아이 예쁜 모습을 피드에 올린다📷 ✌' },
            {format : 'jpg', content : 'BEBEDEPINO X MINJUKIM 러블리 그 자체인 콜라보 원피스 퍼프소매, 세일러 카라, 튜튜스커트까지 하나하나 디테일 요소에 더 반하는 23 썸머 콜라보 드레스 라인업👗 야외 활동이 많아지는 시즌 나들이룩으로 추천합니다🌼🌻🌸 포토제닉한 베피친구들 기대할게요😉 #원피스_인기_말모말모 #니삭스랑_매치하면_예쁨MAX #베베드피노X민주킴 #베베드피노 #BEBEDEPINO' },
            {format : 'mp4', content : 'BEBEDEPINO X MINJUKIM 러블리 그 자체인 콜라보 원피스 퍼프소매, 세일러 카라, 튜튜스커트까지 하나하나 디테일 요소에 더 반하는 23 썸머 콜라보 드레스 라인업👗 야외 활동이 많아지는 시즌 나들이룩으로 추천합니다🌼🌻🌸 포토제닉한 베피친구들 기대할게요😉 #원피스_인기_말모말모 #니삭스랑_매치하면_예쁨MAX #베베드피노X민주킴 #베베드피노 #BEBEDEPINO' },
            {format : 'jpg', content : 'BEBEDEPINO X MINJUKIM 러블리 그 자체인 콜라보 원피스 퍼프소매, 세일러 카라, 튜튜스커트까지 하나하나 디테일 요소에 더 반하는 23 썸머 콜라보 드레스 라인업👗 야외 활동이 많아지는 시즌 나들이룩으로 추천합니다🌼🌻🌸 포토제닉한 베피친구들 기대할게요😉 #원피스_인기_말모말모 #니삭스랑_매치하면_예쁨MAX #베베드피노X민주킴 #베베드피노 #BEBEDEPINO' }
        ]
        )
    


    return(
        <section className='sns content'>
            <div className='inner'>
                <h2 className='title'><FontAwesomeIcon icon={faInstagram} size='2x' /></h2>
                <p className='txt'>FOLLOW US ON INSTAGRAM  @ BEBEDEPINO</p>
                <div className="wrap">
                {
                snsInfo.map((e , i)=>{
                    let imgSrc = '/image/sns_'+ (i + 1) +'.'+ e.format
                    return(
                        <div className='box' key={i}>
                        <div className='pic'><Link to="/">
                            {
                                (e.format === 'jpg')
                                ?<img src={imgSrc} alt='sns'></img>
                                :<video src= {imgSrc}>video</video>
                            }
                            </Link></div> 
                        <div className='info'>
                            <p>{e.content}</p>
                            <div className='snsIcon'>
                                <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link to="/"><FontAwesomeIcon icon={faPinterestP} /></Link>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
                </div>
                <button type="button">see more</button>
            </div>
        </section>
    )
}

export default SnsBox;