import React from 'react';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';

const Loader = () => (
  <Box minHeight="95vh" sx={{ backgroundColor: '#1e1e2f', color: '#ddd' }}>
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      spacing={2}
    >
      <CircularProgress sx={{ color: '#a855f7' }} />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        Loading content on MeTube...
      </Typography>
    </Stack>
  </Box>
);

export default Loader;
