import React, { useEffect, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const MeetingList = () => {

    const [data, setData] = useState<any>([]);
    const [click, setCilick] = useState<any>('');


    useEffect((
    ) => {
        axios.get("/meeting/list")
        .then(
            payload => {
                setData(payload.data);
            }
        )
        .catch(e => toast.error("데이터를 불러올 수 없습니다. 잠시 후 다시 시도해주세요."));
    }, []);


    const navigate = useNavigate();

    const unitInfo = (pathvariable: number) => {
        navigate("/unit-meeting-info", {state : {pathvariable}});
    } 

    const count = (unit: any) => {
        if(unit.two && !unit.three) {
            return 2;
        }
        else if(unit.three) {
            return 3;
        }
        else if(unit.four) {
            return 4;
        }

        return 1;
    }

    const goCreate = () => {

        if(!localStorage.getItem("userId")) {
            toast.error("로그인 정보가 없습니다. 로그인부터 해주세요");
            navigate("/login-page");
            return;
        }

        navigate("/createmeeting");
    }



    return <div className="main_contents">
        <div className="meeting-area">
            <div className="fix-text-area">
            <h1 className="color-darkgray">지금 참여할 수 있는 모임이에요</h1>
            <h3 className="color_grey">모임에 참여해서 더욱 즐거운 줍깅을 즐겨보세요</h3>
            </div>
        <div className="add-meeting">
            <h3 className="color-darkgray">Create Meeting</h3>
            <AddCircleIcon onClick={goCreate}
            sx={{width: '3vw', height: '6vh', cursor: 'pointer', color: green[500]}}/>
        </div>
        <div className="info-unit-meeting h50vh">
            <div className="meeting-list dis-grid over template3">
                {data?.map( (unit:any , index: any) => (
                      <div className="unit-meeting" key ={index} id={unit.id} onClick={() => unitInfo(unit.id)}>
                      <p className="unit-title font18 align-center">
                          {unit.title}
                      </p>
                      <div className="people-list basic_sort">
                          <div className="people basic_sort full">
                              1
                          </div>
                          <div className={unit.two ? "people basic_sort full" : "people basic_sort"}>
                              2
                          </div>
                          <div className={unit.three ? "people basic_sort full" : "people basic_sort"}>
                              3
                          </div>
                          <div className={unit.four ? "people basic_sort full" : "people basic_sort"}>
                              4
                          </div>
                      </div>
                      <p className="wdt-inherit align-center">{unit.maxCount}명 중에 {count(unit)}명이 참여했어요</p>
                  </div>
                )
                            
                )}
            </div>
        </div>
        </div>
    </div>
}

export default MeetingList;
