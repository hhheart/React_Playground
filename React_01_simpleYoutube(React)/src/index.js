
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAWe_ylKF4r4WIVJ4eXBOBq_L3c9jw4FiE';

/* const App = function() {
    return <div>Hi!</div>
}*/
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null,
        };

        this.videoSearch('dragonball')
    }

    videoSearch(term) {
        //YTSearch( {key: API_KEY, term: 'surfboards'}, function(videos) {
        YTSearch( {key: API_KEY, term: term}, (videos) =>  {
            //console.log(videos);
            //this.setState( { videos: videos}); ใช้ท่าข้างล่างแทน ปล. ใช้ได้ก็ต่อเมื่อ key กับ property มีชื่อเดียวกัน (es6 property)
            //this.setState({ videos }); 
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            })
        });
    }
    
    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        //<SearchBar onSearchTermChange={event => this.videoSearch(event)}/> โค้ดเก่าก่อนทำ debounce
        return ( 
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                onVideoSelect={ event => this.setState({selectedVideo: event})}
                videos={this.state.videos} />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));