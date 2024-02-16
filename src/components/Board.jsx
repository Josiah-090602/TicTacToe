import React, { useState } from 'react'
import { Box, Card } from '@mui/material'
import { Squares } from './Squares'

export const Board = ({ handleClick, squares }) => {
  return (
    <>
      <Card
        sx={{
          width: 'fit-content',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Squares value={squares[0]} onClickSquare={() => handleClick(0)} />
          <Squares value={squares[1]} onClickSquare={() => handleClick(1)} />
          <Squares value={squares[2]} onClickSquare={() => handleClick(2)} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Squares value={squares[3]} onClickSquare={() => handleClick(3)} />
          <Squares value={squares[4]} onClickSquare={() => handleClick(4)} />
          <Squares value={squares[5]} onClickSquare={() => handleClick(5)} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Squares value={squares[6]} onClickSquare={() => handleClick(6)} />
          <Squares value={squares[7]} onClickSquare={() => handleClick(7)} />
          <Squares value={squares[8]} onClickSquare={() => handleClick(8)} />
        </Box>
      </Card>
    </>
  )
}
