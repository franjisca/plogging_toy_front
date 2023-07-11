/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useCallback, useEffect, useRef, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green, red } from "@mui/material/colors";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { METHODS } from "http";
import { upload } from "@testing-library/user-event/dist/upload";

const CustomIcon = styled(FavoriteIcon)({
    position: 'absolute',
    top: '18vh',
    left: '9vw',
    width: '2vw',
    height: '4vh',
    color: '#F5382E',
    cursor: 'pointer',
    '&: hover': {
        transform: 'scale(1.2)',
        transitionDuration: '0.1s',
    } 
});


const UploadInput = styled(TextField)({

    '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root' : {
        fontFamily: 'Orbit !important',
      }
});

const PhotoList = () => {

    const [open, setOpen] = useState<any>(false);
    const [data, setData] = useState<any>([]);
    const [uploadFile, setUploadFile] = useState<any>('');
    const [userId, setUserId] = useState<any>('');


    useEffect(() =>{
        setUserId(localStorage.getItem("userId"));
    }, []);


    const getData = async () => {
        axios.get("http://localhost:8080/photo/list")
        .then( payload => {
            if(payload.data){ 
                console.log(payload.data);

                setData(payload.data);
            }
        })
        .catch(e => toast.error("데이터를 불러올 수  없습니다."));
    }

    useEffect(() => {
        getData();
    }, [open]);

    const likePhoto = async (req: any) => {
        
        await axios.get("http://localhost:8080/photo/like/"  + req)
        .then(
            payload => {
                if(payload.status === 200) {
                    toast.success("응원이 전달되었습니다❤️");
                }
            }
        )
        .catch(e => toast.error("응원을 전달할 수 없습니다. 다시 시도해주세요"));
        
    }
    const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        
        if(e.target.files){
          const uploadFile = e.target.files[0]
          console.log(uploadFile)
          setUploadFile(uploadFile);
        }
      }


    const uploadImage = async () => {
        if(!uploadFile) toast.error("선택된 파일이 없습니다. 이미지를 업로드해주세요");

        const formData = new FormData();

        formData.append("file", uploadFile);


        await axios({
            method: 'post',
            url: '/photo/upload/' + userId,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(payload => {

            if(payload.status === 200) {
                toast.success("사진이 업로드 되었습니다.");
                setOpen(!open);
            }
        }
            )
        .catch( e => {
            toast.error("업로드 할 수 없습니다. 다시 시도해주세요");
            console.log("사진 업로드 에러: " + e);
    });
    }



    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
            <h1 className="color-darkgray">오늘 플로깅에 참여한 분들의 인증샷이에요</h1>
            <h3 className="color_grey">다른 사용자들의 줍깅을 응원해주세요, 무한으로 응원할 수도 있어요</h3>
        </div>
        <div className="add-meeting">
            <h4 className="color-darkgray">인증샷 올리기</h4>
            <AddCircleIcon sx={{ width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}}
                onClick = {() => setOpen(!open)}
            />
        </div>
        <div className="info-unit-meeting h50vh dis-grid over">
                {data?.map(
                    (unit: any, idx: any) => (
                <div className="photo basic_sort" key={idx}>
                <img className="photo-size" src={"/upload_image/" + unit.storedFileName} alt="image"/>
                <CustomIcon onClick={() => likePhoto(unit.id)}/>
                </div>
                    )
                )}
            
        </div>
    </div>
    {
        open && 
        <>
        <div className="modal-back">
        <div className="modal">
        <div className="close-area">
            <CloseIcon sx={{cursor: 'pointer'}}  onClick={() => setOpen(false)} />
        </div>
        <div className="upload-area basic_sort">
            <UploadInput type='file' name="upload_image" onChange={onChangeImg}/>
        </div>
        <div className="close-area">
            <AddCircleIcon
            onClick = {uploadImage}
            sx={{ width: '2vw', height: '4vh', cursor: 'pointer', color: green[500]}} />
        </div>
        </div>
    </div>
        </>
    
    }

</div>

}

export default PhotoList;