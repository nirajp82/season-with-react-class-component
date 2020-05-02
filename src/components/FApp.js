import React, { useState, useEffect } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const FApp = () => {
    const [latitude, setLatitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const fetchLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLatitude(pos.coords.latitude);
            },
            (err) => {
                setErrorMsg(err.message);
            }
        )
    };

    const getRenderContent = () => {
        if (!errorMsg && !latitude) {
            return <Spinner message="Please allow location request!" />
        }
        else if (!errorMsg && latitude) {
            return <SeasonDisplay lat={latitude} />
        }
        return <div>Error: {errorMsg}</div>
    };

    useEffect(() =>
    {
        fetchLocation();
    }, []);
    
    return (
        <div >
            {getRenderContent()}
        </div>
    )
};

export default FApp;