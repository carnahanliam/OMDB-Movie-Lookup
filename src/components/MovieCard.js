import { Box, Chip, Typography, Button } from '@mui/material'

const MovieCard = ({ movieInfo, buttonLabel }) => {
  return (
    <Box
      sx={{
        width: 230,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        m: '20px 10px',
        borderRadius: '6px',
        boxShadow: '2px 4px 12px rgb(0 0 0 / 8%)',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#fff',
      }}
    >
      <Box
        component="img"
        src={movieInfo.Poster}
        alt="movie poster"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src =
            'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
        }}
        sx={{ height: 315, width: 1 }}
      />
      <Chip
        label={movieInfo.Year}
        size="small"
        sx={{
          borderRadius: '4px',
          background: 'rgba(11,26,42,0.9)',
          fontSize: '14px',
          position: 'absolute',
          bottom: '44px',
          left: '10px',
          color: '#fff',
          borderBottom: '#0000000f',
        }}
      />
      <Typography
        sx={{
          pl: '10px',
          pb: '5px',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
        variant="subtitle1"
      >
        {movieInfo.Title}
      </Typography>
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          left: '56px',
          bottom: '160px',
          textTransform: 'none',
          backgroundColor: '#1976d2d1',
          fontWeight: 600,
        }}
      >
        {buttonLabel}
      </Button>
    </Box>
  )
}

export default MovieCard
