import React from 'react';
import { Typography, Box } from '@mui/material';

const Trending = () => {
  const trendingVideos = [
    { title: "React Crash Course", channel: "FreeCodeCamp", views: "1.2M" },
    { title: "Top 10 JavaScript Tricks", channel: "Fireship", views: "890K" },
    { title: "TailwindCSS in 10 mins", channel: "Traversy Media", views: "740K" },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom color="primary">🔥 Trending</Typography>
      {trendingVideos.map((video, idx) => (
        <Box key={idx} mb={3} p={2} sx={{ backgroundColor: "#2e2e48", borderRadius: "10px" }}>
          <Typography variant="h6">{video.title}</Typography>
          <Typography variant="subtitle2">By {video.channel} — {video.views} views</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Trending;
