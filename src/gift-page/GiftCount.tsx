import React from "react";



const GiftCount = () => {

    return <div className="main_contents">
            <div className="meeting-area">
                <div className="basic_sort h60vh">
                    <img className="plastic_bag_img move" src="/image/trash.png" alt="plastic_bag_img"/>
                    <span className="position-absolute">100개</span>
                </div>
                    <p className="block_text basic_sort h6vh ">이미지를 클릭하면 봉투를 받을 수 있어요!</p>
                <div className="round-box">
                    <span>지금 내가 가지고 있는 종량제 봉투</span>
                 </div>
            </div>       
        </div>
}

export default GiftCount;