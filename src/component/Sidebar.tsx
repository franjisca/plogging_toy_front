import React from "react";
import '../App.css';

const SideBar = () =>{
    return <div className="navbar">
        
        <div className="inner_nav">
            <div className="nav"><img src="/logo/logo_50.png"/></div>
            <div className="nav up">Plogging</div>
        </div>
        <div className="inner_nav">
            <div className="nav up">함께줍깅</div>
            <div className="nav up">오늘의플로깅</div>
            <div className="nav up">마이페이지</div>
            <div className="nav"><button className="button-37">로그아웃</button></div>
        </div>
            
    </div>
}

export default SideBar;