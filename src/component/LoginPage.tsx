import { Button, ButtonProps, Input, TextField, styled } from "@mui/material";
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
    fontFamily: 'Orbit !important'
  });

const Login = () => {
    return <div className="main_contents login">
        <div className="login_area basic_sort">
            <form>
                <CustomInput fullWidth={true} type="text" placeholder="아이디" helperText={"아이디를 입력하세요"}/>
                <CustomInput fullWidth={true} type="text" placeholder="비밀번호" helperText={"비밀번호를 입력하세요"}/>
                <BootstrapButton className="button-37">로그인</BootstrapButton>
                <BootstrapButton>구글로 로그인 하기</BootstrapButton>
                <span>아직 회원이 아니신가요? <span>회원가입하기</span></span>
            </form>
        </div>

        </div>
}

export default Login;