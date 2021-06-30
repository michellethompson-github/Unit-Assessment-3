import React, { Component } from "react";
import '../App.css';

class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            SearchInputs: [],
            filteredData: [],
            shelf: []
        }
    }

    handleSearchInputs = (value) => {
        this.setState({
            searchInputs: value.toLowerCase()
        })
    }

    handleSearchButton = async () => {
        let data = this.props.books.filter(item => {
            console.log(item.title)
            return item.title.toLowerCase().includes(this.state.searchInputs)
        })
        console.log("data", this.props.books)
        await this.setState({
            filteredData: data
        })
    }

    handleClearSearchButton = () => {
        this.setState({
            filteredData: []
        })
        document.getElementById('search').value = ''
    }

    handleShelf = (id) => {
        let shelfData = this.props.books.filter(item => {
            return item.id === id
        });
        this.setState({
            shelf: [...this.state.shelf, ...shelfData]
        })
    }

    handleClearShelf = () => {
        this.setState({
            shelf: []
        })
    }


    render() {
        let mappedBooks;
        if (this.state.filteredData.length === 0) {
            mappedBooks = this.props.books.map((item) => {
                return (
                    <div className="single-item">
                        <img className="my-img" src={item.img} onClick={() => { this.handleShelf(item.id) }} />
                        <h4>{item.author}</h4>
                        <p>{item.title}</p>
                        {/* <button onClick={() => { this.handleShelf(item.id) }} >Add To shelf</button> */}
                    </div>
                )
            })
        }
        else {
            mappedBooks = this.state.filteredData.map(item => {
                return (
                    <div className="single-item">
                        <img className="my-img" src={item.img} />
                        <h4>{item.author}</h4>
                        <p>{item.title}</p>
                    </div>
                )
            })
        }

        return (
            <div>
                <div><center>
                    <input type="text" id='search' placeholder="Search" style = {{marginRight :"10px"}} onChange={(event) => this.handleSearchInputs(event.target.value)} />
                    <button  style = {{marginRight :"10px"}} onClick={() => { this.handleSearchButton() }}>Search</button>
                    <button onClick={() => this.handleClearSearchButton()}>Clear Search</button>
                </center>

                </div>
                <div>
                    <div className="main-content">
                        <h1>This is Our Main Section</h1>
                        <div class="required-data">
                            {mappedBooks}
                        </div>
                    </div>
                    <div className="sidebar">
                        <center>
                            <h3>Shelf</h3>
                            <br />
                            <button onClick={() => this.handleClearShelf()}>Clear Shelf</button>
                        </center>
                        <ul>
                            {
                                this.state.shelf.map(item => {
                                    return (
                                        <li>{item.title}</li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default BookList