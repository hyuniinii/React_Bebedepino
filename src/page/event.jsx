import { useState } from "react";
import { Link } from "react-router-dom";

function EventBox(){

    let [eContents] = useState(
       [
        {txt: 'BEBEDEPINO X MINJUKIM SPECIAL GIFT'},
        {txt: 'BEBEDEPINO X MINJUKIM'},
        {txt: 'PICNIC WITH BEBEDEPINO (종료)'},
        {txt: 'READY FOR SUMMER RAIN'},
        {txt: 'NEW BORN ROSE LAPIN SERIES'},
        {txt: '2023 SPRING SPECIAL GIFT (종료)'},
       ]
    )


    return(
    <section className="event page">
        <div className="inner">
            <h2 className="title">event</h2>
            <div className="menu">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="wrap">
                {
                    eContents.map((e , i)=>{
                        let imgSrc = 'image/event/event_'+ (i+1) +'.jpg'
                        return(
                            <div className="box" key={i}>
                                <div className="pic"><Link to="/"><img src={imgSrc} alt="event"></img></Link></div>
                                <p className="info">{e.txt}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
    )
}

export default EventBox;