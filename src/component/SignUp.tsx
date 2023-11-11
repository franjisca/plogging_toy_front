import { Button, InputAdornment, TextField, styled } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import DaumPostcode from 'react-daum-postcode';

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
    const [modalOpen, setModalOpen] = useState<any>(false);
    
    const navigate  = useNavigate();
    
    const postCss = {
        width: '38vw',
        height: '69vh',
    }

    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const signupClick = async () => {
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

        await axios.post("/signup", {
            userId, username, password, email, phone, address
        }).then(
            payload =>{ 
                
                if(payload.status === 200) {
                    toast.success("회원가입 되었습니다. 로그인을 완료해주세요.");
                    navigate("/login-page")
                } else {
                    toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
                }
            } 
        ).catch(e => toast.error(e));
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
           placeholder="이름"
           value={username}
           onChange={(e: any) => setUsername(e.target.value)}
           />
            이메일
            <CustomInput 
            fullWidth={true} 
            type="text" 
            placeholder="이메일"
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
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon onClick={() => setModalOpen(!modalOpen)} sx={{cursor:"pointer"}}/>
                  </InputAdornment>
                ),
              }} 
            />
            <BootstrapButton onClick={signupClick}>회원가입</BootstrapButton>
        </form>
    </div>
  {/* modal창 영역 */}

  {
            modalOpen && 
            <>
            <div className="modal-back">
                <div className="modal">
                    <div className="close-area">
                        <CloseIcon sx={{cursor: 'pointer'}}  onClick={() => setModalOpen(!modalOpen)} />
                    </div>
                    <div className="basic_sort">
                        <DaumPostcode
                        style={postCss}
                        onClose={() =>setModalOpen(!modalOpen)}
                        onComplete={e => setAddress(e.address)}
                        ></DaumPostcode>
                    </div>

                </div>
            </div>
            </>
        }
    </div>
}

export default SignUp;
