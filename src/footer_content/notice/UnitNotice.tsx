import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { green } from "@mui/material/colors";

const UnitNotice = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const notice =location.state.data;


    useEffect(() => {
        console.log(notice);
    }, []);

    return <div className="main_contents">
                <div className="meeting-area">
                    <div className="fix-text-area">
                    <h1 className="color-darkgray">{notice.title}</h1>
                    </div>
                    
                    <div className="info-unit-meeting h52vh">
                        {notice.contents}
                    </div>
                
                    <div className="add-meeting">
                        <h4 className="color-darkgray">공지사항 페이지로 이동</h4>
                        <KeyboardReturnIcon 
                        onClick= {() => navigate("/notice")}
                        sx={{width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}/>

                    </div>
                </div>
        </div>
}

export default UnitNotice;