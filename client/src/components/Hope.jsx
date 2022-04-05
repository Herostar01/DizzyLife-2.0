import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'; 
import background from "../imgs/Resized_VM_pic.jpg";
import docWorld from"../imgs/docWorldSmall.jpg";
import SuppS from "../imgs/suppS.jpg"
import waterfall from "../imgs/waterfallS.jpg" 
import headache from "../imgs/headacheS.jpg"
import food from "../imgs/foodS.jpg"
import comment from "../imgs/commentS.jpg"
import hopeimg from "../imgs/maui.jpg"
import hopemlkj from "../imgs/hopemlkj.jpg"
import hopesunset from "../imgs/hopesunset.jpg"
import courage from "../imgs/courage.jpg"
import feel from "../imgs/feel.jpg"


const Hope = props => {
    const [dizzy, setDizzy] = useState([]);

    const stylePic = { 
        width: "500px",
        height: "500px",
        display: "flex"
    };

    return ( 
        <div style={{backgroundColor: "green", backgroundImage: `url(${hopeimg})`  }} >
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1> Hope For A Dizzy Life </h1>
            <Link style={{fontSize: "20px", backgroundColor: "white"}} to={'/'}> Return Home </Link> 
            </div> 

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                Do you or a loved one suffer from Vestibular Migraine? 

                Living with VM is hard but there is hope for people with this  
                <Link to= {{ pathname: "https://www.healthline.com/health/vestibular-migraine" }} target="_blank" > rare condition 
                </Link>. 
            </h2>   
            
            <div  style={{alignItems: "center", border: "", width: "100%", height: "100%"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ fontSize: "40px", color: "black", border: "", width: "500px", height: "500px", backgroundImage: `url(${hopemlkj})`  }}   >  </div> 

                

                <div style={{  backgroundImage: `url(${hopesunset})`, border: "", width: "500px", height: "500px", display: "", justifyContent: "flex-end" }} > 
                <div style={{ fontSize: "40px"}} > 
                
                </div>  
                </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} > 

                <div style={{ fontSize: "40px",backgroundImage: `url(${courage})`, border: "", width: "500px", height: "500px" }} > </div>

                <div style={{ backgroundImage: `url(${feel})`, border: "", width: "500px", height: "500px" }} >
                    <div style={{fontSize: "40px", backgroundColor: "", color: "white"}} > </div>  
                    </div> 
                
                

                </div> 
            
            </div>
        </div>
    )
}

export default Hope;