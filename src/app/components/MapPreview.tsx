"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Динамічний імпорт без SSR
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
})

export default function MapPreview({ lat, lng }: { lat: number; lng: number }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return <LeafletMap lat={lat} lng={lng} />
}
