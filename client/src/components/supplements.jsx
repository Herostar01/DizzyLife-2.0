import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/Resized_VM_pic.jpg";
import docWorld from"../imgs/docWorldSmall.jpg";
import SuppS from "../imgs/suppS.jpg"
import waterfall from "../imgs/waterfallS.jpg" 
import headache from "../imgs/headacheS.jpg"
import food from "../imgs/foodS.jpg"
import doctor from "../imgs/doctorS.jpg"
import hopeimg from "../imgs/maui.jpg"
import Supp from "../imgs/supp.jpg"
import mag from "../imgs/magS.jpg"
import RiboS from "../imgs/RiboS.jpg"
import gingerS from "../imgs/gingerS.jpg"
import coq10S from "../imgs/coq10S.jpg"



const Supplements = props => {
    const [dizzy, setDizzy] = useState([]);

    const stylePic = { 
        width: "500px",
        height: "500px",
        display: "flex"
    };

    return ( 
        <div style={{backgroundColor: "black",   }} >
            <div style={{ backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1> Although there are is no cure, these supplements have helped many 
                reduce symptoms. You are encouraged to consult your physician </h1>
            <Link to={'/'}> Return Home </Link> 
            </div> 

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                The nutrients you recieve from your food or supplements have a significant impact on the frequency and severity of your symptoms.
            </h2>   
            
            <div  style={{alignItems: "center", border: "", width: "100%", height: "100%"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                

                <div style={{ fontSize: "40px", backgroundImage: `url(${mag})`, border: "2px solid blue", width: "500px", height: "500px" }} > <Link to={{ pathname: "https://vestibular.org/article/diagnosis-treatment/treatments/complementary-alternative-medicine/supplements/" }} target="_blank" > Magnesium  </Link> </div  >        

                <div style={{  backgroundImage: `url(${RiboS})`, border: "2px solid blue", width: "500px", height: "500px" }} > 
                <div style={{ fontSize: "40px"}} > 
                <Link to= {{ pathname: "https://vestibular.org/article/diagnosis-treatment/treatments/complementary-alternative-medicine/supplements/" }} target="_blank" > Riboflavin 
                </Link>
                </div>  
                </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} > 

                <div style={{ fontSize: "40px",backgroundImage: `url(${coq10S})`, border: "2px solid blue", width: "500px", height: "500px" }} > <Link to={{ pathname: "https://vestibular.org/article/diagnosis-treatment/treatments/complementary-alternative-medicine/supplements/" }} target="_blank"> CoQ10 </Link> </div>

                <div style={{ backgroundImage: `url(${gingerS})`, border: "2px solid blue", width: "500px", height: "500px" }} >
                    <div style={{fontSize: "40px", backgroundColor: "", color: "white"}} > <Link to={{ pathname: "https://vestibular.org/article/diagnosis-treatment/treatments/complementary-alternative-medicine/supplements/" }} target="_blank"> Ginger </Link> </div>  
                    </div> 
                
                

                </div>
            
            </div>
        </div>
    )
}

export default Supplements;