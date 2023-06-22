import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const MyMap = (passed:any) => {
    
    return <div className={passed ? "dp-none" : "my-map overflow-xy"}>
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[122, 33]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
}

export default MyMap;