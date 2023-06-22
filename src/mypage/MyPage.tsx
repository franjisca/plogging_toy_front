import React, { useEffect, useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from "@emotion/styled";
import CircleIcon from '@mui/icons-material/Circle';
import MyChatList from "./mypage_component/MyChatList";
import MyPhotoList from "./mypage_component/MyPhotoList";
import MyMap from "./mypage_component/Map";
import BeforeList from "./mypage_component/BeforeList";

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

    const [modal, setModal] = useState<any>(false);
    const [isChatList, setIsChatList] = useState<any>(true);
    const [isPhotoList, setIsPhotoList] = useState<any>(false);
    const [isMap, setIsMap] = useState<any>(false);
    const [isBeforeList, setIsBeforeList] = useState<any>(false);

    const onClickButton = (push: number) => {
        
        if(push === 1) {
            setIsChatList(true);
            setIsPhotoList(false);
            setIsMap(false);
            setIsBeforeList(false);
        }
        
        if(push === 2) {
            setIsChatList(false);
            setIsPhotoList(true);
            setIsMap(false);
            setIsBeforeList(false);
        }
        
        if(push === 3) {
            setIsChatList(false);
            setIsPhotoList(false);
            setIsMap(true);
            setIsBeforeList(false);
        }
        
        if(push === 4) {
            setIsChatList(false);
            setIsPhotoList(false);
            setIsMap(false);
            setIsBeforeList(true);
        }

    }
    
    return <div className="main_contents">
        <div className="myprofile-area basic_sort ">
            <div className="my-info">
                <div className="basic_sort">
                <img className="lv-size" alt="my-level" src="/image/free-icon-seeds-3598154.png"/>
                </div>
                <div className="basic_sort">
                <span>Lv.01 이름 </span>
                <CustomButton fontSize="small" sx={{cursor:'pointer'}}
                    onClick={() => setModal(!modal)}
                />
                </div>
            </div>
            <div className="count-info basic_sort main-text">
                이름님은 이번 달에 xx번 줍깅을 했어요<br/>
                xx번 줍깅을 더 하면 종량제 봉투를 획득할 수 있습니다.<br/>
            </div>
        </div>
        <div className="mypage-area basic_sort">
            <MyChatList passed={isChatList}/>
            <MyPhotoList passed={isPhotoList}/>
            <MyMap passed={isMap}/>
            <BeforeList passed={isBeforeList}/>
            
            <div className="sticky-paging basic_sort">
                <PagingButton fontSize="small" onClick={()=>onClickButton(1)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(2)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(3)}/>
                <PagingButton fontSize="small" onClick={()=>onClickButton(4)}/>
            </div>
        </div>
        
        {/* 모달창 영역 */}
    
    
    </div>
}

export default MyPage;