
import React , { Component } from 'react';
// ประกาศ import { Component } บอกประมาณว่า const Component = React.Component;

//ท่าเก่าประกาศแบบ function component ก่อนเปลี่ยนเป็น class component
//ใน class component มี 'state'! ซึ่งไม่มีใน function component
/*const SearchBar = () => { 
    return <input />
};*/

//ท่าเก่าก่อนประกาศ import { Component }
/*class SearchBar extends React.Component { 
    render() {
        return <input />;
    }

}*/

class SearchBar extends Component{
    constructor(props){
        super(props);
        
        this.state = {term: ''};
    }

    onInputChange(event){
        this.setState({term:event});
        this.props.onSearchTermChange(event);
    }

    render(){
        //return <input onChange={this.onInputChange} />;
        //return <input onChange={ (event) => console.log(event)} />; ท่านี้ไม่ต้องใช้ medthod onInputChange()
        //Value of the input : {this.state.term} โค้ดเก่า
        //onChange = { event => this.setState({ term: event.target.value })} โค้ดเก่า
        return (
        <div className="search-bar">
            <input 
                value = {this.state.term}
                onChange = { event => this.onInputChange(event.target.value)} />
            
        </div>
        )
    }

}

export default SearchBar;
