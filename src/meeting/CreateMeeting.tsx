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
    width: '30vw',
    height: '7vh',
    fontFamily: 'Orbit !important',
    marginBottom: '2px',
  });

const postCss = {
    width: '38vw',
    height: '69vh',
}

const CreateMeeting = () => {
    
    const accessToken = localStorage.getItem("accessToken");

    const [title, setTitle] = useState<any>('');
    const [period1, setPeriod1] = useState<any>('');
    const [period2, setPeriod2] = useState<any>('');
    const [location, setLocation] = useState<any>('');
    const [maxCount, setMaxCount] = useState<any>('');
    const [contents, setContents] = useState<any>('');
    const [modalOpen, setModalOpen] = useState<any>(false);
    const navigate = useNavigate();

    const resetText = () => {
        setTitle('');
        setPeriod1('');
        setPeriod2 ('');
        setLocation('');
        setMaxCount('');
        setContents('');
    }

    const create = () => {

        if(!title || !period1 || !period2 || !location || !maxCount || !contents) {
            toast.error("모든 정보를 입력해주세요");
            return;
        }
        
        if(maxCount > 4) {
            toast.error("4까지 입력할 수 있습니다.");
            return;
        }

        axios.post("/meeting/create", 
        {userId: localStorage.getItem("userId"), 
        title, 
        period: period1 + " ~ " + period2,
        location,
        maxCount,
        contents,
    
        }, {
            headers: {Authorization: `Bearer ${accessToken}`}
        })
        .then(
            payload => {
                if(payload.status === 200) {
                    toast.success("모임이 등록되었습니다.");
                    navigate("/meetinglist");
                }
            }
        ).catch(e => toast.error(e));
        

    }

    const closeClick = () => {
        setModalOpen(!modalOpen); 
    }

    return <div className="main_contents">
         <div className="create-meeting-area basic_sort">
        <form className="create-form">
            제목
            <CustomInput 
            fullWidth={true} type="email" placeholder="제목을 입력하세요"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            기간
            <CustomInput 
            fullWidth={true} type="date"
            onChange={e => setPeriod1(e.target.value)}
            /> ~ 
            <CustomInput fullWidth={true} type="date"
            onChange={e => setPeriod2(e.target.value)}
            />
            인원<CustomInput 
            fullWidth={true} type="text" placeholder="숫자로 4까지 입력할 수 있어요"
            value={maxCount}
            onChange={e => setMaxCount(e.target.value)}
            />
            위치
            <CustomInput
            fullWidth={true} type="text" placeholder="간략한 위치를 작성해주세요"
            value={location}
            onChange={e => setLocation(e.target.value)}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon onClick={() => setModalOpen(!modalOpen)} sx={{cursor:"pointer"}}/>
                  </InputAdornment>
                ),
              }} 
            />
            상세 설명
            <CustomInput 
            fullWidth={true} multiline rows={4} type="text" sx={{height: '15.5vh'}} placeholder="상세한 설명을 적어주세요"
            value={contents}
            onChange={e => setContents(e.target.value)}
            />
            <BootstrapButton onClick={create}>모임 만들기</BootstrapButton>
            <BootstrapButton onClick={resetText}>다시 쓰기</BootstrapButton>
        </form>
    </div>

    {/* modal창 영역 */}

    {
            modalOpen && 
            <>
            <div className="modal-back">
                <div className="modal">
                    <div className="close-area">
                        <CloseIcon sx={{cursor: 'pointer'}}  onClick={closeClick} />
                    </div>
                    <div className="basic_sort">
                        <DaumPostcode
                        style={postCss}
                        onClose={() =>setModalOpen(!modalOpen)}
                        onComplete={e => setLocation(e.address)}
                        ></DaumPostcode>
                    </div>

                </div>
            </div>
            </>
        }


    </div>
}

export default CreateMeeting;