import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { LatLngExpression, Icon } from "leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
})

export default function LeafletMap({ lat, lng }: { lat: number; lng: number }) {
  const position: LatLngExpression = [lat, lng]

  return (
    <MapContainer
      center={position}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: 200, width: "100%", borderRadius: 8 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={markerIcon} />
    </MapContainer>
  )
}
