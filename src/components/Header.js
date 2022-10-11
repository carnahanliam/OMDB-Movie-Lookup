import { Typography, Box } from '@mui/material'

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: '25px 0',
      }}
    >
      <Typography variant="h1">Search Movies</Typography>
      <Typography variant="subtitle1">
        Look up movies using the OMDB API
      </Typography>
    </Box>
  )
}
export default Header
