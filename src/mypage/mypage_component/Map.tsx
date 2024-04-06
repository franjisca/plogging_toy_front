import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { toast } from "react-toastify";


const MyMap = (passed:any) => {

    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");

    const [markerData, setMarkerData] = useState<any>('');
    

    useEffect(() => {

        const getData = async () => {
          await axios.get("/my-page/my-marker/"+userId, {headers : {Authorization: `Bearer ${accessToken}`}}
          ).then(
            payload => {
              if(payload.data) {
                setMarkerData(payload.data);
                console.log(payload.data);
              }

            }
          ).catch(e => toast.error("플로깅 마커 목록을 불러올 수 없습니다. 다시 시도해주세요."));
        }
        getData();
    }, []);

    return passed.passed && 
    <>
    <div className="my-map overflow-xy basic_sort">
    <Map
      center={{ lat: 37.5642135, lng: 127.0016985 }}
      style={{ width: "100%", height: "100%" }}
      level={10}
    >

      {markerData.map((loc:any , idx:any) => 
      (
        <MapMarker position={{ lat:  loc.latd, lng: loc.lotd }}>
        </MapMarker>
      )
      )}

      
    </Map>
    </div>
    </>
}

export default MyMap;