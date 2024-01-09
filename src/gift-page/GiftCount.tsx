import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";



const GiftCount = () => {

    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    const [plasticCount, setPlasticCount] = useState<any>('');
    const [myPlasticCount, setMyPlasticCount] = useState<any>('');


    useEffect(() => {
        totalPlasticBagCount();
        getMyPlasticBagCount();
    }, []);

    
    const totalPlasticBagCount = async () => {
        axios.get("/total-plasticbag-count")
        .then(
            payload => {
                setPlasticCount(payload.data);
            }
        )
        .catch(e => toast.error("종량제 봉투 개수를 가져올 수 없습니다. 다시 시도해주세요."));
    }


    const getMyPlasticBagCount = async () => {
        axios.get("/my-bag-count?userId="+userId, {headers : {Authorization: `Bearer ${accessToken}`}})
        .then(payload => {
            setMyPlasticCount(payload.data);
        })
        .catch(e => toast.error("현재 가지고 있는 종량제 봉투 개수를 가지고 올 수 없습니다. 다시 시도해주세요."));
    }

    const onClickPlasticBag = async () => {

        if(plasticCount <= 0) {
            toast.error("현재 남은 종량제봉투가 없습니다. 내일 다시 시도해주세요!");
            return;
        }

        await axios.get("/get-plasticbag?userId="+userId, {headers : {Authorization: `Bearer ${accessToken}`}})
        .then(payload => {
            if(payload.status === 200) {
                toast.success("종량제 봉투를 얻었습니다.");
                
            }
        })
        .catch(e => toast.error("요청을 제대로 수행할 수 없습니다. 다시 시도해주세요."));

        setPlasticCount(plasticCount-1);
        setMyPlasticCount(myPlasticCount+1);
    }

    const onClickAskPlasticBag = () => {
        toast.warning("아직 실물로 교환할 수 없습니다. 조금만 기다려주세요");
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
                    {myPlasticCount > 10 && <button className="button-37" onClick={onClickAskPlasticBag}>교환하기</button>}
                    </div>
                 </div>
            </div>       
        </div>
}

export default GiftCount;