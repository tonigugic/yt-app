import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
// import usePosts from '../hooks/usePosts';

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const posts = usePosts();

  // const renderedPosts = posts.map(post => {
  //   return <li key={post.id}>{post.title}</li>;
  // });

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column ">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos} />
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h3>Posts</h3>
    //   <ul>{renderedPosts}</ul>
    // </div>
  );
};

export default App;