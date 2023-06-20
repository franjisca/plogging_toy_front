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
    width: '30vw',
    height: '7vh',
    fontFamily: 'Orbit !important',
    marginBottom: '3px',
  });

const CreateMeeting = () => {
    return <div className="main_contents">
         <div className="create-meeting-area basic_sort">
        <form>
            제목
            <CustomInput fullWidth={true} type="email" placeholder="제목을 입력하세요"/>
            기간<CustomInput fullWidth={true} type="date"/> ~ 
            <CustomInput fullWidth={true} type="date"/>
            인원<CustomInput fullWidth={true} type="text" placeholder="숫자로 4까지 입력할 수 있어요"/>
            상세 설명
            <CustomInput fullWidth={true} multiline rows={4} type="text" sx={{height: '15.5vh'}}placeholder="상세한 설명을 적어주세요"/>

            <BootstrapButton>모임 만들기</BootstrapButton>
            <BootstrapButton>다시 쓰기</BootstrapButton>
        </form>
    </div>
    </div>
}

export default CreateMeeting;