'use client'
import { Header } from "./components/common/Header";
import Footer from "./components/common/Footer";
import useProperty from "@/domains/property/useProperty";
import PageContent from "./components/common/PageContent";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1)
  const [rooms, setRooms] = useState<null | number>(null)
  const [houseType, setHouseType] = useState<null | string>(null)

  const {data, totalPages} = useProperty({rooms: rooms || undefined, houseType: houseType || undefined}, page, 9)

  const handleSetRooms = (rooms: number | null) => {
    setPage(1)

    setRooms(rooms)
  }

  const handleHouseType = (type: string | null) => {
    setPage(1)

    setHouseType(type)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
    <Header rooms={rooms} setRooms={handleSetRooms} type={houseType} setType={handleHouseType}/>
    {!!data.length ? (<PageContent page={page} setPage={setPage} data={data} totalPages={totalPages} />) : 
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1'
    }}>No Data</div>}
    <Footer />
    </div>
  );
}
