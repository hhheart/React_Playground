import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PackageList from './components/package_list';

const Json = require('../data.json');

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            //packages: []   
            packages: Json 
        };
    }    
    componentWillMount(){
        axios.get('https://cors-anywhere.herokuapp.com/http://supertam.xyz:3000/package')
        .then(res => {
            //console.log(res)
            this.setState({ packages: res.data });
        });
    }
    render(){
        return ( 
            <div>
                <PackageList packages={this.state.packages} />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));