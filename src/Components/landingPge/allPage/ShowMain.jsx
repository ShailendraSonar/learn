import React from 'react'
import './Headd.css'
import $ from "jquery";
import i4 from '../assets/i4.png'
import tesla from '../assets/tesla.webp'
import google from '../assets/google.webp'
import amazon from '../assets/amazon.webp'
import fb from '../assets/fb.webp'
import spotify from '../assets/spotify.webp'


var text = ["Youtube", "Amazon", "Spotify","Uber", "Tesla", "Sony", "Apple", "Intel", "Delloite"];
var counter = 0;
var elem = $("#change");
setInterval(change, 2000);
function change() {
    elem.fadeOut(function(){
        elem.html(text[counter]);
        counter++;
        if(counter >= text.length) { counter = 0; }
        elem.fadeIn();
    });
    
};
$(".top img").css({
    "width" : "18%",
    "border" : "none",
    "padding":"0px 15px"
});
$(".top button").css({
    "margin":"20px 0px",
    "background-color":"#43762d",
    "border":"none"
});
$(".top h1").css({
    "font-size" : "70px"
});
$(".resumeColor").css({
    "color":"#43762d"
});
$(".topBtnP").css({
    "font-size":"20px",
    "line-height":"30px",
    "word-spacing":"5px",
    "padding-left":"60px"
});
$("#change").css({  
    "color":"#9c4242"
});
$(".sec_2").css({
    "background-color":"#acc5a040"
})

const ShowMain = () => {
  return (
    <>
        <div className="sec_2 ">
            <div className="container top py-5 ">
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            <p>
                               <strong> ONLINE RESUME BUILDER</strong>
                            </p>
                            <h1>
                                Enhance <span className="resumeColor">Resume</span>  get people hired at top companies like <br/><span id="change" >Google</span>
                            </h1>
                            <div className="my-5">
                                <img src={tesla} alt="" srcSet="" className="img-thumbnail"/>
                                <img src={google} alt="" srcSet="" className="img-thumbnail"/>
                                <img src={amazon} alt="" srcSet="" className="img-thumbnail"/>
                                <img src={fb} alt="" srcSet="" className="img-thumbnail"/>
                                <img src={spotify} alt="" srcSet="" className="img-thumbnail"/>
                            </div>

                            <div className="row">
                                <button className="col-md-4 btn btn-primary w-25">Build My Resume Now</button>
                                <p className="col-md-8 topBtnP ">
                                    Create a modern resume that will result in interview callbacks. All key things on a single page. Fast & easy-to-use.
                                </p>
                            </div>
                        </div>
                    </div>
                           
                    <div className="col-md-5">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blopTemp">
                            <path fill="#24A148" d="M52.3,-32.5C63.7,-10.4,66,14.5,55.8,32.3C45.6,50,22.8,60.6,-1.1,61.3C-25.1,61.9,-50.2,52.7,-63.4,33.2C-76.6,13.7,-77.9,-16,-65.4,-38.8C-52.8,-61.6,-26.4,-77.4,-3,-75.7C20.4,-73.9,40.9,-54.7,52.3,-32.5Z" transform="translate(100 100)" />
                          </svg>
                        <div className="imgTempResuForGlass">
                            <img src={i4} alt="img" srcSet="" className="tempResu"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        
    </>
  )
}

export default ShowMain