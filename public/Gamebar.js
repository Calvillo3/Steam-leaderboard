import React from 'react';

class App extends React.Component {  

    constructor(props) {
        super(props)
        this.state = {
            searchVal : "",
            searchResults : []
        }
    }

    eventChanger = (event) => {
        if (len(event.target.value) > 2) { //only do if string is longer than 2 characters 
            //fetch here
            //use fetch data to input search results

            //update state using setState
        }
        // this.setState({
        //     searchVal: event.target.value
        // })
    }

    render () {
        return (
            //should ideally create a new class called gameList that lists all games that were fetched
        );
    }
}
export default App;