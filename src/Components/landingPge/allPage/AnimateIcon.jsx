import React from 'react'
import './Headd.css'
// import computerIcon from '../assets/computerIcon.gif'

const AnimateIcon = () => {
  return (
    <>
        <section>
            <div className="iconCard container my-5">
                <div className="rowsIconCard">
                    <div >
                        {/* <lord-icon
                            src="https://cdn.lordicon.com/qhgmphtg.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#43762d"
                            // style="width:150px;height:200px">
                            >
                        </lord-icon> */}
                        {/* <img src={computerIcon} alt="" srcset="" /> */}
                        <p>Online Resume Builder</p>
                    </div>
                    <div >
                        <lord-icon
                            src="https://cdn.lordicon.com/kvsszuvz.json"
                            trigger="loop"
                            // style="width:150px;height:200px">
                            >
                        </lord-icon>
                        <p>Resume in 5 minutes</p>
                    </div>     
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/etwtznjn.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#43762d"
                            // style="width:150px;height:200px">
                            >
                        </lord-icon>
                        <p>ATS Friendly Resume</p>
                    </div>         
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/puvaffet.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#43762d"
                            // style="width:150px;height:200px">
                            >
                        </lord-icon>
                        <p>Many tempelates</p>
                    </div>  
                    <div>
                        <lord-icon
                            src="https://cdn.lordicon.com/uqpazftn.json"
                            trigger="boomerang"
                            colors="primary:#121331,secondary:#43762d"
                            // style="width:150px;height:200px">
                            >
                        </lord-icon>
                        <p>Expert Tip And Example</p>
                    </div>           
                </div>
            </div>
        </section>
    </>
  )
}

export default AnimateIcon