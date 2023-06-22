/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Chip, TextField, Typography } from "@mui/material";


// eslint-disable-next-line react-hooks/rules-of-hooks
// const [dpNone, setDpNone] = useState<boolean>(false);
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
    
    return passed.passed && 
    <>
    <div className="my-photo-list dis-grid over">
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <Customdelete />
                <LikeCount>25<CustomIcon/></LikeCount>
                </div>
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <Customdelete />
                </div>
               
    </div>
    </>
}

export default MyPhotoList;