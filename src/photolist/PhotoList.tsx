/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect,useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green} from "@mui/material/colors";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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

    const accessToken = localStorage.getItem("accessToken");
    const [open, setOpen] = useState<any>(false);
    const [data, setData] = useState<any>([]);
    const [uploadFile, setUploadFile] = useState<any>('');
    const [userId, setUserId] = useState<any>('');
    const [cautionText, setCautionText] = useState<any>('');
    const navigate = useNavigate();

    useEffect(() =>{
        setUserId(localStorage.getItem("userId"));
    }, []);


    const getData = async () => {
        axios.get('/photo/list')
        .then( payload => {
            if(payload.data){ 
                setData(payload.data);
            }
        })
        .catch(e => toast.error("데이터를 불러올 수  없습니다."));
    }

    useEffect(() => {
        getData();
    }, [open]);

    const likePhoto = async (req: any) => {
        
        await axios.get("/photo/like/"  + req)
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
          setUploadFile(uploadFile);
        }
      }


    const uploadImage = async () => {
        if(!uploadFile) {
            setCautionText("선택된 파일이 없습니다. 이미지를 업로드해주세요");
            return;
        }
        

        if(
            uploadFile.type === "image/png"
            || uploadFile.type === "image/jpg"
            || uploadFile.type === "image/jpeg"
        ) {

            const formData = new FormData();

            formData.append("file", uploadFile);
    
    
            await axios({
                method: 'post',
                url: '/photo/upload/' + userId,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${accessToken}`
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
        });

        } 

        //
        setCautionText("이미지 파일(png, jpg)만 업로드 할 수 있습니다");
        return;
    }

    const closeClick = () => {

        if(!accessToken) {
            toast.error("로그인 정보가 없습니다. 로그인을 완료해주세요.");
            navigate("/login-page");
        }
        setOpen(!open);
        setCautionText("");
    }



    return <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
            <h1 className="color-darkgray">오늘 플로깅에 참여한 분들의 인증샷이에요</h1>
            <h3 className="color_grey">다른 사용자들의 줍깅을 응원해주세요, 무한으로 응원할 수도 있어요</h3>
        </div>
        <div className="add-meeting">
            <h3 className="color-darkgray">인증샷 올리기</h3>
            <AddCircleIcon sx={{ width: '3vw', height: '6vh', cursor: 'pointer', color: green[500]}}
                onClick = {closeClick}
            />
        </div>
        <div className="info-unit-meeting h50vh dis-grid over">
                {data?.map(
                    (unit: any, idx: any) => (
                <div className="photo basic_sort" key={idx}>
                <img className="photo-size" src={'/upload_image/'+unit.storedFileName}alt="image"/>
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
            <div>
            <UploadInput type='file' name="upload_image" onChange={onChangeImg}
            />
                {
                    <p className="caution-text">{cautionText}</p>
                }
            </div>
            
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
