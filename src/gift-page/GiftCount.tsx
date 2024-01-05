import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";



const GiftCount = () => {

    const [plasticCount, setPlasticCount] = useState<any>(100);
    const [myPlasticCount, setMyPlasticCount] = useState<any>(0);


    useEffect(() => {
        axios.get("/total-plasticbag-count")
        .then(
            payload => {
                setPlasticCount(payload);
            }
        )
        .catch(e => toast.error("종량제 봉투 개수를 가져올 수 없습니다. 다시 시도해주세요."));
    }, []);
    const onClickPlasticBag = () => {

        if(plasticCount <= 0) {
            toast.error("현재 남은 종량제봉투가 없습니다. 내일 다시 시도해주세요!");
            return;
        }

        setPlasticCount(plasticCount-1);
        setMyPlasticCount(myPlasticCount+1);
    }

    return <div className="main_contents">
            <div className="meeting-area">
                <div className="basic_sort h60vh">
                    <img className="plastic_bag_img move" src="/image/trash.png" alt="plastic_bag_img" onClick={onClickPlasticBag}/>
                    <span className="position-absolute">{plasticCount > 0 ? plasticCount : 0}개</span>
                </div>
                    <p className="block_text basic_sort h6vh ">이미지를 클릭하면 봉투를 받을 수 있어요!</p>
                <div className="round-box">
                    <span>지금 내가 가지고 있는 종량제 봉투
                    </span>
                    <div className="basic_sort"><span className="pd-0-2">{myPlasticCount}개</span> 
                    {myPlasticCount > 10 && <button className="button-37">교환하기</button>}
                    </div>
                 </div>
            </div>       
        </div>
}

export default GiftCount;