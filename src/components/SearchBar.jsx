import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: '20px',
        border: '1px solid #6B21A8',
        backgroundColor: '#2a2a40',
        boxShadow: 'none',
        pl: 2,
        mr: { sm: 5 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search MeTube..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          background: 'transparent',
          color: '#eee',
          border: 'none',
          outline: 'none',
          flex: 1,
        }}
      />
      <IconButton type="submit" sx={{ p: '10px', color: '#a855f7' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
