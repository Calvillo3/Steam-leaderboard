
//import ReactHtmlParser from "react-html-parser";

var globalrange = 10;
class App extends React.Component {  

    constructor(props) {
        super(props);
        this.eventChanger = this.eventChanger.bind(this);
        this.handleButtonBack = this.handleButtonBack.bind(this);
        this.handleButtonNext = this.handleButtonNext.bind(this);
        this.gameInformation = this.gameInformation.bind(this);
        this.handleMenuExit = this.handleMenuExit.bind(this);
        this.state = {
            searchValue : "",
            searchResults : [],
            currSet : 0, //starting index of what elements to show
            currResults: [], //holds 15 results to be shown on screen, *could change*
            selectedID : "",
            selectedtype : "",
            selectedInfo : "",
            windowState : false,
            playerCount : "",
            selectedname : "",
            selectedcontroller : "",
            selectedgenres : [],
            selecteddev : "",
            selectedpub : "",
            selectedrelease : ""
        }
    }
    
    eventChanger = (event) => {
        if (event.target.value.length > 2) { //only do if string is longer than 2 characters 
            //fetch here
            //use fetch data to input search results
            fetch('/searchlist/' + event.target.value)
                .then(response => response.json())
                .then(data => {
                    this.setState({searchResults: data, currSet: 0, currResults: data.slice(0, globalrange)}, () => {});
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
        if (this.state.currSet >= globalrange) { //checks for overflow
            this.setState({currSet: this.state.currSet - globalrange, currResults: this.state.searchResults.slice(this.state.currSet - 15, this.state.currSet)}, () => {
            });
        }
    }
    handleButtonNext() {
        if (this.state.searchResults.length > this.state.currSet + globalrange) {//checks for overflow
            this.setState({currSet: this.state.currSet + globalrange, currResults: this.state.searchResults.slice(this.state.currSet + 15, this.state.currSet + 30)}, () => {
            });
        }
    }
    handleMenuExit() {
        const element = document.querySelector(".popupwindow");
        element.style.display = "none";
    }
    gameInformation(val)  {
        console.log(val);
        let gamedet;
        let schema;
        let count;
        fetch('/gamedetails/' + val)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({selectedInfo: data.detailed_description, selecteddev : data.developers[0], selectedpub: data.publishers[0],
                    selectedID: val, selectedtype: data.type, selectedcontroller: data.controller_support, selectedrelease : data.release_date.date,
                    selectedgenres: data.genres, selectedname: data.name}
                    , () => {});
                const element = document.querySelector(".popupwindow");
                element.style.display = "block";
            })
            .catch(err => {
                console.log(err);
            })
        // fetch('/gameschema/' + val)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState({})
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        fetch('/playercount/' + val)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                this.setState({playerCount: data}, () => {});
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
            //should ideally create a new class called gameList that lists all games that were fetched
           return( <div className="container1"><main className="content">
               <h1>Steam Numbers</h1>
                <form>
                    <input type="text" name="searchVal" className="searchbar-input" autoComplete="off" placeholder="Find a game" value={this.state.searchValue} onChange={this.eventChanger} />
                </form>
                <ul className="gamelist">
                    {this.state.currResults.map(game => <li key={game.appid}><a href="#" onClick={() => {this.gameInformation(game.appid)}}>
                        <div className='imgdiv'><img className="imgdivimg" src={"https://cdn.akamai.steamstatic.com/steam/apps/" + game.appid+"/capsule_231x87.jpg"} /></div>
                        <div className="gameinfo">
                        <div className="gametitle">{game.name}</div>
                        {/* <span className="platform-img"></span> */}
                        <svg version="1.1" width="20" height="20" viewBox="0 0 16 16" className="platform-img" aria-hidden="true"><path d="M7 7V1L0 2v5zM8 7h8V0L8 1zM8 8v6l8 1V8zM7 8H0v5l7 1z"></path></svg>
                        </div>
                        </a></li>)}
                </ul>
                <div className="buttoncontainer">
                    <input type="button" value="Back" className="backbutton" onClick={this.handleButtonBack}/>
                    <input type="button" value="Next" className="nextbutton" onClick={this.handleButtonNext}/>
                </div>
            </main>
            <div className="popupwindow">
                <input type="button" value="Back" className="backbutton" onClick={this.handleMenuExit}/>
                <div className="imginfo">
                <img className="herocapsule" src={"https://cdn.akamai.steamstatic.com/steam/apps/" + this.state.selectedID + "/capsule_616x353.jpg"}/>
                <p>{HTMLReactParser(this.state.selectedInfo)}</p></div>
                <h2>{this.state.selectedname}</h2>
                <table>
                    <tbody>
                    <tr><td>App ID</td><td>{this.state.selectedID}</td></tr>
                    <tr><td>App Type</td><td>{this.state.selectedtype}</td></tr>
                    <tr><td>Developer</td><td>{this.state.selecteddev}</td></tr>
                    <tr><td>Publisher</td><td>{this.state.selectedpub}</td></tr>
                    <tr><td>Release Date</td><td>{this.state.selectedrelease}</td></tr>
                    <tr><td>Controller Support</td><td>{this.state.selectedcontroller}</td></tr>
                    </tbody>
                </table>
                <h3>Current Players: {this.state.playerCount}</h3>
            </div>
            </div>
           );
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
    );
    