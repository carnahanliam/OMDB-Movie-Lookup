import { useState, useEffect } from 'react'
import { Box, Alert, AlertTitle } from '@mui/material'

const AlertMessage = ({ message }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(true)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, [])

  if (!show) {
    return null
  }

  return (
    <Box sx={{ width: 500, p: '5px 25px 25px', m: '0 auto' }}>
      {message === 'Too many results.' ? (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          {message}
        </Alert>
      ) : (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {message}
        </Alert>
      )}
    </Box>
  )
}

export default AlertMessage
