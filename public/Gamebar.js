const React = require("react")
const ReactDOM = require("react-dom");

class App extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            searchValue : "",
            searchResults : []
        }
    }

    eventChanger = (event) => {
        if (len(event.target.value) > 2) { //only do if string is longer than 2 characters 
            //fetch here
            //use fetch data to input search results

            //update state using setState
            console.log('boop');
        }
        // this.setState({
        //     searchVal: event.target.value
        // })
    }



    render() {
            //should ideally create a new class called gameList that lists all games that were fetched
           return( <div className="container1">
                <form>
                    <input type="text" name="searchVal" className="searchbar-input" autoComplete="off" placeholder="Find a game" value={this.state.searchValue} onChange={this.eventChanger} />
                </form>
            </div>
           );
    }

        }
export default App;