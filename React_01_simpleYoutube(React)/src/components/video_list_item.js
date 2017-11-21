
import React from 'react';

//const VideoListItem = (props) => { ปลี่ยนไปใช้ท่าของ es6 แทน
const VideoListItem = ({id, video, onVideoSelect}) => {
    //const video = props.video; เปลี่ยนไปใช้ท่าของ es6 แทน
    const imageUrl = video.snippet.thumbnails.default.url;
    const titleUrl = video.snippet.title;
    //console.log(id);
    console.log(video);
    return (
        <li onClick={()=> onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>
                <div className="media-body">
                    <div className="media-heading">{titleUrl}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;

