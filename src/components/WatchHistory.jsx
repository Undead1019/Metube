import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const WatchHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("watchHistory")) || [];
    setHistory(data);
  }, []);

  return (
    <Box p={4}>
      <Typography variant="h4" color="primary">🕒 Watch History</Typography>
      {history.length === 0 ? (
        <Typography mt={2}>No videos watched yet.</Typography>
      ) : (
        history.map((item, index) => (
          <Box key={index} mt={3} p={2} sx={{ backgroundColor: "#2e2e48", borderRadius: "8px" }}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2">Watched on {item.date}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
};

export default WatchHistory;
