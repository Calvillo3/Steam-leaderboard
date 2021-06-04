console.log('boop');

var globalrange = 15;
class App extends React.Component {  

    constructor(props) {
        super(props);
        this.eventChanger = this.eventChanger.bind(this);
        this.handleButtonBack = this.handleButtonBack.bind(this);
        this.handleButtonNext = this.handleButtonNext.bind(this);
        this.state = {
            searchValue : "",
            searchResults : [],
            currSet : 0, //starting index of what elements to show
            currResults: [] //holds 15 results to be shown on screen, *could change*
        }
    }
    
    eventChanger = (event) => {
        console.log('noop');
        console.log(event.target.value);
        console.log(this.state.searchResults);
        if (event.target.value.length > 2) { //only do if string is longer than 2 characters 
            //fetch here
            //use fetch data to input search results
            fetch('/searchlist/' + event.target.value)
                .then(response => response.json())
                .then(data => {
                    this.setState({searchResults: data, currSet: 0, currResults: data.slice(0, globalrange)}, () => {});
                    console.log(data);
                    console.log(this.state.searchResults);
                })
                .catch(err => {
                    console.log(err);
                })
    
            //update state using setState
        }
        this.setState({
            searchValue: event.target.value
        });
    }
    handleButtonBack() {
        console.log('back pressed');
        if (this.state.currSet >= globalrange) { //checks for overflow
            this.setState({currSet: this.state.currSet - globalrange, currResults: this.state.searchResults.slice(this.state.currSet - 15, this.state.currSet)}, () => {
                console.log(this.state.currResults);
                console.log(this.state.currSet);
            });
        }
    }
    handleButtonNext() {
        console.log('next pressed');
        if (this.state.searchResults.length > this.state.currSet + globalrange) {//checks for overflow
            this.setState({currSet: this.state.currSet + globalrange, currResults: this.state.searchResults.slice(this.state.currSet + 15, this.state.currSet + 30)}, () => {
                console.log(this.state.currResults);
                console.log(this.state.currSet);
            });
        }
    }
    
    render() {
            //should ideally create a new class called gameList that lists all games that were fetched
           return( <div className="container1"><main className="content">
                <form>
                    <input type="text" name="searchVal" className="searchbar-input" autoComplete="off" placeholder="Find a game" value={this.state.searchValue} onChange={this.eventChanger} />
                </form>
                <ul className="gamelist">
                    {this.state.currResults.map(game => <li key={game.id}><a href="#">
                        <div className='imgdiv'><img className="imgdivimg" src={"https://cdn.akamai.steamstatic.com/steam/apps/" + game.appid+"/header_292x136.jpg"} onerror='this.src="https://steamdb.info/static/img/applogo.svg"'/></div>
                        <div className="gameinfo">
                        <div className="gametitle">{game.name}</div>
                        {/* <span className="platform-img"></span> */}
                        <svg version="1.1" width="40" height="40" viewBox="0 0 16 16" className="platform-img" aria-hidden="true"><path d="M7 7V1L0 2v5zM8 7h8V0L8 1zM8 8v6l8 1V8zM7 8H0v5l7 1z"></path></svg>
                        </div>
                        </a></li>)}
                </ul>
                <div className="buttoncontainer">
                    <input type="button" value="Back" className="backbutton" onClick={this.handleButtonBack}/>
                    <input type="button" value="Next" className="nextbutton" onClick={this.handleButtonNext}/>
                </div>
            </main></div>
           );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
    