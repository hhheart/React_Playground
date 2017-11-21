
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //const videos = props.videos;
    const videoItem = props.videos.map((video) => {
        return (
            <VideoListItem 
                onVideoSelect={props.onVideoSelect}
                key={video.etag} 
                id={video.etag} 
                video={video} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    );
}

export default VideoList;