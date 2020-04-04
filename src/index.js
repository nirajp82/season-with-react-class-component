import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(position)
        },
        (err) => {
            console.error(err);
        }
    )
    return (
        <div>
            Pranamji
        </div>
    );
};

export default App;

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);