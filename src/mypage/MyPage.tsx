import React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import styled from "@emotion/styled";



const CustomButton = styled(BorderColorIcon)({
    cursor:'pointer',
    marginLeft: '0.5vw',
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
        <div className="mypage-area">
            <div className="sticky-paging">
                
            </div>
        </div>
    </div>
}

export default MyPage;