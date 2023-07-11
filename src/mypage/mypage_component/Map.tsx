import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const MyMap = (passed:any) => {
    
    return passed.passed && 
    <>
    <div className="my-map overflow-xy basic_sort">

      서비스 준비중입니다.
{/*<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[122, 33]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>*/}
    </div>
    </>
}

export default MyMap;