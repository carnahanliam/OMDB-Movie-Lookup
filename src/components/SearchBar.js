import SearchIcon from '@mui/icons-material/Search'
import { TextField, Box, MenuItem, Select, InputAdornment } from '@mui/material'

const SearchBar = ({ titleQuery, yearQuery, handleChange }) => {
  const currentYear = new Date().getFullYear()
  // range of years from present year back to 1874 (year of earliest movie on imdb)
  const yearRange = Array.from(
    { length: currentYear - 1873 },
    (_, i) => i + 1874
  ).reverse()

  return (
    <Box
      sx={{
        display: 'flex',
        '& fieldset': {
          borderRadius: '12px',
        },
        p: '25px',
        justifyContent: 'center',
      }}
    >
      <TextField
        name="title"
        value={titleQuery}
        placeholder="Search by title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleChange}
        sx={{
          mr: 2,
          width: 275,
          '& input': {
            padding: '14px ',
          },
          backgroundColor: '#fff',
          borderRadius: '12px',
        }}
      />
      <Select
        name="year"
        value={yearQuery}
        displayEmpty
        disabled={titleQuery !== '' ? false : true}
        placeholder="Search by year"
        onChange={handleChange}
        renderValue={
          yearQuery !== ''
            ? undefined
            : () => (
                <option value="Year" disabled>
                  Year
                </option>
              )
        }
        sx={{
          '.MuiSelect-select': {
            padding: '14px ',
          },
          backgroundColor: '#fff',
          borderRadius: '12px',
        }}
      >
        <MenuItem value={''}>Any year</MenuItem>
        {yearRange.map((y) => (
          <MenuItem key={y} value={y}>
            {y}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default SearchBar
