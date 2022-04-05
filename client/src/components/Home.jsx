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



const Home = props => {
    const [dizzy, setDizzy] = useState([]);

    const stylePic = { 
        width: "450px",
        height: "500px",
        display: "flex"
    };

    return ( 
        <div style={{backgroundColor: "white",   }} >
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  

            <h1> Hope For A Dizzy Life </h1>
            <Link style={{fontSize: "20px", backgroundColor: "white"}} to={'/'}> Sign Up For Our Weekly Newsletter </Link> 
            </div> 

            <h2 style={{textAlign: "left", marginLeft: "100px"}} > 
                Do you or a loved one suffer from Vestibular Migraine? 

                Living with VM is hard but there is hope for people with this  
                <Link to= {{ pathname: "https://www.healthline.com/health/vestibular-migraine" }} target="_blank" > rare condition 
                </Link>. 
            </h2>   
            
            <div  style={{alignItems: "center", border: "", width: "100%", height: "100%"  }}> 

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} >

                <div style={{ fontSize: "40px", color: "black", border: "", width: "500px", height: "450px", backgroundImage: `url(${headache})`  }}   > <Link to= {{ pathname: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/vestibular-migraine" }} target="_blank" > Learn More 
                </Link>.  </div> 

                <div style={{ fontSize: "40px", backgroundImage: `url(${food})`, border: "", width: "500px", height: "450px" }} > <Link to={"/food/"} > Food  </Link> </div  >        

                <div style={{  backgroundImage: `url(${comment})`, border: "", width: "500px", height: "450px", display: "", justifyContent: "flex-end" }} > 
                <div style={{ fontSize: "40px"}} > 
                <Link to={'/dizzylife/comment'}> Share </Link>
                </div>  
                </div> 

                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "15px"}} > 

                <div style={{ fontSize: "40px",backgroundImage: `url(${SuppS})`, border: "", width: "500px", height: "450px" }} > <Link to={'/dizzylife/supplements'}> Supplements </Link> </div>

                <div style={{ backgroundImage: `url(${waterfall})`, border: "", width: "500px", height: "450px" }} >
                    <div style={{fontSize: "40px", backgroundColor: "", color: "white"}} > <Link to={'/hope/'} > HOPE </Link> </div>  
                    </div> 
                
                <div style={{ fontSize: "40px",  border: "", width: "500px", height: "450px",  backgroundImage: `url(${docWorld})` }} > <Link to={{ pathname: "https://vestibular.org/article/diagnosis-treatment/new-patient-toolkit/step-3-find-a-vestibular-specialist/" }} target="_blank" > Find a Specialist </Link> </div> 

                </div> 
            
            </div>
        </div>
    )
}

export default Home;