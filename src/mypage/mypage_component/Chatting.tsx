import React, { useEffect } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { green } from "@mui/material/colors";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";


const CustomChattingText = styled(TextField)({
    height: '5vh',
    fontFamily: 'Orbit !important',
    width: '55vw',
});

const EnterButton = styled(TextField)({
  height: '5vh',
  cursor: 'pointer',
  width: '6.5vw',
  '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root' : {
    backgroundColor: '#13aa52',
    fontFamily: 'Orbit !important',
  }
});

const Chatting  = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const pathvariable = location.state.chatting.chatting_id;

  useEffect(
    () => {
      console.log('pathvariable', pathvariable);
    }, [pathvariable]);

    const getChattingData = () => {

    }
    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
        <h1 className="color-darkgray">광교산 플로깅 같이해요!</h1>
        <h3 className="color_grey">Chat Messages   
      <Chip icon={<FaceIcon />} label="닉네임" />
      <Chip icon={<FaceIcon />} label="닉네임" variant="outlined" />
      <Chip icon={<FaceIcon />} label="닉네임" />
      <Chip icon={<FaceIcon />} label="닉네임" variant="outlined" />
        </h3>
        </div>
    <div className="add-meeting h5vh">
        <h4 className="color-darkgray">마이페이지로 돌아가기</h4>
        <KeyboardReturnIcon onClick = {() => navigate("/mypage")} 
        sx={{width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}/>
    </div>
            <div className="info-unit-meeting h53vh">
              <div className="chatting-contents">
                    <div className="container">
                    <img src="/logo/logo_50.png" alt="Avatar" />
                    <p>Hello. How are you today?</p>
                    <span className="time-right">11:00</span>
                  </div>
                  
                  <div className="container darker">
                    <img src="/logo/logo_50.png" alt="Avatar" className="right"/>
                    <p>Hey! I'm fine. Thanks for asking!</p>
                    <span className="time-left">11:01</span>
                  </div>
                  
                  <div className="container">
                    <img src="/logo/logo_50.png" alt="Avatar"/>
                    <p>Sweet! So, what do you wanna do today?</p>
                    <span className="time-right">11:02</span>
                  </div>
                  
                  <div className="container darker">
                    <img src="/logo/logo_50.png" alt="Avatar" className="right"/>
                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                    <span className="time-left">11:05</span>
                  </div>

                  <div className="container">
                    <img src="/logo/logo_50.png" alt="Avatar"/>
                    <p>Sweet! So, what do you wanna do today?</p>
                    <span className="time-right">11:02</span>
                  </div>
                                    
                  <div className="container darker">
                    <img src="/logo/logo_50.png" alt="Avatar" className="right"/>
                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                    <span className="time-left">11:05</span>
                  </div>
                </div>
              <div className="chatting-input basic_sort">
                <CustomChattingText type="text" autoFocus fullWidth/>                
                <EnterButton type="button" value="enter" />
                </div>
            </div>
    </div>
</div>
}

export default Chatting;