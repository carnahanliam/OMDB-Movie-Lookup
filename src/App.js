import { useEffect, useState } from 'react'
import axios from 'axios'
import { CssBaseline, ThemeProvider } from '@mui/material'
import MUItheme from './theme.js'
import SearchBar from './components/SearchBar'
import DisplayMovies from './components/DisplayMovies'
import AlertMessage from './components/AlertMessage'
import Header from './components/Header'
import FooterWrapper from './components/FooterWrapper'

const App = () => {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState({
    current: 1,
    total: 1,
  })
  const [error, setError] = useState(null)
  const [query, setQuery] = useState({ title: '', year: '' })

  useEffect(() => {
    if (query.title === '') {
      setMovies(null)
    }
    if (query.title !== '') {
      const fetchMovies = async () => {
        try {
          setError(null)
          const movieData = await axios.get(
            `http://www.omdbapi.com/?type=movie&s=${query.title}&y=${query.year}&apikey=${process.env.REACT_APP_API_KEY}&page=${page.current}`
          )

          if (movieData.data.Error) {
            setError(movieData.data.Error)
            setMovies(null)
            return
          }

          // API returns 10 items per page; divide totalResults by 10 (round up) to get total number of pages
          const numPages = Math.ceil(movieData.data.totalResults / 10)
          if (page.total !== numPages) {
            setPage({
              ...page,
              total: numPages,
            })
          }
          setMovies(movieData.data.Search)
          setError(null)
        } catch (err) {
          console.log(err.message)
          setError(err)
        }
      }
      fetchMovies()
    }
  }, [page, query])

  const handleQueryChange = (event) => {
    const { value, name } = event.target
    setQuery({
      ...query,
      [name]: value,
    })
  }

  const handlePageChange = (event, value) => {
    setPage({
      ...page,
      current: value,
    })
  }

  return (
    <ThemeProvider theme={MUItheme}>
      <CssBaseline />
      <FooterWrapper>
        <Header />
        <SearchBar
          titleQuery={query.title}
          yearQuery={query.year}
          handleChange={handleQueryChange}
        />
        {error && <AlertMessage message={error} />}
        {movies && (
          <DisplayMovies
            movies={movies}
            page={page}
            handlePageChange={handlePageChange}
          />
        )}
      </FooterWrapper>
    </ThemeProvider>
  )
}

export default App
