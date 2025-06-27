import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';
import Trending from "./components/Trending";
import WatchHistory from "./components/WatchHistory";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#1e1e2f', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/history' element={<WatchHistory />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
