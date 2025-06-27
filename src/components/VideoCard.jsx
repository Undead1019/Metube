import React from 'react';
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card
    sx={{
      width: { xs: '100%', sm: '358px', md: "320px" },
      boxShadow: "none",
      borderRadius: 2,
      backgroundColor: "#2e2e48"
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: "100%", height: 180 }}
      />
    </Link>

    <CardContent sx={{ height: '106px', padding: "12px 16px", color: "#eee" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#eee">
          {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" sx={{ color: "#bbb", display: "flex", alignItems: "center" }}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: 12, color: "#a0a0a0", ml: 1 }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
