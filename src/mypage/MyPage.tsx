import React, { useEffect, useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from "@emotion/styled";
import CircleIcon from '@mui/icons-material/Circle';
import MyChatList from "./mypage_component/MyChatList";
import MyPhotoList from "./mypage_component/MyPhotoList";
import MyMap from "./mypage_component/Map";
import BeforeList from "./mypage_component/BeforeList";
import { Button, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { toast } from "react-toastify";

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

    const userId = localStorage.getItem("userId");
    const [username, setUsername] = useState<any>('')
    
    const [modal, setModal] = useState<any>(false);
    const [isChatList, setIsChatList] = useState<any>(true);
    const [isPhotoList, setIsPhotoList] = useState<any>(false);
    const [isMap, setIsMap] = useState<any>(false);
    const [isBeforeList, setIsBeforeList] = useState<any>(false);
    
    const [nickname, setNickname] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [pwdCheck, setPwdCheck] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [phone, setPhone] = useState<any>('');
    const [address, setAddresss] = useState<any>('');

    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    
    useEffect(() => {
        getMyData();
    }, []);
    
    const getMyData = async () => {
        await axios.get("/my-page/my-info/" + userId)
        .then(
            payload => {

                if(payload.data) {
                    setUsername(payload.data.username);
                    setNickname(payload.data.nickname);
                    setPassword(payload.data.password);
                    setEmail(payload.data.email);
                    setPhone(payload.data.phone);
                    setAddresss(payload.data.address);
                }
            }
        )
        .catch(e => toast.error("정보를 불러올 수 없습니다. 다시 시도해주세요."));
    }

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

    const infochange = async () => {
        if(password.length <  8 || !passwordReg.test(password)){
            //setPwdHelp("비밀번호를 다시 입력해주세요.");
            return;
        }

        if(password !== pwdCheck) {
            setPwdCheck("비밀번호가 일치하지 않습니다.");
        }

        if(!emailReg.test(email)) {
            toast.error("이메일을 다시 입력해주세요.");
        }
    }
    
    return <div className="main_contents">
        <div className="myprofile-area basic_sort ">
            <div className="my-info">
                <div className="basic_sort">
                <img className="lv-size" alt="my-level" src="/image/free-icon-seeds-3598154.png"/>
                </div>
                <div className="basic_sort">
                <span>Lv.01 {userId} </span>
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
            <div className="modal mypage-modal">
            <div className="close-area">
                <CloseIcon sx={{cursor: 'pointer'}}  onClick={() =>setModal(!modal)} />
            </div>
            <form className="info-form">
            아이디<CustomInput fullWidth={true} type="text" value={userId} disabled/>
            이름<CustomInput fullWidth={true} type="text" value={username} disabled/>
            
            닉네임<CustomInput fullWidth={true} type="text" placeholder="닉네임 변경하기"
            value={nickname } onChange={e => setNickname(e.target.value)}/>
            비밀번호<CustomInput fullWidth={true} type="password" placeholder="특수문자 포함 8자 이상"
            value={password} onChange={e => setPassword(e.target.value)}/>
            비밀번호 확인<CustomInput fullWidth={true} type="password" placeholder="특수문자 포함 8자 이상" helperText={"사용할 수 없는 비밀번호입니다."}
            value={pwdCheck} onChange={e => setPwdCheck(e.target.value)}/>
            이메일<CustomInput fullWidth={true} type="email" placeholder="이메일"
            value={email} onChange={e => setEmail(e.target.value)}
            />
            전화번호<CustomInput fullWidth={true} type="text" placeholder="'-' 제외 숫자만 입력"
             value={phone} onChange={e => setPhone(e.target.value)}
            />
            주소<CustomInput fullWidth={true} type="text" placeholder="주소를 입력하세요"
             value={address} onChange={e => setAddresss(e.target.value)}
            />
            <BootstrapButton onClick={infochange}>정보수정</BootstrapButton>
        </form>
            </div>
        </div>
            </>
        }

    
    </div>
}

export default MyPage;