import React from 'react'
import { Button } from '@mui/material'

export const Squares = ({ value, onClickSquare }) => {
  return (
    <Button
      color="secondary"
      disableElevation
      disableFocusRipple
      variant="outlined"
      sx={{ minWidth: '3.5rem', height: '3.5rem', fontSize: '1.5rem' }}
      onClick={onClickSquare}
    >
      {value}
    </Button>
  )
}
