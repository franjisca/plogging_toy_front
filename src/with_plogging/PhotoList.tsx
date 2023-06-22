import React from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { green, red } from "@mui/material/colors";
import styled from "@emotion/styled";

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

const LikedIcon = styled(CustomIcon)({
    color: '#F5766F',
});

const PhotoList = () => <div className="main_contents">
    <div className="meeting-area">
        <div className="fix-text-area">
            <h1 className="color-darkgray">오늘 플로깅에 참여한 분들의 인증샷이에요</h1>
            <h3 className="color_grey">다른 사용자들의 줍깅을 응원해주세요</h3>
        </div>
        <div className="add-meeting">
            <h4 className="color-darkgray">인증샷 올리기</h4><AddCircleIcon sx={{ width: '2vw', height: '4vh', cursor: 'pointer', color: green[500] }} />
        </div>
        <div className="info-unit-meeting h50vh dis-grid over">
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <CustomIcon />
                </div>
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <LikedIcon />
                </div>
                <div className="photo basic_sort">
                <img className="photo-size" src="/image/free-icon-mother-earth-day-4287570.png"/>
                <CustomIcon />
                </div>
        </div>
    </div>
</div>

export default PhotoList;