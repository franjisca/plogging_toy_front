import React, { useEffect, useState } from "react";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { green } from "@mui/material/colors";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const CustomChattingText = styled(TextField)({
    height: '5vh',
    fontFamily: 'Orbit !important',
    width: '55vw',
});

const EnterButton = styled(TextField)({
  height: '5vh',
  width: '6.5vw',
  '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root' : {
    backgroundColor: '#13aa52',
    fontFamily: 'Orbit !important',
    color: 'white',
  }
});

const Chatting  = () => {
  
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const location = useLocation();
  const pathvariable = location.state.chatting.chatting_id;
  const chatData = location.state.chatting;

  const [chattingText, setChattingText] = useState<any>('');
  const [textData, setTextData] = useState<any>([]);
  const [user1, setUser1] = useState<any>('');
  const [user2, setUser2] = useState<any>('');
  const [user3, setUser3] = useState<any>('');
  const [user4, setUser4] = useState<any>('');

  useEffect(
    () => {
      findUserId();
      getChattingData();
    }, []);

    const findUserId = async () =>  {
      if(chatData.userNo !== null) {
        axios.get('/find-id/' + chatData.userNo, {headers : {Authorization: `Bearer ${accessToken}`}}).then(payload => {
          setUser1(payload.data.userId);
        }).catch(e => toast.error("채팅방 유저 정보를 불러올 수 없습니다."));
      }
          if(chatData.two !== null) {
        axios.get('/find-id/' + chatData.two, {headers : {Authorization: `Bearer ${accessToken}`}}).then(payload => {
          setUser2(payload.data.userId);
        }).catch(e => toast.error("채팅방 유저 정보를 불러올 수 없습니다."));
      }
          if(chatData.three !== null) {
        axios.get('/find-id/' + chatData.three, {headers : {Authorization: `Bearer ${accessToken}`}}).then(payload => {
          setUser3(payload.data.userId);
        }).catch(e => toast.error("채팅방 유저 정보를 불러올 수 없습니다."));
      }
          if(chatData.four !== null) {
        axios.get('/find-id/' + chatData.four, {headers : {Authorization: `Bearer ${accessToken}`}}).then(payload => {
          setUser4(payload.data.userId);
        }).catch(e => toast.error("채팅방 유저 정보를 불러올 수 없습니다."));
      }
    
    }

    const getChattingData = async () => {
      await axios
            .get('/chatting/chatting-data/' + pathvariable, {headers : {Authorization: `Bearer ${accessToken}`}})
            .then(payload => {
              if(payload.data) {setTextData(payload.data);}
            })
            .catch(
              e => toast.error("채팅 내용을 가져올 수 없습니다. 다시 시도해주세요")
            )
    }

    const sendMessage = async () => {

      if(!chattingText) {
        toast.error("텍스트를 입력해주세요");
        return;
      }

      axios
      .post('/chatting/send/' + pathvariable + '/' + userId, {messages: chattingText}, {headers : {Authorization: `Bearer ${accessToken}`}})
      .then(payload => 
        {
          if(payload.status === 200) {
              setChattingText('');
              getChattingData();
          }
        }
        ) 
      .catch(e => toast.error("데이터를 전송할 수 없습니다. 다시 시도해주세요."));

    }



    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
        <h1 className="color-darkgray">{chatData.title}</h1>
        <h3 className="color_grey">Chat Messages   
      <Chip icon={<FaceIcon />} label={user1 ? user1 : "기다리는 중"} />
      <Chip icon={<FaceIcon />} label={user2 ? user2 : "기다리는 중"} variant="outlined" />
      <Chip icon={<FaceIcon />} label={user3 ? user3 : "기다리는 중"}/>
      <Chip icon={<FaceIcon />} label={user4 ? user4 : "기다리는 중"} variant="outlined" />
        </h3>
        </div>
    <div className="add-meeting h5vh">
        <h4 className="color-darkgray">마이페이지로 돌아가기</h4>
        <KeyboardReturnIcon onClick = {() => navigate("/mypage")} 
        sx={{width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}/>
    </div>
            
            <div className="info-unit-meeting h53vh">

            
              <div className="chatting-contents">
              {
                textData.map(
                  (unit: any, idx: any) => 

                  unit.userId === userId ? 

                  <>
                    <div className="container darker" key={idx+Math.random()}>
                    <img src="/logo/logo_50.png" alt="Avatar" className="right"/>
                    <p>{unit.userId} : {unit.chattingText}</p>
                    <span className="time-left">{unit.createDate}</span>
                  </div>
                  </> 
                  :
                  <>
                    <div className="container" key={idx+Math.random()}>
                    <img src="/logo/logo_50.png" alt="Avatar" />
                    <p>Hello. How are you today?</p>
                    <span className="time-right">11:00</span>
                  </div>
                  </>
                )
              }
                  
              </div>
              <div className="chatting-input basic_sort">
                <CustomChattingText type="text" autoFocus fullWidth
                value={chattingText} placeholder="채팅 내용을 입력하세요"
                onChange={e => setChattingText(e.target.value)}
                />                
                <EnterButton type="button" value="enter" 
                onClick={sendMessage}
                />
                </div>
            </div>
    </div>
</div>
}

export default Chatting;