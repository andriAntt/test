import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropertyCard from '../ui/PropertyCard';
import { Property } from '@/domains/property/types';


interface PageContentProps {
  data: Property[]; 
  totalPages: number;
  page: number;
  setPage: (page: number) => void;
}

const PageContent: React.FC<PageContentProps> = ({ data, totalPages, page, setPage }) => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Контейнер для карток нерухомості */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
        {data.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>

      {/* Пагінація */}
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={(_, p) => setPage(p)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#333',
                color: '#fff',
              },
            }}
          />
        )}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

export default PageContent;