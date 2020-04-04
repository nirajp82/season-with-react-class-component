import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    state = { lat: null, error: null };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude });
            },
            (err) => {
                this.setState({ error: err.message });
            }
        )
    }

    render() {
        if (!this.state.error && !this.state.lat) {
            return <div>Loading...</div>
        }
        else if (!this.state.error && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Error: {this.state.error}</div>
    };
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);

//import React from 'react';
//import ReactDOM from 'react-dom';

//class App extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = { lat: null };
//        window.navigator.geolocation.getCurrentPosition(
//            (pos) => {
//                this.setState({ lat: pos.coords.latitude });
//            },
//            (err) => {
//                console.log(err);
//            });
//    }

//    render() {
//        return (
//            <div>Lat: {this.state.lat}</div>
//        );
//    }
//}

//ReactDOM.render(<App />,
//    document.querySelector("#root"));


//import React from 'react';
//import ReactDOM from 'react-dom';

//class App extends React.Component {

//    render() {
//        window.navigator.geolocation.getCurrentPosition(
//            (position) => {
//                console.log(position);
//            },
//            (error) => {
//                console.error(error);
//            }
//        );
//        return <div>Pranam!</div>
//    };
//}

//ReactDOM.render(<App />,
//    document.querySelector("#root"));

//import React from 'react';
//import ReactDOM from 'react-dom';

//const App = () => {
//    window.navigator.geolocation.getCurrentPosition(
//        (position) => {
//            console.log(position)
//        },
//        (err) => {
//            console.error(err);
//        }
//    )
//    return (
//        <div>
//            Pranamji
//        </div>
//    );
//};

//export default App;

//ReactDOM.render(
//    <App />,
//    document.querySelector("#root")
//);