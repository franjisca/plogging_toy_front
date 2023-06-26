import React, { useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from "@emotion/styled";
import CircleIcon from '@mui/icons-material/Circle';
import MyChatList from "./mypage_component/MyChatList";
import MyPhotoList from "./mypage_component/MyPhotoList";
import MyMap from "./mypage_component/Map";
import BeforeList from "./mypage_component/BeforeList";
import { Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const PagingButton = styled(CircleIcon)({
    cursor: 'pointer',
    margin: '0.1vw',
    color: '#E1ECC8',
    '&:hover': {
            color:'#A0C49D',
    },
});

const CustomButton = styled(BorderColorIcon)({
    cursor:'pointer',
    marginLeft: '0.1vw',
});

const CustomInput = styled(TextField)({
    fontFamily: 'Orbit !important',
    marginBottom: '3px',
  });

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

const MyPage = () => {

    const [modal, setModal] = useState<any>(false);
    const [isChatList, setIsChatList] = useState<any>(true);
    const [isPhotoList, setIsPhotoList] = useState<any>(false);
    const [isMap, setIsMap] = useState<any>(false);
    const [isBeforeList, setIsBeforeList] = useState<any>(false);

    const onClickButton = (push: number) => {
        
        if(push === 1) {
            setIsChatList(true);
            setIsPhotoList(false);
            setIsMap(false);
            setIsBeforeList(false);
        }
        
        if(push === 2) {
            setIsChatList(false);
            setIsPhotoList(true);
            setIsMap(false);
            setIsBeforeList(false);
        }
        
        if(push === 3) {
            setIsChatList(false);
            setIsPhotoList(false);
            setIsMap(true);
            setIsBeforeList(false);
        }
        
        if(push === 4) {
            setIsChatList(false);
            setIsPhotoList(false);
            setIsMap(false);
            setIsBeforeList(true);
        }

    }
    
    return <div className="main_contents">
        <div className="myprofile-area basic_sort ">
            <div className="my-info">
                <div className="basic_sort">
                <img className="lv-size" alt="my-level" src="/image/free-icon-seeds-3598154.png"/>
                </div>
                <div className="basic_sort">
                <span>Lv.01 이름 </span>
                <CustomButton fontSize="small" sx={{cursor:'pointer'}}
                    onClick={() => setModal(!modal)}
                />
                </div>
            </div>
            <div className="count-info basic_sort main-text">
                이름님은 이번 달에 xx번 줍깅을 했어요<br/>
                xx번 줍깅을 더 하면 종량제 봉투를 획득할 수 있습니다.<br/>
            </div>
        </div>
        <div className="mypage-area basic_sort">
            <MyChatList passed={isChatList}/>
            <MyPhotoList passed={isPhotoList}/>
            <MyMap passed={isMap}/>
            <BeforeList passed={isBeforeList}/>
            
            <div className="sticky-paging basic_sort">
                <PagingButton fontSize="small" onClick={()=>onClickButton(1)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(2)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(3)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(4)}/>
            </div>
        </div>
        
        {/* 모달창 영역 */}

        {
            modal && 
            <>
                    <div className="modal-back">
            <div className="modal">
            <div className="close-area">
                <CloseIcon sx={{cursor: 'pointer'}}  onClick={() =>setModal(!modal)} />
            </div>
            <form className="info-form">
            아이디<CustomInput fullWidth={true} type="text" value={"id"}disabled/>
            이름<CustomInput fullWidth={true} type="text" value={"이름"}disabled/>
            닉네임<CustomInput fullWidth={true} type="text" placeholder="닉네임을 변경하기"/>
            비밀번호<CustomInput fullWidth={true} type="text" placeholder="특수문자 포함 8자 이상"/>
            비밀번호 확인<CustomInput fullWidth={true} type="text" placeholder="특수문자 포함 8자 이상" helperText={"사용할 수 없는 비밀번호입니다."}/>
            이메일<CustomInput fullWidth={true} type="email" placeholder="이메일"/>
            전화번호<CustomInput fullWidth={true} type="text" placeholder="'-' 제외 숫자만 입력"/>
            주소<CustomInput fullWidth={true} type="text" placeholder="주소를 입력하세요"/>
            <BootstrapButton>정보수정</BootstrapButton>
        </form>
            </div>
        </div>
            </>
        }

    
    </div>
}

export default MyPage;