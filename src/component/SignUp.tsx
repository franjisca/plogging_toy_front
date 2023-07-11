import { Button, TextField, styled } from "@mui/material";
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
    fontFamily: 'Orbit !important',
    marginBottom: '3px',
  });

const SignUp = () => {

    const [userId, setUserId] = useState<any>('');
    const [password, setPassword] = useState<any>('');
    const [pwdCheck, setPwdCheck] = useState<any>('');
    const [username, setUsername] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [phone, setPhone] = useState<any>('');
    const [address, setAddress] = useState<any>('');
    const [pwdHelp, setPwdHelp] = useState<any>('');

    
    const navigate  = useNavigate();
    

    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const signupClick = () => {
        if(!userId || !password || !pwdCheck || !username || !address) {
            toast.error("이메일과 전화번호를 제외 모두 필수 입력값입니다.");
            return;
        }

        if(password.length <  8 || !passwordReg.test(password)){
            setPwdHelp("비밀번호를 다시 입력해주세요.");
            return;
        }

        if(password !== pwdCheck) {
            setPwdCheck("비밀번호가 일치하지 않습니다.");
        }

        if(!emailReg.test(email)) {
            toast.error("이메일을 다시 입력해주세요.");
        }

        // api 요청 후에 이미 있는 아이디일 경우 return 해주기

        toast.success("회원가입 되었습니다. 로그인을 완료해주세요.");
        navigate("/loginpage");
    }

return <div className="main_contents">
    <div className="signup_area baisc_sort">
        <form className="info-form">
            아이디
            <CustomInput 
            fullWidth={true} 
            type="text" 
            placeholder="아이디를입력하세요" 
            value={userId}
            onChange={(e: any) => setUserId(e.target.value)}
            />
            비밀번호
            <CustomInput 
            fullWidth={true} 
            type="password" 
            placeholder="특수문자 포함 8자 이상"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            />
            비밀번호 확인
            <CustomInput 
            fullWidth={true} 
            type="password" 
            placeholder="특수문자 포함 8자 이상" 
            helperText={pwdHelp ? pwdHelp : false}
            value={pwdCheck}
            onChange={(e: any) => setPwdCheck(e.target.value)}
            />
            이름
           <CustomInput 
           fullWidth={true} 
           type="email" 
           placeholder="이메일"
           value={username}
           onChange={(e: any) => setUsername(e.target.value)}
           />
            이메일
            <CustomInput 
            fullWidth={true} 
            type="text" 
            placeholder="이름"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            />
            전화번호
            <CustomInput 
            fullWidth={true} 
            type="text" 
            placeholder="'-' 제외 숫자만 입력"
            value={phone}
            onChange={(e: any) => setPhone(e.target.value)}
            />
            주소
            <CustomInput 
            fullWidth={true} 
            type="text" 
            placeholder="주소를 입력하세요"
            value={address}
            onChange={(e: any) => setAddress(e.target.value)}
            />
            <BootstrapButton onClick={signupClick}>회원가입</BootstrapButton>
        </form>
    </div>

    </div>
}

export default SignUp;