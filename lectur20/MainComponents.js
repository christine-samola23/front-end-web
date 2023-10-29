const Link= ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ReactRouterDOM.HashRouter>
                <div className="App">
                    <ul className="App-header">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/about" Component={About}/>
                    <Route path="/contact" Component={Contact}/>
                </div>
            </ReactRouterDOM.HashRouter>
        );
    }
}
ReactDom.render(<App/>, document.getElementById("app"));