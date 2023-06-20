import React from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { green } from "@mui/material/colors";
import { Button, styled } from "@mui/material";


const BootstrapButton = styled(Button)({
    backgroundColor: '#13aa52',
    border: '1px solid #13aa52',
    borderRadius: '4px',
    boxShadow: 'rgba(0, 0, 0, .1) 0 2px 4px 0',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '400',
    outline:'none',
    outlineWidth: '0',
    padding: '10px 25px',
    textAlign: 'center',
    transform: 'translateY(0)',
    transition: 'transform 150ms',
    WebkitBoxShadow: '150ms',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    marginTop: '5px',
    fontFamily:
        'Orbit',
    '&:hover': {
        backgroundColor: '#13aa52',
        boxShadow: 'rgba(0, 0, 0, .15) 0 3px 9px 0',
    },
  });

const UnitMeeting = () => {
    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
        <h1 className="color-darkgray">광교산 플로깅 같이해요!</h1>
        <h3 className="color_grey">기간: 2023년 06월 - 2023년 08월 </h3>
        </div>
    <div className="add-meeting">
        <h3 className="color-darkgray">다른 모임 찾으러 가기</h3><KeyboardReturnIcon sx={{width: '3vw', height: '6vh', cursor: 'pointer', color: green[500]}}/>
    </div>
            <div className="info-unit-meeting">
                <div className="people-list h20vh basic_sort">
                    {/* 반복문 자리 */}
                    <div className="people large-size basic_sort full">
                        1
                    </div>
                    <div className="people large-size basic_sort full">
                        2
                    </div>
                    <div className="people large-size basic_sort full">
                        3 
                    </div>
                    <div className="people large-size basic_sort">
                        4
                    </div>
                     {/* 반복문 자리 */}
                </div>
                <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                <p className="unit-title font16 align-center">
                    상세설명: 일주일에 한 번씩 오후 2시에 모여서 2시간 플로깅을 하고 헤어질 예정입니다. 더 상세한 내용은 참여하셔서 확인해주세요
                </p>
                <div className="btn-area">
                <BootstrapButton className="loct-end">참여하기</BootstrapButton>
                </div>
                </div>
    </div>
</div>
}

export default UnitMeeting;