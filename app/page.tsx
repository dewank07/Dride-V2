"use client"
import Booking from "@/components/Booking/Booking";
import MapBoxMap from "@/components/Map/MapBoxMap";
import { DestinationCoordinatesContext } from "@/context/DestinationCoordinateContext";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import { SourceCoordinatesContext } from "@/context/SourceCoordinateContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { WalletAddressContext } from "@/context/WalletAddressContext";
import { useEffect, useState } from "react";

export default function Home() {

  const [walletAddress, setWalletAddress] = useState<any>();

  const [userLocation, setUserLocation] = useState<any>();

  const [sourceCoordinates, setSourceCoordinates] = useState<any>();
  const [destinationCoordinates, setDestinationCoordinates] = useState< any>();

  const [directionData, setDirectionData] = useState<any>();

  


  
  

  useEffect(()=>{
    getUserLocation()
  },[])

  const getUserLocation = () =>{
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos)
      setUserLocation(
        
          {
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
          }
        
      )
    })
  }


  return (
    <>
    <WalletAddressContext.Provider value={{walletAddress, setWalletAddress}}>
    <UserLocationContext.Provider value={{userLocation, setUserLocation}}>
      <SourceCoordinatesContext.Provider value={{sourceCoordinates, setSourceCoordinates}}>
      <DestinationCoordinatesContext.Provider value={{destinationCoordinates,setDestinationCoordinates}}>
        <DirectionDataContext.Provider value={{directionData,setDirectionData}}>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div>
        <Booking/>
      </div>
      <div className="col-span-2 order-first md:order-last w-full">
        <MapBoxMap/>
      </div>
      
    </div>
    </DirectionDataContext.Provider>
    </DestinationCoordinatesContext.Provider>
    </SourceCoordinatesContext.Provider>
    </UserLocationContext.Provider>
    </WalletAddressContext.Provider>
    </>
  );
}
