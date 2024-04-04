import * as React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";


const MyMap = (passed:any) => {
    
    return passed.passed && 
    <>
    <div className="my-map overflow-xy basic_sort">
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
      </MapMarker>
    </Map>
    </div>
    </>
}

export default MyMap;