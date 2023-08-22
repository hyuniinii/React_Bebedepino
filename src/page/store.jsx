import { useState } from "react";

function StoreBox(){
    let [address] = useState(
        [
            {area:'경상' ,name:'진주점',add:'경상남도 진주시 새들말로',phone:'055-746-1235'},
            {area:'서울' ,name:'가로수길점',add:'서울특별시 양천구 목동동로 257 현대백화점 목동점',phone:'02-2630-5674'},
            {area:'전라' ,name:'전주에코시티점',add:'전라북도 전주시 덕진구 송천동 2가 1',phone:'02-551-7672'},
            {area:'경상' ,name:'롯데아울렛 대구율하점',add:'대구광역시 동구 안심로',phone:'055-372-42353'},
            {area:'서울' ,name:'더현대 서울점',add:'서울특별시 영등포구 여의도동 여의대로 108 더현대서울5층',phone:'02-3277-4523'},
            {area:'서울' ,name:'현대시티몰 가든파이브점',add:'서울특별시 송파구 충민로 66 가든파이브라이프',phone:'02-2163-1234'},
            {area:'경기' ,name:'영종하늘도시점',add:'인천 중구 중산동 1882-1 조양타워 125호 ',phone:'032-752-8882'},
            {area:'제주' ,name:'제주점',add:'제주특별자치도 제주시 도련일동 건주로',phone:'064-744-1123'},
            {area:'경기' ,name:'갤러리아백화점 광교점',add:'기도 수원시 영통구 광교중앙로 124 갤러리아백화점',phone:'031-517-8789'},
            {area:'전라' ,name:'나주혁신점',add:'전라남도 나주시 우정로',phone:'062-616-1928'},
            {area:'충청' ,name:'세종점',add:'충청남도 세종특별시 새롬중앙로 67',phone:'031-5172-1128'},
            {area:'경기' ,name:'롯데백화점 인천터미널점',add:'인천광역시 미추홀구 연남로 35 롯데백화점 인천점',phone:'031-960-1234'},
            {area:'제주' ,name:'제주 노형점',add:'제주 특별자치도 제주시 노형동 월랑로',phone:'032-242-1241'},
            {area:'서울' ,name:'롯데백화점 청량리점',add:'서울 동대문구 왕산로 214 롯데백화점 청량리점',phone:'031-5172-1761'},
            {area:'충청' ,name:'오창점',add:'대전 유성구 엑스포로 1 ',phone:'031-517-1214'},
            {area:'전라' ,name:'여수웅천점',add:'전남 여수시 웅천동 1869-1 트리마제벨마레몰',phone:'061-684-0784'},
            {area:'경기' ,name:'평택고덕점',add:'경기도 평택시 고덕국제4길',phone:'031-666-1235'},
            {area:'전라' ,name:'정읍점',add:'전라북도 정읍시 학산로 89-19(상동) ',phone:'061-333-1271'},
            {area:'서울' ,name:'아이파크몰 용산점',add:'서울특별시 용산구 한강로3가 40-999 아이파크몰',phone:'02-2012-4531'},
            {area:'충청' ,name:'현대프리미엄아울렛 대전점',add:'충청북도 충주시 호암수청2로 10',phone:'031-517-1829'},
        ]
    )

    let [area , setArea] = useState('전체');

    return(
    <section className="store page">
        <div className="inner">
            <div className="menu">
                <h2 className="title">store</h2>
                <p className="subTitle">Korea</p>
                <ul>
                    <li><button href="#" onClick={()=>{setArea('전체')}}>전체</button></li>
                    <li><button href="#" onClick={()=>{setArea('서울')}}>서울</button></li>
                    <li><button href="#" onClick={()=>{setArea('경기')}}>경기</button></li>
                    <li><button href="#" onClick={()=>{setArea('충청')}}>충청</button></li>
                    <li><button href="#" onClick={()=>{setArea('경상')}}>경상</button></li>
                    <li><button href="#" onClick={()=>{setArea('전라')}}>전라</button></li>
                    <li><button href="#" onClick={()=>{setArea('제주')}}>제주</button></li>
                </ul>
            </div>
            <div className="topBox">
                 <p className="title">In Korea</p>
                 <p><span>▶</span>매장검색 <input type="text" placeholder="매장명"/><button type="submit">찾기</button></p>
            </div>
            <div className="wrap">
                {
                    address.map((e , i)=>{
                        return(
                                (area === '전체')
                                ?<StoreInfoBox key={i} e={e}></StoreInfoBox>
                                :(area === e.area)
                                ?<StoreInfoBox key={i} e={e}></StoreInfoBox>
                                :null
                             
                          /*   <div className="box">
                                <p className="area">{e.area}</p>
                                <p className="name">{e.name}</p>
                                <p className="add">{e.add}</p>
                                <p className="phone">{e.phone}</p>
                            </div> */
                        )
                    })
                }
                </div>
            </div>
    </section>
    )
}

function StoreInfoBox(props){
    let e= props.e
    return(
        <div className="box">
            <p className="area">{e.area}</p>
            <p className="name">{e.name}</p>
            <p className="add">{e.add}</p>
            <p className="phone">{e.phone}</p>
        </div>
    )
}


export default StoreBox;