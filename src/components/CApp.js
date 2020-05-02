import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class CApp extends React.Component {

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
    };

    getRenderContent = () => {
        if (!this.state.error && !this.state.lat) {
            return <Spinner message="Please allow location request!" />
        }
        else if (!this.state.error && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Error: {this.state.error}</div>
    };

    render() {
        return (
            <div >
                {this.getRenderContent()}
            </div>
        )
    };
};

export default CApp;