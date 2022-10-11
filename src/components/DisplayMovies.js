import { Pagination, Box } from '@mui/material'
import MovieCard from './MovieCard'

const DisplayMovies = ({ movies, page, handlePageChange }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {movies.map((m) => (
          <MovieCard key={m.imdbID} movieInfo={m} buttonLabel="Read more" />
        ))}
      </Box>
      <Pagination
        count={page.total}
        page={page.current}
        onChange={handlePageChange}
        sx={{
          '.MuiPagination-ul': {
            justifyContent: 'center',
          },
          pt: '25px',
          pb: '50px',
        }}
      />
    </>
  )
}

export default DisplayMovies
