import React from "react";



const Donate = () => {
    
    const accessToken = localStorage.getItem("accessToken");


    return <div className="main_contents">
            <h1 className="donate-effect" data-shadow='Donate' onClick={() => alert('후원하기를 클릭하였습니다.')}>Donate</h1>
            <span>후원해주신 금액은 플로깅 활동을 하는 모임을 지원하며 사이트 운영을 위해 사용됩니다.</span>
            <span>소중한 후원 감사드립니다, 더 나은 지구를 위해 오늘도 화이팅!</span>
        </div>
}

export default Donate;

