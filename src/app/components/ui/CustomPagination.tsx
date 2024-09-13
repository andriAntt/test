'use client'; // Add this at the top of the file

import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomPagination = () => {

  return (
    <Pagination
      count={5}
      variant="outlined"
      shape="rounded"
      defaultPage={1}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} // Function handling here
          sx={{
            '&.Mui-selected': {
              backgroundColor: '#333',
              color: '#fff',
            },
          }}
        />
      )}
    />
  );
};

export default CustomPagination;