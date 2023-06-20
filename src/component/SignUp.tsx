import { Button, TextField, styled } from "@mui/material";
import React from "react";

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

  const CustomInput = styled(TextField)({
    fontFamily: 'Orbit !important',
    marginBottom: '3px',
  });

const SignUp = () => {
    return <div className="main_contents">
    <div className="signup_area basic_sort">
        <form>
            아이디<CustomInput fullWidth={true} type="text" placeholder="아이디를입력하세요" helperText={"이미 존재하는 아이디입니다."}/>
            비밀번호<CustomInput fullWidth={true} type="text" placeholder="특수문자 포함 8자 이상"/>
            비밀번호 확인
            <CustomInput fullWidth={true} type="text" placeholder="특수문자 포함 8자 이상" helperText={"사용할 수 없는 비밀번호입니다."}/>
            이메일
            <CustomInput fullWidth={true} type="email" placeholder="이메일"/>
            전화번호
            <CustomInput fullWidth={true} type="text" placeholder="'-' 제외 숫자만 입력"/>
            주소
            <CustomInput fullWidth={true} type="text" placeholder="주소를 입력하세요"/>

            <BootstrapButton>회원가입</BootstrapButton>
        </form>
    </div>

    </div>
}

export default SignUp;