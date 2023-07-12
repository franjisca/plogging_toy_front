import styled from "@emotion/styled";
import { Button, useStepContext } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



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
    marginLeft: '1px',
    fontFamily:
        'Orbit',
    '&:hover': {
        backgroundColor: '#13aa52',
        boxShadow: 'rgba(0, 0, 0, .15) 0 3px 9px 0',
    },
  });

const MyChatList = (passed: any) => {
    const userId = localStorage.getItem("userId");
    const [chatList, setChatList] = useState<any>([]);

    useEffect(() => {
        getData();
    }, []);
    

    const getData = async() => {

        await axios.get("/my-page/meeting-list/" + userId)
        .then(
            payload => {
                setChatList(payload.data);
            }
        )
        .catch(e => toast.error("데이터를 가지고 올 수 없습니다. 다시 시도해주세요."));
    }

    const navigate = useNavigate();

    const goToChatting = async (chatting: any) => {
        navigate("/chatting", {state: {chatting}});
    }

    const outMeeting = async (meeting_id: any) => {
        
        await axios.delete("/my-page/out/" + meeting_id + "/" + userId)
        .then(
            payload => 
            {
                if(payload.status === 200) toast.success("모임에서 나왔습니다.");
                getData();
            }
        ).catch(
            e => toast.error("해당 요청을 실행할 수 없습니다. 다시 시도해주세요.")
        );
        
    }


    return passed.passed &&  
    <>
    <div className="my-chat-list dis-grid over template3">
        {chatList?.map(
            (unit:any, idx:any) => <>
              <div className="unit-meeting" key={idx}>
      <p className="unit-title font20 align-center">
            {unit.title}
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton onClick={() => goToChatting(unit)}>채팅방</BootstrapButton>                                           
          <BootstrapButton onClick={() => outMeeting(unit.meeting_id)}>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: {unit.period}</p>
  </div>
            </>
        )}
  
</div></>;
}

export default MyChatList;