import React, { useEffect, useState } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { green } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const UnitMeeting = () => {

    const accessToken = localStorage.getItem("accessToken");
    const [data, setData] = useState<any>({});
    const location = useLocation();
    const navigate = useNavigate();
    const pathvariable = location.state.pathvariable;
    const [click, setClick] = useState<any>(false);

    useEffect(() => {
        info();
    }, [pathvariable]);
    
    
    const info = async () => {
        axios.get("/meeting/info/"+pathvariable)
        .then(payload => 
            {
                setData(payload.data); 
            }
            )
        .catch(e => toast.error("모임 정보가 존재하지 않습니다. 다시 시도해주세요"));
    }


    const enjoy = async () => {

        if(!localStorage.getItem("userId") || !accessToken) {
            toast.error('로그인 정보가 없습니다. 로그인 후 이용해주세요.');
            navigate("/login-page");
            return;
        }
        await axios
        .get("/meeting/enjoy/" + pathvariable + "/" + localStorage.getItem("userId")
        , {
            headers: {Authorization: `Bearer ${accessToken}`}
        }
        )
       .then(
        payload =>
        {
            if(payload.status === 200) {
                setClick(!click);
                toast.success("모임에 참여 되었습니다.");
            }

        }
       )
       .catch(e => toast.error("이미 참여한 모임입니다."));

        }

        
    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
        <h1 className="color-darkgray">{data.title}</h1>
        <h3 className="color_grey">기간: {data.period}, 장소: {data.location} </h3>
        </div>
    <div className="add-meeting">
        <h4 className="color-darkgray">다른 모임 찾으러 가기</h4>
        <KeyboardReturnIcon 
        onClick= {() => navigate("/meetinglist")}
        sx={{width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}/>
        <h4 className="color-darkgray">참여하기</h4>
        <AddCircleIcon 
            onClick= {enjoy}

        sx={{width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}/>
    </div>
            <div className="info-unit-meeting">
                <div className="people-list h20vh basic_sort">
                    {/* 반복문 자리 */}
                    <div className="people large-size basic_sort full">
                        1
                    </div>
                    <div className={data.two ? "people large-size basic_sort full" : "people large-size basic_sort"}>
                        2
                    </div>
                    <div className={data.three ? "people large-size basic_sort full" : "people large-size basic_sort"}>
                        3 
                    </div>
                    <div className={data.four ? "people large-size basic_sort full" : "people large-size basic_sort"}>
                        4
                    </div>
                     {/* 반복문 자리 */}
                </div>
                <p className="wdt-inherit align-center">{data.maxCount}명 중에 1명이 참여했어요</p>
                <p className="unit-title font16 align-center">
                    상세설명: {data.contents}
                </p>
                </div>
    </div>
</div>
}

export default UnitMeeting;