import React from 'react'
import './Headd.css'
import logo from '../assets/logor.PNG'

const a = ()=>{
   const hamburger = document.querySelector(".hamburger");  
    hamburger.onClick = function(){
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}
}

const Headd = () => {

    // a();
  return (
    <>
        <main>

        <header className="head ">
        <div className="resume2hire-text my-5">
           
            <img src={logo} alt="" srcSet="" className="w-25 " />
        </div>

        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>


        <nav className="nav-bar">
            <ul className="list-unstyled ">
                <li className="">
                    <a href="" className="active text-decoration-none">Home</a>
                </li>
                <li>
                    <a href="" className="text-decoration-none">Resume Builder</a>
                </li>
                <li>
                    <a href="" className="text-decoration-none">Screening</a>
                </li>
                <li>
                    <a href="" className="text-decoration-none">Hiring</a>
                </li>
                <li>
                    <a href="" className="text-decoration-none">About Us</a>
                </li>
            </ul>
        </nav>
    </header>

        </main>
    </>
  )
}

export default Headd