import './seasonDisplay.css';
import React from 'react';

const seasonConfig = {
    winter: {
        text: 'Burr, Its chilly!!!',
        iconName: 'snowflake'
    },
    summer : {
        text: 'Let\'s hit the beach!!!',
        iconName: 'sun'
    }
};

const getSeason = function (lat, month) {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }
    return lat < 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`seasonDisplay ${season}`}>
            <i className={`${iconName} icon massive topLeft`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive bottomRight`} />
        </div>
    );
};

export default SeasonDisplay;