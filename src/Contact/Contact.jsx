import React, { useState } from 'react';
import "./contact.css";

export default function Contact() {
    const [arr1, setArr1] = useState(false)
    const [arr2, setArr2] = useState(false)
    const [arr3, setArr3] = useState(false)
    const [leftContainer1, setLeftContainer1] = useState(false)
    const active1 = () => {
        setArr1(!arr1)
        setLeftContainer1(!leftContainer1)
    }
    const [leftContainer2, setLeftContainer2] = useState(false)
    const active2 = () => {
        setArr2(!arr2)
        setLeftContainer2(!leftContainer2)
    }
    const [leftContainer3, setLeftContainer3] = useState(false)
    const active3 = () => {
        setArr3(!arr3)
        setLeftContainer3(!leftContainer3)
    }
    return (
        <div className="welcome">
            <div className="contact">

                <div className="main1 center1">
                    <div className="box1 center1">
                            <img src="./Img/profile__1a.png" alt="" />
                            <div>
                                <p className="user_name1">Vivek Kumar</p>
                                <p className="skill1">Full Stack Developer</p>
                            </div>
                            <div className={`arr_container1 center1 ${arr1 ? "active_arr" : ""}`} onClick={active1}>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        <div className={`left_container1 ${leftContainer1 ? "active" : "off"}`} >
                            <p style={{color:"#011627", fontSize:"24px"}}>Skills</p>
                            <div className="skills1">
                                <div>Html</div>
                                <div>Css</div>
                                <div>Python</div>
                                <div>MERN</div>
                                <div>Java</div>
                                <div>C/C++</div>
                                <div>JS</div>
                            </div>
                            <div className="icons1">
                                {/* <i className="fab fa-instagram"></i> */}
                                {/* <a href="whatsapp:contact=015555555555@s.whatsapp.com&message="I'd like to chat with you" target="_blank" className="fab fa-whatsapp"></a> */}
                                {/* <i class="fab fa-whatsapp"></i> */}
                                {/* <i className="fab fa-github"></i> */}
                                {/* <i class="far fa-envelope"></i> */}
                                <a href="https://api.whatsapp.com/send?phone=7088980706" target="_blank"  rel="noreferrer"> <i className="fab fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/vivekumar_01/" target="_blank"  rel="noreferrer"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/vivek-kumar-1b65a2201/" target="_blank"  rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="mailto: vivekumar2003bsr@gmail.com ? Subject = Query Related to Quick aacess app" target="_blank"  rel="noreferrer"><i className="far fa-envelope"></i></a>
                                <a href="https://github.com/Vivekumar01/" target="_blank"  rel="noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                            <div className="cancel1 center1" onClick={active1}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main2 center2">
                    <div className="box2 center2">
                        <img src="./Img/profile_2a.jpg" alt="" />
                        <div>
                            <p className="user_name2">Aadarsh Sonkar</p>
                            <p className="skill2">Back-End Developer</p>
                        </div>
                        <div className={`arr_container2 center2 ${arr2 ? "active_arr" : ""}`} onClick={active2}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className={`left_container2 ${leftContainer2 ? "active" : "off"}`}>
                            <p style={{color:"#011627", fontSize:"24px"}}>Skills</p>
                            <div className="skills2">
                                <div>Html</div>
                                <div>Css</div>
                                <div>Python</div>
                                <div>Java</div>
                                <div>C/C++</div>
                                <div>JS</div>
                            </div>
                            <div className="icons2">
                                <a href="https://api.whatsapp.com/send?phone=7269951250" target="_blank"  rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/aadarsh__._/" target="_blank"  rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/aadarsh-sonkar-8b61ba203" target="_blank"  rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="mailto: aadarshk15@gmail.com ? Subject = Query Related to Quick aacess app" target="_blank"  rel="noreferrer"><i className="far fa-envelope"></i></a>
                                <a href="https://github.com/Vivekumar01/" target="_blank"  rel="noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                            <div className="cancel2 center2" onClick={active2}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main3 center3">
                    <div className="box3 center3">
                        <img src="./Img/Profile_3.jpeg" alt="" />
                        <div className="Text">
                            <p className="user_name3">Priyanshu Sisodiya</p>
                            <p className="skill3">Front-End Developer</p>
                        </div>
                        <div className={`arr_container3 center3 ${arr3 ? "active_arr" : ""}`} onClick={active3}>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        <div className={`left_container3 ${leftContainer3 ? "active" : "off"}`}>
                            <p style={{color:"#011627", fontSize:"24px"}}>Skills</p>
                            <div className="skills3">
                                <div>Html</div>
                                <div>Css</div>
                                <div>Python</div>
                                <div>Java</div>
                                <div>C/C++</div>
                                <div>JS</div>
                            </div>
                            <div className="icons3">
                                <a href="https://api.whatsapp.com/send?phone=9548975281" target="_blank"  rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                                <a href="https://www.instagram.com/priyanshu.sisodiya.42/" target="_blank"  rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/priyanshu-sisodiya-9605a0201" target="_blank"  rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                                <a href="mailto: priyanshusisodiya7088@gmail.com ? Subject = Query Related to Quick aacess app" target="_blank"  rel="noreferrer"><i className="far fa-envelope"></i></a>
                                <a href="https://github.com/Vivekumar01/" target="_blank"  rel="noreferrer"><i className="fab fa-github"></i></a>
                            </div>
                            <div className="cancel3 center3" onClick={active3}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
