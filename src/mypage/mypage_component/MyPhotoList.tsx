/* eslint-disable react-hooks/rules-of-hooks */
import styled from "@emotion/styled";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from "@mui/material";


// eslint-disable-next-line react-hooks/rules-of-hooks
// const [dpNone, setDpNone] = useState<boolean>(false);
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

const LikedIcon = styled(CustomIcon)({
    color: '#F5766F',
});

const LikeCount  = styled(Typography)({
    position: 'absolute',
    top: '18.5vh',
    left: '7.8vw',
    width: '2vw',
    height: '4vh',
    fontSize: '20px',
    fontFamily: 'Orbit',
});

const MyPhotoList = (passed: any) => {
    
    return passed.passed && 
    <>
    <div className="my-photo-list dis-grid over">
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <Customdelete />
                <LikeCount>25</LikeCount>
                <CustomIcon />
                </div>
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <Customdelete />
                <LikeCount>25</LikeCount>
                <LikedIcon />
                </div>
               
    </div>
    </>
}

export default MyPhotoList;