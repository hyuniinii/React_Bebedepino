import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-regular-svg-icons";




function MediaBox(){

    let [video] = useState([
        '2023 MINJUKIM COLLABORATION COLLECTION',
        '2023 S/S COLLECTION',
        '2022 F/W COLLECTION',
        '2022 S/S COLLECTION',
        '2021 AUTUMN',
        '2021 SPRING'
    ])

    return(
    <section className="media page">
        <div className="inner">
            <h2 className="title">video</h2>
            <div className="wrap">
                {
                    video.map((e, i)=>{
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
    let i = props.i + 1
    let imgSrc = "/image/media/video_" + i + ".jpg"
    return(
        <div className="box">
            <div className="pic">
                <Link to="/">
                    <img src={imgSrc} alt="video" />
                    <span><FontAwesomeIcon icon={faCirclePlay} /></span>
                </Link>
            </div>
            <p>{props.e}</p>
        </div>
    )
}
export default MediaBox;