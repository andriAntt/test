'use client';

import React  from 'react';
import {  MenuItem, Select, InputLabel, FormControl, Stack,  Box, Button } from '@mui/material';



interface FilterBarProps {
  rooms: number | null
  type: string | null
  setRooms: (v: number | null) => void
  setType: (v: string | null) => void
}

const FilterBar: React.FC<FilterBarProps> = ({rooms, type, setRooms, setType}) => {

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
       <Box
      sx={{
        display: 'flex',
        gap: 2, 
        alignItems: 'center', 
        padding: '10px', 
      }}
    >
      {/* Поле вибору типу нерухомості */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Typ</InputLabel>
        <Select value={type} onChange={(v) => setType(v.target.value)} label="Typ">
          <MenuItem value="Apartment">Apartment</MenuItem>
          <MenuItem value="Villa">Villa</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Penthouse">Penthouse</MenuItem>
        </Select>
      </FormControl>

      {/* Поле вибору кількості кімнат */}
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel>Zimmer</InputLabel>
        <Select value={rooms} onChange={(v) => setRooms(Number(v.target.value) as number)} label="Zimmer">
          <MenuItem value={1}>1 Zimmer</MenuItem>
          <MenuItem value={2}>2 Zimmer</MenuItem>
          <MenuItem value={3}>3 Zimmer</MenuItem>
          <MenuItem value={4}>4 Zimmer</MenuItem>
          <MenuItem value={5}>5 Zimmer</MenuItem>
          <MenuItem value={6}>6+ Zimmer</MenuItem>
        </Select>
      </FormControl>

      <Button onClick={() => {
        setRooms(null)
        setType(null)
      }}>Reset</Button>
    </Box>
    </Stack>
  );
};

export default FilterBar;