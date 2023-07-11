/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BeforeList = (passed:any) => {

    const userId = localStorage.getItem("userId");
    const [before, setBefore] = useState<any>([]);


    useEffect(() => {
        getMyBeforeList();
    }, []);

    const getMyBeforeList  = async () => {
        await axios.get("/my-page/before-list/" + userId)
        .then(payload => {
            if(payload.data) {
                console.log('before_list', payload.data);
                setBefore(payload.data);
            }
        })
        .catch(
            e => toast.error("데이터를 불러올 수 없습니다. 다시 시도해주세요.")
        );
    }
    
    return passed.passed && 
    <>
    <div className="before-list dis-grid over template3">

        {
            before?.map(
                (unit:any, idx: any) =>
                <>
                <div className="unit-meeting" key={idx}>
                    <p className="unit-title font20 align-center">
                        {unit.title}
                    </p>
                    <p className="wdt-inherit align-center">기간: {unit.period}</p>
                    <div className="complete basic_sort">
                        <div className="completed basic_sort">
                                COMPLETE
                        </div>
                    </div>
                </div>
                </>
            )
        }
               
            </div>
            </>
}

export default BeforeList;