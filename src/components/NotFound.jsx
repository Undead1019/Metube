import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => (
  <Box p={5} sx={{ textAlign: "center" }}>
    <Typography variant="h2" color="error">404</Typography>
    <Typography variant="h5" mt={2}>Page Not Found</Typography>
    <Typography mt={1}>Oops! Looks like you're lost in the stream.</Typography>
  </Box>
);

export default NotFound;
