import React, { useEffect, useState } from "react";
import '../App.css'
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const MainPage = () => {

    useEffect(() => {
        axios.get("/people-count")
        .then(payload => {
            setData(payload.data.peopleCount)
        }
        )
        .catch(e => toast.error("서버와 통신이 원활하지 않습니다."));
    }, []);

    const moveGiftPage = () => {
        if(localStorage.getItem('userId')){
            navigate("/gift-page");
        }
    }


    const [data, setData] = useState<any>('');
    const date = new Date();
    const year = date.getFullYear();
    const mon = date.getMonth()+1;
    const day = date.getDate();
    const navigate = useNavigate();

    
    return <div className="main_contents">
        <img className="move" src="/image/free-icon-mother-earth-day-4287570.png" alt="main_image" onClick={moveGiftPage}/>
        <div className="main-text">
        안녕하세요, 오늘은 {year}년 {mon}월 {day}일<br/>
        총 {data ? data : 0}명의 지구방위대 분들이<br/>
        대략 {data ? data * 2 : 0}kg만큼의 쓰레기로부터<br/>
        지구를 지켰어요
        </div>
    </div>
}

export default MainPage;
