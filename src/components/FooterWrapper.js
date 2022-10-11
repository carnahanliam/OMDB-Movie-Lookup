import { Box, Typography, Container } from '@mui/material'

const FooterWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {children}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          m: 'auto -25px 0 -25px',
          backgroundColor: '#c3c3c3',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align="center">
            Liam Carnahan
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default FooterWrapper
