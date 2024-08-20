import { styled } from '@mui/material/styles'
import { Pagination, Button } from '@mui/material'

export const RedButton = styled(Button)({
  backgroundColor: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkred',
  },
})

export const RedPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: 'red',
    '&.Mui-selected': {
      backgroundColor: 'red',
      color: 'white',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
    },
  },
  '& .MuiPaginationItem-ellipsis': {
    color: 'red',
  },
})
