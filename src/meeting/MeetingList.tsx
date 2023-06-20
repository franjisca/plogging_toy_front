import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { green } from "@mui/material/colors";

const MeetingList = () => {
    return <div className="main_contents">
        <div className="meeting-area">
            <div className="fix-text-area">
            <h1 className="color-darkgray">지금 참여할 수 있는 모임이에요</h1>
            <h3 className="color_grey">모임에 참여해서 더욱 즐거운 줍깅을 즐겨보세요</h3>
            </div>
        <div className="add-meeting">
            <h3 className="color-darkgray">Create Meeting</h3><AddCircleIcon sx={{width: '3vw', height: '6vh', cursor: 'pointer', color: green[500]}}/>
        </div>
        <div className="meeting-list-area">
            <div className="meeting-list">
                <div className="unit-meeting">
                    <p className="unit-title font20 align-center">
                        광교산 플로깅 같이해요!
                    </p>
                    <div className="people-list basic_sort">
                        {/* 반복문 자리 */}
                        <div className="people basic_sort full">
                            1
                        </div>
                        <div className="people basic_sort full">
                            2
                        </div>
                        <div className="people basic_sort full">
                            3
                        </div>
                        <div className="people basic_sort">
                            4
                        </div>
                         {/* 반복문 자리 */}
                    </div>
                    <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                    </div>
                    <div className="unit-meeting">
                    <p className="unit-title font20 align-center">
                        광교산 플로깅 같이해요!
                    </p>
                    <div className="people-list basic_sort">
                        {/* 반복문 자리 */}
                        <div className="people basic_sort full">
                            1
                        </div>
                        <div className="people basic_sort full">
                            2
                        </div>
                        <div className="people basic_sort full">
                            3
                        </div>
                        <div className="people basic_sort">
                            4
                        </div>
                         {/* 반복문 자리 */}
                    </div>
                    <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                    </div>
                    <div className="unit-meeting">
                    <p className="unit-title20 align-center">
                        광교산 플로깅 같이해요!
                    </p>
                    <div className="people-list basic_sort">
                        {/* 반복문 자리 */}
                        <div className="people basic_sort full">
                            1
                        </div>
                        <div className="people basic_sort full">
                            2
                        </div>
                        <div className="people basic_sort full">
                            3
                        </div>
                        <div className="people basic_sort">
                            4
                        </div>
                         {/* 반복문 자리 */}
                    </div>
                    <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                    </div>
                    <div className="unit-meeting">
                    <p className="unit-title font20 align-center">
                        광교산 플로깅 같이해요!
                    </p>
                    <div className="people-list basic_sort">
                        {/* 반복문 자리 */}
                        <div className="people basic_sort full">
                            1
                        </div>
                        <div className="people basic_sort full">
                            2
                        </div>
                        <div className="people basic_sort full">
                            3
                        </div>
                        <div className="people basic_sort">
                            4
                        </div>
                         {/* 반복문 자리 */}
                    </div>
                    <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                    </div>
                    <div className="unit-meeting">
                    <p className="unit-title font16 align-center">
                        광교산 플로깅 같이해요!
                    </p>
                    <div className="people-list basic_sort">
                        {/* 반복문 자리 */}
                        <div className="people basic_sort full">
                            1
                        </div>
                        <div className="people basic_sort full">
                            2
                        </div>
                        <div className="people basic_sort full">
                            3
                        </div>
                        <div className="people basic_sort">
                            4
                        </div>
                         {/* 반복문 자리 */}
                    </div>
                    <p className="wdt-inherit align-center">4명 중에 3명이 참여했어요</p>
                    </div>
            </div>
        </div>
        </div>
    </div>
}

export default MeetingList;