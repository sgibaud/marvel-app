import React, {Component} from 'react';
import SearchIcon from '@material-ui/icons/Search';

import '../css/searchBarstyle.css';


class SearchComic extends Component {

    constructor(props){
        super(props);

        this.state = {
            inputText:''
        }
    }

    handleChange = (event) => {
        this.setState({inputText:event.target.value})
    }

    render(){
        return(
            <div className="searchBar">
                <input
                    id="searchInput"
                    onChange={this.handleChange}
                    type='text'
                    placeholder="Entrez le nom d'un comic"
                    value={this.state.inputText}
                ></input>
                <button
                id="searchButton"
                onClick={() => this.props.handleSearch(this.state.inputText)}
                > <SearchIcon fontSize="small"/> OK</button>
            </div>
        )
    }
}

export default SearchComic;