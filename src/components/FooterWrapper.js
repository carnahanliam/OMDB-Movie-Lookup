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
      <Container
        component="main"
        maxWidth={false}
        sx={{ mt: 8, mb: 2, maxWidth: 1300 }}
      >
        {children}
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#c3c3c3',
        }}
      >
        <Container>
          <Typography variant="body1" align="center">
            Liam Carnahan
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default FooterWrapper
