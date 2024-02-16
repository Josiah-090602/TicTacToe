import React from 'react'
import { ListItem, Box, Card, Button } from '@mui/material'

export const RenderHistory = ({ data }) => {
  const styles = {
    spanStyles: {
      height: '2rem',
      width: '2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '3px',
      background: 'white',
      color: 'black',
    },
  }
  return (
    <>
      <ListItem>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: '8rem',
            height: '8rem',
            p: 1,
            padding: '10px',
          }}
        >
          <Box sx={{ gap: '5px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={styles.spanStyles}>
                <p>{data[0]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[1]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[2]}</p>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={styles.spanStyles}>
                <p>{data[3]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[4]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[5]}</p>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <span style={styles.spanStyles}>
                <p>{data[6]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[7]}</p>
              </span>
              <span style={styles.spanStyles}>
                <p>{data[8]}</p>
              </span>
            </div>
          </Box>
        </Button>
      </ListItem>
    </>
  )
}
