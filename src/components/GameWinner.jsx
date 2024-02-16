import React from 'react'
import { Card, Box } from '@mui/material'

export const GameWinner = ({ gameResults, next }) => {
  const boxStyle = {
    position: 'absolute',
    right: '13px',
    bottom: '7px',
    borderRadius: '5px',
    bgcolor: 'secondary.main',
    width: '2.3rem',
    padding: '5px',
    textAlign: 'center',
    color: 'white',
    fontSize: '1rem',
  }
  return (
    <>
      <Card sx={{ flexGrow: '1', p: 1.5, position: 'relative' }}>
        {gameResults ? (
          <span>
            Congratulations
            <Box sx={boxStyle}>
              <strong>{gameResults}</strong>
            </Box>
          </span>
        ) : (
          <span>
            Next Player Move <Box sx={boxStyle}>{next ? 'X' : 'O'}</Box>
          </span>
        )}
      </Card>
    </>
  )
}
