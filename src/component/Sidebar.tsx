import React, { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () =>{

    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    const [id, setId] = useState<any>('');
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("userId")) setId(localStorage.getItem("userId"));
    }, [userId]);   

    useEffect(() => {

        const handleUnload = () => {
            localStorage.removeItem('userId');
            localStorage.removeItem('accessToken');
        }

        window.addEventListener('beforeunload', handleUnload);


        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        }
    }, []);

    const logout = async () => {
        await axios.get("/log-out", {headers : {Authorization: `Bearer ${accessToken}`}})
        .then(
            payload => {
                if(payload.status === 200) {
                    localStorage.removeItem("userId");
                    localStorage.removeItem("accessToken");
                    setId('');
                    toast.success("로그아웃 되었습니다.");
                    navigate("/");
                } else {
                    toast.error("로그아웃 할 수 없습니다. 다시 시도해주세요.");
                    return;
                }
            }
            ).catch();
        }

    const myPageClick = () => {
        if(!localStorage.getItem("userId")) {
            toast.error("로그인 정보가 없습니다. 로그인부터 해주세요");
            navigate("/login-page");
            return;
        }
        navigate('/mypage')

    }


    return <div className="navbar">
        <div className="inner_nav">
        <ToastContainer position="top-center"/>
            <div className="nav"><img src="/logo/logo_50.png" alt="earth_img"/></div>
            <div className="nav up" onClick={() => navigate("/")}>Plogging</div>
        </div>
        <div className="inner_nav">
            <div className="nav up" onClick={() => navigate("/meetinglist")}>함께줍깅</div>
            <div className="nav up" onClick={() => navigate("/photolist")}>오늘의플로깅</div>
            <div className="nav up" onClick={myPageClick}>마이페이지</div>
            {
                localStorage.getItem("userId") === null ?
                <div className="nav">
                    <button className="button-37" onClick={() => navigate("/login-page")}>로그인</button>
                    </div>
                :
                <div className="nav">
                    <button className="button-37" onClick={logout}>로그아웃</button>
                    </div>
            }
        </div>
            
    </div>
}

export default SideBar;
