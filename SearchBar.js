import React, { Component } from "react";

class Searchbar extends Component {
constructor(props){
    super(props)
    this.state = {
        SearchInputs :[]
    }
}

    handleSearchinputs = (value) =>
    {
        this.setState({
            searchInputs : value.toLowerCase()
        })
        console.log(this.state.searchInputs)
    }
    render() {
        return(
            <div>
                <input type = "text" id='search' placeholder = "Search" onChange = {(event)=>this.handleSearchInputs(event.target.value)} />
                <button>Search</button>
                <button>Clear Search</button>
            </div>
        )
    }
}
export default Searchbar;