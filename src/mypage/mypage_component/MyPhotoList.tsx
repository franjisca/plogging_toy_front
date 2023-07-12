/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";


// eslint-disable-next-line react-hooks/rules-of-hooks
const CustomIcon = styled(FavoriteIcon)({
    width: '2vw',
    height: '4vh',
    color: '#F5382E',
    cursor: 'pointer',
    '&: hover': {
        transform: 'scale(1.2)',
        transitionDuration: '0.1s',
    } 
});

const Customdelete = styled(DeleteIcon)({
    position: 'absolute',
    top: '2vh',
    left: '9vw',
    width: '2vw',
    height: '4vh',
    color: '#838383',
    cursor: 'pointer',
    '&: hover': {
        transform: 'scale(1.2)',
        transitionDuration: '0.1s',
    } 
});

const LikeCount  = styled(Typography)({
    position: 'absolute',
    top: '18.9vh',
    left: '7vw',
    width: '4vw',
    height: '4vh',
    fontFamily: 'Orbit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const MyPhotoList = (passed: any) => {

    const userId = localStorage.getItem("userId");
    const [photos, setPhotos] = useState<any>([]);

    useEffect( () => {
        getMyPhotoList();
    }, [photos]);
 
    const getMyPhotoList= async() => {
        
        await axios.get('/my-page/my-photos/' + userId)
        .then(payload => {
            if(payload.data) {
                setPhotos(payload.data)
            }
        })
        .catch(e => toast.error("데이터를 불러올 수 없습니다."))
    }

    const deletePhoto = async(id: any) => {
        await axios.delete('/photo/delete/' + id + '?userId=' + userId)
        .then(
            payload => {
                
                if(payload.status === 200) {
                    toast.success("업로드한 사진이 삭제 되었습니다");
                    getMyPhotoList();
                }
            }
        )
        .catch(e => toast.error("요청을 수행할 수 없습니다. 다시 시도해주세요."));
    }
    return passed.passed && 
    <>
            <div className="my-photo-list dis-grid over">
            
            {
                photos?.map(
                    (unit: any, idx: any) =>
                    <div className="photo basic_sort" key={idx}>
                    <img className="photo-size" src={'/upload_image/' + unit.storedFileName} alt="upload-image"/>
                    <Customdelete onClick={() => deletePhoto(unit.id)}/>
                    <LikeCount>{unit.likes}<CustomIcon/></LikeCount>
                    </div>

                )
            }
           
</div>
    </>
    

}

export default MyPhotoList;