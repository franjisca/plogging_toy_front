import React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from "@emotion/styled";
import CircleIcon from '@mui/icons-material/Circle';

const PagingButton = styled(CircleIcon)({
    cursor: 'pointer',
    margin: '0.1vw',
    color: '#E1ECC8',
    '&:hover': {
            color:'#A0C49D',
    },
});

const CustomButton = styled(BorderColorIcon)({
    cursor:'pointer',
    marginLeft: '0.1vw',
});

const MyPage = () => {
    return <div className="main_contents">
        <div className="myprofile-area basic_sort ">
            <div className="my-info">
                <div className="basic_sort">
                <img className="lv-size" alt="my-level" src="/image/free-icon-seeds-3598154.png"/>
                </div>
                <div className="basic_sort">
                <span>Lv.01 이름 </span><CustomButton fontSize="small" sx={{cursor:'pointer'}}/>
                </div>
            </div>
            <div className="count-info basic_sort main-text">
                이름님은 이번 달에 xx번 줍깅을 했어요<br/>
                xx번 줍깅을 더 하면 종량제 봉투를 획득할 수 있습니다.<br/>
            </div>
        </div>
        <div className="mypage-area basic_sort">
            <div className="my-chat-list">
                여기는 채팅리스트
            </div>
            <div className="photo-list dp-none">
                여기는 인증샷리스트
            </div>
            <div className="map">
                여기는 지도 사진
            </div>
            <div className="finish-list">
                여기는 옛날에 참여했던 모임
            </div>
            
            <div className="sticky-paging basic_sort">
                <PagingButton fontSize="small" />
                <PagingButton fontSize="small" />
                <PagingButton fontSize="small" />
                <PagingButton fontSize="small" />
            </div>
        </div>
    </div>
}

export default MyPage;