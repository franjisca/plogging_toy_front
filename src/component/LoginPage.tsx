import { Button, TextField, styled } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
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

    const [id, setId] = useState<any>('');
    const [pwd, setPwd] = useState<any>('');
    const navigate = useNavigate();

    const login = () => {
        if(!id || !pwd) {
            toast.error('아이디나 비밀번호를 입력해주세요');
            return;
        }
        axios.post("/login", {userId: id, password: pwd},).then(
            payload => {
                const {accessToken} = payload.data;
                localStorage.setItem("userId", payload.data.userId); 
                axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

                console.log(payload.headers);
                navigate("/")
            }
        ).catch(
            e =>{
                toast.error("로그인 할 수 없습니다. 다시 시도해주세요");
                return;
            }
        );
    }


    const googleLogin = () => {
        console.log("실행되었다");
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    }
    

    return <div className="main_contents login">
       
        <div className="login_area root">
            <form action="/login" className="info-form">
            <div className="ihr basic_sort h10vh">
            <img src="/image/free-icon-input-4680657.png" alt="login_icon"/>
            </div>
                <CustomInput 
                fullWidth={true} 
                type="text" 
                placeholder="아이디" 
                value={id}
                onChange={(e: any) => setId(e.target.value)}
                helperText={"아이디를 입력하세요"}/>
                <CustomInput 
                fullWidth={true} 
                type="password" 
                placeholder="비밀번호" 
                value={pwd}
                onChange={(e: any) => setPwd(e.target.value)}
                helperText={"비밀번호를 입력하세요"}/>
                <BootstrapButton className="button-37" onClick={login}>로그인</BootstrapButton>
                {/* <BootstrapButton onClick={googleLogin}>구글로 로그인 하기</BootstrapButton> */}
                <span className="center">아직 회원이 아니신가요? 
                    <span className="highlight up" onClick={() => navigate("/signup")}>회원가입하기</span>
                    </span>
            </form>
        </div>
        </div>
}

export default Login;