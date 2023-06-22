import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";



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

    return passed.passed &&  
    <>
    <div className="my-chat-list dis-grid over template3">
    <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
  <div className="unit-meeting">
      <p className="unit-title font20 align-center">
          광교산 플로깅 같이해요!
      </p>
      <div className="people-list basic_sort">
          <BootstrapButton>채팅방</BootstrapButton>                                           
          <BootstrapButton>모임 나가기</BootstrapButton>                                           
      </div>
      <p className="wdt-inherit align-center">기간: 2023.06 - 2023.08</p>
  </div>
</div></>;
}

export default MyChatList;