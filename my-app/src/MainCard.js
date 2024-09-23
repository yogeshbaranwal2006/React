import React from "react";
import "./index.css";

function MainCard(props){
    console.log(props);
    return(
        <> 
        <div className="MainCard">
            <img src={props.img} alt="image"/>
            <h3>Nature {props.tittle} Image</h3>
        </div>
    </>
    )
}
export default MainCard;