import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementing, decrementing } from '../Features/CounterSlice';

import { Typography, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box } from '@mui/system';

export const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


  return (
    <Box>
        <Typography variant="h3" component="h1">Counter</Typography>
        <Stack direction="row">
            <Button variant="contained" onClick={()=>dispatch(incrementing())}><AddCircleIcon /></Button>
            <Typography variant='h4'>{count}</Typography>
            <Button variant= "outlined" onClick={()=>dispatch(decrementing())}><RemoveCircleIcon/></Button>
        </Stack >
    </Box>
  )
}
