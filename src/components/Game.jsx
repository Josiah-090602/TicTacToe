import React, { useState } from 'react'
import { Board } from './Board'
import { Box, Card, List, Grid } from '@mui/material'
import { GameWinner } from './GameWinner'
import { RenderHistory } from './RenderHistory'

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrent] = useState(0)
  const xNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  //Setting History Data
  const handlePLay = newSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares]
    setHistory(nextHistory)
    setCurrent(nextHistory.length - 1)
    // setNext(!xNext)
  }

  //Square OnClick
  const handleClick = i => {
    if (currentSquares[i] || gameResults(currentSquares)) {
      return
    }
    const newSquares = currentSquares.slice()
    xNext ? (newSquares[i] = 'X') : (newSquares[i] = 'O')
    handlePLay(newSquares)
  }

  //Jump to Prvious Move
  const jumpToPrev = move => {
    setCurrent(move)
    // setNext(move % 2 === 0)
    console.log(currentMove)
  }

  return (
    <>
      <Card
        sx={{
          height: '23rem',
          width: '50rem',
          p: 3,
          display: 'flex',
          gap: 3,
          bgcolor: 'secondary.dark',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            color: 'white',
          }}
        >
          <h2>TIC TAC TOE</h2>
          <Board handleClick={handleClick} squares={currentSquares} />
          <GameWinner next={xNext} gameResults={gameResults(currentSquares)} />
        </Box>
        <Card
          sx={{
            borderRadius: '10px',
            flexGrow: '1',
            padding: ' 0 15px ',
            overflowY: 'scroll',
            scrollbarWidth: 'none',
          }}
        >
          <List>
            <Grid spacing={0} container sx={{}}>
              {history.map((data, index) => (
                <Grid onClick={() => jumpToPrev(index)} item key={index} lg={4}>
                  <RenderHistory data={data} />
                </Grid>
              ))}
            </Grid>
          </List>
        </Card>
      </Card>
    </>
  )
}

const gameResults = squares => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
