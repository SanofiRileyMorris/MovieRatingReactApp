import { styled } from '@mui/material/styles'
import { Pagination, Button } from '@mui/material'

export const StyledButton = styled(Button)({
  backgroundColor: '#d32f2f',
  color: 'white',
  '&:hover': {
    backgroundColor: '#b71c1c',
  },
})

export const StyledPagination = styled(Pagination)({
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
