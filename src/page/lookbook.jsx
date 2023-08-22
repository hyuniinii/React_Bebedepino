import { useState } from "react";




function LookbookBox(){
    let [lookBook] = useState([
        {title: '2023' , collection: 'SUMMER'},
        {title: '2023' , collection: 'SPRING'},
        {title: '2023 F/W' , collection: 'MINJUKIM COLLABORATION'},
        {title: '2023' , collection: 'WINTER'},
        {title: '2022' , collection: 'WINNIE THE POOH'},
        {title: '2022' , collection: 'FALL'},
        {title: '2022' , collection: 'WINNIE THE POOH'},
        {title: '2022' , collection: 'SUMMER'},
        {title: '2022' , collection: 'SPRING'},
        {title: '2021' , collection: 'WINTER'}
    ])

    return(
    <section className="lookBook page">
        <div className="inner">
            <div className="menu">
              <h2 className="title">lookbook</h2>
            </div>
            <div className="wrap">
                {
                    lookBook.map((e , i)=>{
                        return(
                           <Box key={i} i={i} e={e}></Box>
                        )
                    })
                }
            </div>
        </div>
    </section>
    )
}

function Box(props){
    let i = props.i;
    let e = props.e;
    let imgSrc = '/image/Lookbook/lookbook_'+ (i + 1) +'.jpg'
    return(
        <div className="box">
            <div className="pic"><img src={imgSrc} alt='lookbook'></img></div>
            <div className="info">
                <p>season {e.title}</p>
                <p>{e.collection}</p>
            </div>
        </div>
    )
}

export default LookbookBox;
