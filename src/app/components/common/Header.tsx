import ResponsiveAppBar from '../ui/AppBar';
import FilterBar from '../ui/FilterBar';

interface HeaderProps {
  rooms: number | null
  type: string | null
  setRooms: (value: number | null) => void
  setType: (value: string | null) => void
}

export const Header = ({rooms, type, setRooms, setType}: HeaderProps) => {
  return (
    <>
      <ResponsiveAppBar />
      <FilterBar rooms={rooms} type={type} setRooms={setRooms} setType={setType}/>
    </>
  )
}