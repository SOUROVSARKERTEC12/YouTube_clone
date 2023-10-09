import {Paper, InputBase, IconButton} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)

            setSearchTerm('')
        }
    }

    return (
        <Paper
            component='form'
            ioSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: {sm: 5}
            }}
        >
            <InputBase
                sx={{
                    border: "none",
                    outline: "none",
                    width: "350px"
                }}
                placeholder="Search..."
                inputProps={{'aria-label': 'search...'}}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
                type="submit"
                aria-label="search"
                sx={{p: '10px', color:'red'}}
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
)
}

export default SearchBar;