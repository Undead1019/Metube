import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
      backgroundColor: '#2e2e48',
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{ textDecoration: 'none' }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#ddd',
        }}
      >
        <CardMedia
          component="img"
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title || 'MeTube Channel'}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '2px solid #a855f7',
            objectFit: 'cover',
          }}
        />
        <Typography variant="h6" sx={{ color: '#e0e0e0' }}>
          {channelDetail?.snippet?.title || 'Unnamed Channel'}
          <CheckCircleIcon sx={{ fontSize: '14px', color: '#aaa', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: '#999' }}>
            {parseInt(channelDetail.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
