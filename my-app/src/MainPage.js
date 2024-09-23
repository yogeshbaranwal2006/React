import React from "react";
import MainCard from "./MainCard";
import "./index.css";
import img1 from "./images/m1.jpg"
import img2 from "./images/m2.jpg"
import img3 from "./images/m3.jpg"
import img4 from "./images/m4.jpg"
import img5 from "./images/m5.jpg"
import img6 from "./images/m6.jpg"

function MainPage(){
    return(
        <>
         <h3 className="heading">Card Gallery </h3>
         <div className="cardComp">
         <MainCard tittle="1" img={img1}/>
         <MainCard tittle="2" img={img2}/>
         <MainCard tittle="3" img={img3}/>
         <MainCard tittle="4" img={img4}/>
         <MainCard tittle="5" img={img5}/>
         <MainCard tittle="6" img={img6}/>
         </div>
        </>
    )
}
export default MainPage;