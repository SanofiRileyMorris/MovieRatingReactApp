import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const RedButton = styled(Button)({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
        backgroundColor: 'darkred',
    },
});