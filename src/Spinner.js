import React from 'react';

const Spinner = (pro) => {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{pro.message}</div>
        </div>
    );
};

Spinner.defaultProps = {
    message: "Loading"
};

export default Spinner;

