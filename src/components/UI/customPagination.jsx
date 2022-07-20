import React from 'react';
import Pagination from '@mui/material/Pagination';


export default function BasicPagination({pages}) {
  return (
      <Pagination count={pages} />
  );
}
